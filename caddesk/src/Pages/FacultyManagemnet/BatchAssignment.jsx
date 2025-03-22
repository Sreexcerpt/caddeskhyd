// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./BatchAssignment.css";

// const BatchAssignment = () => {
//     const [batches, setBatches] = useState([]);
//     const [subjects, setSubjects] = useState([]);
//     const [faculties, setFaculties] = useState([]);
//     const [weekdays, setWeekdays] = useState([]);
//     const [bookedSchedules, setBookedSchedules] = useState([]);
//     const [facultyAssignments, setFacultyAssignments] = useState([]);
//     const [timeSlots, setTimeSlots] = useState(["08:00-09:00", "09:00-10:00", "10:00-11:00", "11:30-12:30", "02:00-03:00", "03:00-04:00", "04:00-05:00"]);

//     const [form, setForm] = useState({
//         batchId: "",
//         startDate: "",
//         endDate: "",
//         subjectCode: "",
//         facultyId: "",
//         schedule: []
//     });

//     useEffect(() => {
//         axios.get("/getBatches")
//             .then(res => setBatches(res.data))
//             .catch(err => console.error(err));
//     }, []);

//     const handleBatchChange = (batchId) => {
//         setForm({ ...form, batchId });

//         axios.get(`/getSubjectsByBatch/${batchId}`)
//             .then(res => setSubjects(res.data))
//             .catch(err => console.error(err));

//         axios.get(`/getAssignedSchedules/${batchId}`)
//             .then(res => setBookedSchedules(res.data))
//             .catch(err => console.error(err));
//     };

//     const handleSubjectChange = (subjectCode) => {
//         setForm({ ...form, subjectCode });

//         axios.get(`/getFaculties/${subjectCode}`)
//             .then(res => setFaculties(res.data))
//             .catch(err => console.error(err));

//         axios.get(`/getFacultyAssignments/${subjectCode}`)
//             .then(res => setFacultyAssignments(res.data))
//             .catch(err => console.error(err));
//     };

//     const handleDateChange = () => {
//         if (form.startDate && form.endDate) {
//             const start = new Date(form.startDate);
//             const end = new Date(form.endDate);
//             let daysList = [];

//             // Get weekdays (Monday to Friday)
//             const weekdayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//             while (start <= end) {
//                 const dayOfWeek = start.getDay(); // 0 = Sunday, 1 = Monday, etc.
//                 if (dayOfWeek > 0 && dayOfWeek < 6) { // 1-5 = Monday-Friday
//                     daysList.push({
//                         date: start.toISOString().split("T")[0],
//                         day: weekdayNames[dayOfWeek - 1], // Convert to 0-based index for our array
//                         timeSlot: ""
//                     });
//                 }
//                 start.setDate(start.getDate() + 1);
//             }

//             setWeekdays(daysList);
//             setForm({ ...form, schedule: daysList });
//         }
//     };

//     // const isTimeSlotBooked = (day, timeSlot) => {
//     //     return bookedSchedules.some(schedule => 
//     //         schedule.date === day.date && schedule.timeSlot === timeSlot
//     //     );
//     // };

//     const isTimeSlotBooked = (day, timeSlot) => {
//         const bookedEntry = bookedSchedules.find(schedule =>
//             schedule.date === day.date && schedule.timeSlot === timeSlot
//         );

//         if (!bookedEntry) return null;

//         return {
//             subjectName: bookedEntry.subjectName || "Unknown Subject",
//             facultyName: bookedEntry.facultyName || "Unknown Faculty"
//         };
//     };

//     const isFacultyBooked = (timeSlot) => {
//         return facultyAssignments.some(assignment =>
//             assignment.facultyId === form.facultyId &&
//             assignment.timeSlot === timeSlot
//         );
//     };

//     const handleTimeSlotSelection = (day, timeSlot) => {
//         if (isTimeSlotBooked(day, timeSlot) || isFacultyBooked(timeSlot)) {
//             return; // Do nothing if the slot is already booked
//         }

//         // Find the index of the day in the schedule
//         const dayIndex = form.schedule.findIndex(item => item.date === day.date);

//         if (dayIndex !== -1) {
//             const updatedSchedule = [...form.schedule];

//             // If the time slot is already selected, deselect it
//             if (updatedSchedule[dayIndex].timeSlot === timeSlot) {
//                 updatedSchedule[dayIndex].timeSlot = "";
//             } else {
//                 // Otherwise, select this time slot
//                 updatedSchedule[dayIndex].timeSlot = timeSlot;
//             }

