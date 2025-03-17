import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BatchAssignment.css";

const BatchAssignment = () => {
    const [batches, setBatches] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const [weekdays, setWeekdays] = useState([]);
    const [bookedSchedules, setBookedSchedules] = useState([]);
    const [facultyAssignments, setFacultyAssignments] = useState([]);
    const [timeSlots, setTimeSlots] = useState(["08:00-09:00", "09:00-10:00", "10:00-11:00", "11:30-12:30", "02:00-03:00", "03:00-04:00", "04:00-05:00"]);

    const [form, setForm] = useState({
        batchId: "",
        startDate: "",
        endDate: "",
        subjectCode: "",
        facultyId: "",
        schedule: []
    });

    useEffect(() => {
        axios.get("http://localhost:8080/getBatches")
            .then(res => setBatches(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleBatchChange = (batchId) => {
        setForm({ ...form, batchId });

        axios.get(`http://localhost:8080/getSubjectsByBatch/${batchId}`)
            .then(res => setSubjects(res.data))
            .catch(err => console.error(err));

        axios.get(`http://localhost:8080/getAssignedSchedules/${batchId}`)
            .then(res => setBookedSchedules(res.data))
            .catch(err => console.error(err));
    };

    const handleSubjectChange = (subjectCode) => {
        setForm({ ...form, subjectCode });

        axios.get(`http://localhost:8080/getFaculties/${subjectCode}`)
            .then(res => setFaculties(res.data))
            .catch(err => console.error(err));

        axios.get(`http://localhost:8080/getFacultyAssignments/${subjectCode}`)
            .then(res => setFacultyAssignments(res.data))
            .catch(err => console.error(err));
    };

    const handleDateChange = () => {
        if (form.startDate && form.endDate) {
            const start = new Date(form.startDate);
            const end = new Date(form.endDate);
            let daysList = [];

            // Get weekdays (Monday to Friday)
            const weekdayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            while (start <= end) {
                const dayOfWeek = start.getDay(); // 0 = Sunday, 1 = Monday, etc.
                if (dayOfWeek > 0 && dayOfWeek < 6) { // 1-5 = Monday-Friday
                    daysList.push({
                        date: start.toISOString().split("T")[0],
                        day: weekdayNames[dayOfWeek - 1], // Convert to 0-based index for our array
                        timeSlot: ""
                    });
                }
                start.setDate(start.getDate() + 1);
            }

            setWeekdays(daysList);
            setForm({ ...form, schedule: daysList });
        }
    };

    // const isTimeSlotBooked = (day, timeSlot) => {
    //     return bookedSchedules.some(schedule => 
    //         schedule.date === day.date && schedule.timeSlot === timeSlot
    //     );
    // };

    const isTimeSlotBooked = (day, timeSlot) => {
        const bookedEntry = bookedSchedules.find(schedule =>
            schedule.date === day.date && schedule.timeSlot === timeSlot
        );

        if (!bookedEntry) return null;

        return {
            subjectName: bookedEntry.subjectName || "Unknown Subject",
            facultyName: bookedEntry.facultyName || "Unknown Faculty"
        };
    };

    const isFacultyBooked = (timeSlot) => {
        return facultyAssignments.some(assignment =>
            assignment.facultyId === form.facultyId &&
            assignment.timeSlot === timeSlot
        );
    };

    const handleTimeSlotSelection = (day, timeSlot) => {
        if (isTimeSlotBooked(day, timeSlot) || isFacultyBooked(timeSlot)) {
            return; // Do nothing if the slot is already booked
        }

        // Find the index of the day in the schedule
        const dayIndex = form.schedule.findIndex(item => item.date === day.date);

        if (dayIndex !== -1) {
            const updatedSchedule = [...form.schedule];

            // If the time slot is already selected, deselect it
            if (updatedSchedule[dayIndex].timeSlot === timeSlot) {
                updatedSchedule[dayIndex].timeSlot = "";
            } else {
                // Otherwise, select this time slot
                updatedSchedule[dayIndex].timeSlot = timeSlot;
            }

            setForm({ ...form, schedule: updatedSchedule });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedSubject = subjects.find(sub => sub.subjectCode === form.subjectCode);
        const selectedFaculty = faculties.find(fac => fac.staffOrFacultyId === form.facultyId);

        if (!selectedSubject || !selectedFaculty) {
            alert("Please select a valid subject and faculty");
            return;
        }

        // Filter out days with no time slot selected
        const scheduledDays = form.schedule.filter(day => day.timeSlot);

        if (scheduledDays.length === 0) {
            alert("Please select at least one time slot");
            return;
        }

        const payload = {
            batchId: form.batchId,
            schedule: scheduledDays,
            subject: { subjectCode: selectedSubject.subjectCode, subjectName: selectedSubject.subjectName },
            faculty: { staffOrFacultyId: selectedFaculty.staffOrFacultyId, firstName: selectedFaculty.firstName, lastName: selectedFaculty.lastName }
        };

        axios.post("http://localhost:8080/addTimetable", payload)
            .then(res => alert("Timetable added successfully!"))
            .catch(err => alert(err.response?.data?.message || "Error assigning timetable"));
    };

    return (
        <>            <div class="main-wrapper">
            <div class="page-wrapper cardhead">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-8 float-end ms-auto">
                            <div class="d-flex title-head">
                                <div class="daterange-picker d-flex align-items-center justify-content-center">
                                    <div class="head-icons mb-0">
                                        <a href="/BatchAssignment" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">

                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title">Assign Faculty to Batch</h5>

                                </div>
                                <div class="card-body">
                                    <div className="batch-assignment-container">
                                        <h2 >Assign Timetable</h2>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-header">
                                                <div className="form-group">
                                                    <label>Batch:</label>
                                                    <select
                                                        className="form-select"
                                                        value={form.batchId}
                                                        onChange={(e) => handleBatchChange(e.target.value)}
                                                    >
                                                        <option value="">Select Batch</option>
                                                        {batches.map(batch => (
                                                            <option key={batch.batchId} value={batch.batchId}>{batch.batchName}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="date-range">
                                                    <div className="form-group">
                                                        <label>Start Date:</label>
                                                        <input
                                                            type="date"
                                                            className="form-input"
                                                            value={form.startDate}
                                                            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>End Date:</label>
                                                        <input
                                                            type="date"
                                                            className="form-input"
                                                            value={form.endDate}
                                                            onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                                                            onBlur={handleDateChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>Subject:</label>
                                                    <select
                                                        className="form-select"
                                                        value={form.subjectCode}
                                                        onChange={(e) => handleSubjectChange(e.target.value)}
                                                    >
                                                        <option value="">Select Subject</option>
                                                        {subjects.map(subject => (
                                                            <option key={subject.subjectCode} value={subject.subjectCode}>{subject.subjectName}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <label>Faculty:</label>
                                                    <select
                                                        className="form-select"
                                                        value={form.facultyId}
                                                        onChange={(e) => setForm({ ...form, facultyId: e.target.value })}
                                                    >
                                                        <option value="">Select Faculty</option>
                                                        {faculties.map(faculty => (
                                                            <option
                                                                key={faculty.staffOrFacultyId}
                                                                value={faculty.staffOrFacultyId}
                                                            >
                                                                {faculty.firstName} {faculty.lastName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="schedule-section">
                                                <h3>Schedule</h3>

                                                <div className="timetable-grid">
                                                    <table className="timetable">
                                                        <thead>
                                                            <tr>
                                                                <th>Day</th>
                                                                {timeSlots.map(slot => (
                                                                    <th key={slot}>{slot}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {Array.from(new Set(weekdays.map(day => day.day))).map(weekdayName => {
                                                                const datesForWeekday = weekdays.filter(day => day.day === weekdayName);

                                                                return (
                                                                    <tr key={weekdayName}>
                                                                        <td className="weekday-name">{weekdayName}</td>
                                                                        {timeSlots.map(timeSlot => {
                                                                            const bookedDetails = datesForWeekday.map(day => isTimeSlotBooked(day, timeSlot)).find(detail => detail);
                                                                            const isFacultyConflict = isFacultyBooked(timeSlot);
                                                                            const isSelected = datesForWeekday.some(day => {
                                                                                const dayInSchedule = form.schedule.find(item => item.date === day.date);
                                                                                return dayInSchedule && dayInSchedule.timeSlot === timeSlot;
                                                                            });

                                                                            return (
                                                                                <td key={timeSlot} className={`time-cell ${bookedDetails || isFacultyConflict ? 'booked' : ''} ${isSelected ? 'selected' : ''}`} onClick={() => {
                                                                                    if (!bookedDetails && !isFacultyConflict) {
                                                                                        datesForWeekday.forEach(day => {
                                                                                            handleTimeSlotSelection(day, timeSlot);
                                                                                        });
                                                                                    }
                                                                                }}>
                                                                                    {bookedDetails ? `${bookedDetails.subjectName} - ${bookedDetails.facultyName}` : (isFacultyConflict ? 'Faculty Busy' : (isSelected ? '✓' : ''))}
                                                                                </td>
                                                                            );
                                                                        })}
                                                                    </tr>
                                                                );
                                                            })}
                                                        </tbody>

                                                    </table>
                                                </div>
                                            </div>

                                            <div className="form-actions">
                                                <button type="submit" className="submit-button">Assign Timetable</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default BatchAssignment;