//             setForm({ ...form, schedule: updatedSchedule });
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const selectedSubject = subjects.find(sub => sub.subjectCode === form.subjectCode);
//         const selectedFaculty = faculties.find(fac => fac.employeeId === form.facultyId);

//         if (!selectedSubject || !selectedFaculty) {
//             alert("Please select a valid subject and faculty");
//             return;
//         }

//         // Filter out days with no time slot selected
//         const scheduledDays = form.schedule.filter(day => day.timeSlot);

//         if (scheduledDays.length === 0) {
//             alert("Please select at least one time slot");
//             return;
//         }

//         const payload = {
//             batchId: form.batchId,
//             schedule: scheduledDays,
//             subject: { subjectCode: selectedSubject.subjectCode, subjectName: selectedSubject.subjectName },
//             faculty: { employeeId: selectedFaculty.employeeId, firstName: selectedFaculty.firstName, lastName: selectedFaculty.lastName }
//         };

//         axios.post("/addTimetable", payload)
//             .then(res => alert("Timetable added successfully!"))
//             .catch(err => alert(err.response?.data?.message || "Error assigning timetable"));
//     };

//     return (
//         <>            <div class="main-wrapper">
//             <div class="page-wrapper cardhead">
//                 <div class="content container-fluid">
//                     <div class="row">
//                         <div class="col-md-8 float-end ms-auto">
//                             <div class="d-flex title-head">
//                                 <div class="daterange-picker d-flex align-items-center justify-content-center">
//                                     <div class="head-icons mb-0">
//                                         <a href="/BatchAssignment" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-md-12">

//                             <div class="card">
//                                 <div class="card-header">
//                                     <h5 class="card-title">Assign Faculty to Batch</h5>

//                                 </div>
//                                 <div class="card-body">
//                                     <div className="batch-assignment-container">
//                                         <h2 >Assign Timetable</h2>
//                                         <form onSubmit={handleSubmit}>
//                                             <div className="form-header">
//                                                 <div className="form-group">
//                                                     <label>Batch:</label>
//                                                     <select
//                                                         className="form-select"
//                                                         value={form.batchId}
//                                                         onChange={(e) => handleBatchChange(e.target.value)}
//                                                     >
//                                                         <option value="">Select Batch</option>
//                                                         {batches.map(batch => (
//                                                             <option key={batch.batchId} value={batch.batchId}>{batch.batchName}</option>
//                                                         ))}
//                                                     </select>
//                                                 </div>

//                                                 <div className="date-range">
//                                                     <div className="form-group">
//                                                         <label>Start Date:</label>
//                                                         <input
//                                                             type="date"
//                                                             className="form-input"
//                                                             value={form.startDate}
//                                                             onChange={(e) => setForm({ ...form, startDate: e.target.value })}
//                                                         />
//                                                     </div>

//                                                     <div className="form-group">
//                                                         <label>End Date:</label>
//                                                         <input
//                                                             type="date"
//                                                             className="form-input"
//                                                             value={form.endDate}
//                                                             onChange={(e) => setForm({ ...form, endDate: e.target.value })}
//                                                             onBlur={handleDateChange}
//                                                         />
//                                                     </div>
//                                                 </div>

//                                                 <div className="form-group">
//                                                     <label>Subject:</label>
//                                                     <select
//                                                         className="form-select"
//                                                         value={form.subjectCode}
//                                                         onChange={(e) => handleSubjectChange(e.target.value)}
//                                                     >
//                                                         <option value="">Select Subject</option>
//                                                         {subjects.map(subject => (
//                                                             <option key={subject.subjectCode} value={subject.subjectCode}>{subject.subjectName}</option>
//                                                         ))}
//                                                     </select>
//                                                 </div>

//                                                 <div className="form-group">
//                                                     <label>Faculty:</label>
//                                                     <select
//                                                         className="form-select"
//                                                         value={form.facultyId}
//                                                         onChange={(e) => setForm({ ...form, facultyId: e.target.value })}
//                                                     >
//                                                         <option value="">Select Faculty</option>
//                                                         {faculties.map(faculty => (
//                                                             <option
//                                                                 key={faculty.employeeId}
//                                                                 value={faculty.employeeId}
//                                                             >
//                                                                 {faculty.firstName} {faculty.lastName}
//                                                             </option>
//                                                         ))}
//                                                     </select>
//                                                 </div>
//                                             </div>

//                                             <div className="schedule-section">
//                                                 <h3>Schedule</h3>

//                                                 <div className="timetable-grid">
//                                                     <table className="timetable">
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>Day</th>
//                                                                 {timeSlots.map(slot => (
//                                                                     <th key={slot}>{slot}</th>
//                                                                 ))}
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             {Array.from(new Set(weekdays.map(day => day.day))).map(weekdayName => {
//                                                                 const datesForWeekday = weekdays.filter(day => day.day === weekdayName);

//                                                                 return (
//                                                                     <tr key={weekdayName}>
//                                                                         <td className="weekday-name">{weekdayName}</td>
//                                                                         {timeSlots.map(timeSlot => {
//                                                                             const bookedDetails = datesForWeekday.map(day => isTimeSlotBooked(day, timeSlot)).find(detail => detail);
//                                                                             const isFacultyConflict = isFacultyBooked(timeSlot);
//                                                                             const isSelected = datesForWeekday.some(day => {
//                                                                                 const dayInSchedule = form.schedule.find(item => item.date === day.date);
//                                                                                 return dayInSchedule && dayInSchedule.timeSlot === timeSlot;
//                                                                             });

//                                                                             return (
//                                                                                 <td key={timeSlot} className={`time-cell ${bookedDetails || isFacultyConflict ? 'booked' : ''} ${isSelected ? 'selected' : ''}`} onClick={() => {
//                                                                                     if (!bookedDetails && !isFacultyConflict) {
//                                                                                         datesForWeekday.forEach(day => {
//                                                                                             handleTimeSlotSelection(day, timeSlot);
//                                                                                         });
//                                                                                     }
//                                                                                 }}>
//                                                                                     {bookedDetails ? `${bookedDetails.subjectName} - ${bookedDetails.facultyName}` : (isFacultyConflict ? 'Faculty Busy' : (isSelected ? '✓' : ''))}
//                                                                                 </td>
//                                                                             );
//                                                                         })}
//                                                                     </tr>
//                                                                 );
//                                                             })}
//                                                         </tbody>

//                                                     </table>
//                                                 </div>
//                                             </div>

//                                             <div className="form-actions">
//                                                 <button type="submit" className="submit-button">Assign Timetable</button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// };

// export default BatchAssignment;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BatchAssignment.css";

const BatchAssignment = () => {
    const [batches, setBatches] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const [bookedSchedules, setBookedSchedules] = useState([]);
    const [facultyAssignments, setFacultyAssignments] = useState([]);
    const [timeSlots, setTimeSlots] = useState(["08:00-09:00", "09:00-10:00", "10:00-11:00", "11:30-12:30", "14:00-15:00", "15:00-16:00", "16:00-17:00"]);
    const [weekdays] = useState(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
    const [selectedBatchDetails, setSelectedBatchDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [form, setForm] = useState({
        batchId: "",
        subjectCode: "",
        facultyId: "",
        schedule: []
    });

    useEffect(() => {
        // Initialize empty schedule structure with all weekdays
        const initialSchedule = weekdays.map(day => ({
            day,
            timeSlot: ""
        }));
        
        setForm(prev => ({ ...prev, schedule: initialSchedule }));
        
        // Fetch batches on component load
        fetchBatches();
    }, []);

    const fetchBatches = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:8080/getBatches");
            setBatches(response.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching batches:", err);
            setError("Failed to load batches. Please try again later.");
            setLoading(false);
        }
    };

    const handleBatchChange = async (batchId) => {
        setForm({ ...form, batchId, subjectCode: "", facultyId: "" });
        setSubjects([]);
        setFaculties([]);
        setError(null);

        // Reset selected schedule
        const resetSchedule = weekdays.map(day => ({
            day,
            timeSlot: ""
        }));
        setForm(prev => ({ ...prev, schedule: resetSchedule }));

        if (batchId) {
            setLoading(true);
            try {
                // Fetch subjects for the selected batch
                const subjectsResponse = await axios.get(`http://localhost:8080/getSubjectsByBatch/${batchId}`);
                setSubjects(subjectsResponse.data);
                
                // Fetch existing timetable entries for the selected batch
                const timetableResponse = await axios.get(`http://localhost:8080/api/timetable/batch/${batchId}`);
                setBookedSchedules(timetableResponse.data);
                
                // Get batch details if you have an endpoint for it
                // If not, you can use the batch info from the batches array
                const selectedBatch = batches.find(b => b.batchId === batchId);
                setSelectedBatchDetails(selectedBatch);
                
                setLoading(false);
            } catch (err) {
                console.error("Error fetching batch data:", err);
                setError("Failed to load batch data. Please try again later.");
                setLoading(false);
            }
        } else {
            setSelectedBatchDetails(null);
            setBookedSchedules([]);
        }
    };

    const handleSubjectChange = async (subjectCode) => {
        setForm({ ...form, subjectCode, facultyId: "" });
        setFaculties([]);
        setError(null);

        if (subjectCode) {
            setLoading(true);
            try {
                // Fetch faculties who can teach this subject
                const response = await axios.get(`http://localhost:8080/getFaculties/${subjectCode}`);
                setFaculties(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching faculties:", err);
                setError("Failed to load faculties. Please try again later.");
                setLoading(false);
            }
        }
    };

    const handleFacultyChange = async (facultyId) => {
        setForm({ ...form, facultyId });
        setError(null);

        if (facultyId) {
            setLoading(true);
            try {
                // Fetch existing timetable entries for this faculty
                const response = await axios.get(`http://localhost:8080/api/timetable/faculty/${facultyId}`);
                setFacultyAssignments(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching faculty assignments:", err);
                setError("Failed to load faculty schedule. Please try again later.");
                setLoading(false);
            }
        } else {
            setFacultyAssignments([]);
        }
    };

    const isTimeSlotBooked = (day, timeSlot) => {
        const bookedEntry = bookedSchedules.find(schedule =>
            schedule.schedule.some(s => s.day === day && s.timeSlot === timeSlot)
        );

        if (!bookedEntry) return null;

        return {
            subjectName: bookedEntry.subject?.subjectName || "Unknown Subject",
            facultyName: `${bookedEntry.faculty?.firstName || ""} ${bookedEntry.faculty?.lastName || ""}`.trim() || "Unknown Faculty"
        };
    };

    const isFacultyBooked = (day, timeSlot) => {
        return facultyAssignments.some(assignment =>
            assignment.schedule.some(s => s.day === day && s.timeSlot === timeSlot)
        );
    };

    const handleTimeSlotSelection = (day, timeSlot) => {
        if (isTimeSlotBooked(day, timeSlot) || isFacultyBooked(day, timeSlot)) {
            return; // Do nothing if the slot is already booked
        }

        // Find the index of the day in the schedule
        const dayIndex = form.schedule.findIndex(item => item.day === day);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const selectedSubject = subjects.find(sub => sub.subjectCode === form.subjectCode);
        const selectedFaculty = faculties.find(fac => fac.employeeId === form.facultyId);

        if (!selectedSubject || !selectedFaculty) {
            setError("Please select a valid subject and faculty");
            return;
        }

        // Filter out days with no time slot selected
        const scheduledDays = form.schedule.filter(day => day.timeSlot);

        if (scheduledDays.length === 0) {
            setError("Please select at least one time slot");
            return;
        }

        const payload = {
            batchId: form.batchId,
            schedule: scheduledDays,
            subject: { 
                subjectCode: selectedSubject.subjectCode, 
                subjectName: selectedSubject.subjectName 
            },
            faculty: { 
                employeeId: selectedFaculty.employeeId, 
                firstName: selectedFaculty.firstName, 
                lastName: selectedFaculty.lastName 
            }
        };

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:8080/addTimetable", payload);
            alert("Timetable added successfully!");
            
            // Refresh the booked schedules
            const timetableResponse = await axios.get(`http://localhost:8080/api/timetable/batch/${form.batchId}`);
            setBookedSchedules(timetableResponse.data);
            
            // Refresh faculty assignments
            if (form.facultyId) {
                const facultyScheduleResponse = await axios.get(`http://localhost:8080/api/timetable/faculty/${form.facultyId}`);
                setFacultyAssignments(facultyScheduleResponse.data);
            }
            
            // Reset selected time slots
            const resetSchedule = weekdays.map(day => ({
                day,
                timeSlot: ""
            }));
            setForm(prev => ({ ...prev, schedule: resetSchedule }));
            
            setLoading(false);
        } catch (err) {
            console.error("Error adding timetable:", err);
            setError(err.response?.data?.message || "Error assigning timetable. Please try again.");
            setLoading(false);
        }
    };

    return (
        <>
        <div className="main-wrapper">
            <div className="page-wrapper cardhead">
                <div className="content container-fluid">
                    <div className="row">
                        <div className="col-md-8 float-end ms-auto">
                            <div className="d-flex title-head">
                                <div className="daterange-picker d-flex align-items-center justify-content-center">
                                    <div className="head-icons mb-0">
                                        <a href="/BatchAssignment" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Batch Timetable Management</h5>
                                </div>
                                <div className="card-body">
                                    {error && (
                                        <div className="alert alert-danger" role="alert">
                                            {error}
                                        </div>
                                    )}
                                    
                                    {loading && (
                                        <div className="text-center my-3">
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Batch Selection */}
                                  

                                    {/* Assignment Form */}
                                    <div className="batch-assignment-container">
                                        <h2 className="page-title">Assign New Timetable Entry</h2>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-header">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Batch:</label>
                                                            <select
                                                                className="form-select"
                                                                value={form.batchId}
                                                                onChange={(e) => handleBatchChange(e.target.value)}
                                                                disabled={loading}
                                                            >
                                                                <option value="">Select Batch</option>
                                                                {batches.map(batch => (
                                                                    <option key={batch.batchId} value={batch.batchId}>{batch.batchName}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Subject:</label>
                                                            <select
                                                                className="form-select"
                                                                value={form.subjectCode}
                                                                onChange={(e) => handleSubjectChange(e.target.value)}
                                                                disabled={!form.batchId || loading}
                                                            >
                                                                <option value="">Select Subject</option>
                                                                {subjects.map(subject => (
                                                                    <option key={subject.subjectCode} value={subject.subjectCode}>{subject.subjectName}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Faculty:</label>
                                                            <select
                                                                className="form-select"
                                                                value={form.facultyId}
                                                                onChange={(e) => handleFacultyChange(e.target.value)}
                                                                disabled={!form.subjectCode || loading}
                                                            >
                                                                <option value="">Select Faculty</option>
                                                                {faculties.map(faculty => (
                                                                    <option
                                                                        key={faculty.employeeId}
                                                                        value={faculty.employeeId}
                                                                    >
                                                                        {faculty.firstName} {faculty.lastName}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="schedule-section mt-4">
                                                <h3>Select Timeslots</h3>
                                                <p className="text-muted">Click on available time slots to select them for this subject and faculty.</p>

                                                <div className="timetable-grid">
                                                    <table className="timetable">
                                                        <thead>
                                                            <tr>
                                                                <th>Day/Time</th>
                                                                {timeSlots.map(slot => (
                                                                    <th key={slot}>{slot}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {weekdays.map(day => {
                                                                return (
                                                                    <tr key={day}>
                                                                        <td className="weekday-name">{day}</td>
                                                                        {timeSlots.map(timeSlot => {
                                                                            const bookedDetails = isTimeSlotBooked(day, timeSlot);
                                                                            const isFacultyConflict = isFacultyBooked(day, timeSlot);
                                                                            const isSelected = form.schedule.find(item => 
                                                                                item.day === day && item.timeSlot === timeSlot
                                                                            );
                                                                            
                                                                            const canSelect = !bookedDetails && 
                                                                                !isFacultyConflict && 
                                                                                form.batchId && 
                                                                                form.subjectCode && 
                                                                                form.facultyId &&
                                                                                !loading;

                                                                            return (
                                                                                <td 
                                                                                    key={timeSlot} 
                                                                                    className={`time-cell 
                                                                                        ${bookedDetails ? 'booked' : ''} 
                                                                                        ${isFacultyConflict ? 'faculty-busy' : ''} 
                                                                                        ${isSelected ? 'selected' : ''} 
                                                                                        ${canSelect ? 'selectable' : ''}`
                                                                                    }
                                                                                    onClick={() => {
                                                                                        if (canSelect) {
                                                                                            handleTimeSlotSelection(day, timeSlot);
                                                                                        }
                                                                                    }}
                                                                                >
                                                                                    {bookedDetails ? (
                                                                                        <div className="schedule-entry">
                                                                                            <div className="subject">{bookedDetails.subjectName}</div>
                                                                                            <div className="faculty">{bookedDetails.facultyName}</div>
                                                                                        </div>
                                                                                    ) : isFacultyConflict ? (
                                                                                        <div className="conflict-info">Faculty Busy</div>
                                                                                    ) : isSelected ? (
                                                                                        <div className="selected-indicator">✓</div>
                                                                                    ) : (
                                                                                        <div className="empty-cell"></div>
                                                                                    )}
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

                                            <div className="form-actions mt-4">
                                                <button 
                                                    type="submit" 
                                                    className="btn btn-primary submit-button"
                                                    disabled={!form.batchId || !form.subjectCode || !form.facultyId || loading}
                                                >
                                                    {loading ? 'Assigning...' : 'Assign Timetable'}
                                                </button>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-secondary ms-2"
                                                    onClick={() => {
                                                        const resetSchedule = weekdays.map(day => ({
                                                            day,
                                                            timeSlot: ""
                                                        }));
                                                        setForm(prev => ({ ...prev, schedule: resetSchedule }));
                                                    }}
                                                    disabled={loading}
                                                >
                                                    Clear Selections
                                                </button>
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
