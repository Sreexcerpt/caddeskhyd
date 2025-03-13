import { useState, useEffect } from "react";

const BatchAssignment = () => {
    const [batches, setBatches] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [facultyList, setFacultyList] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
    const [selectedFaculty, setSelectedFaculty] = useState("");

    // Fetch all batches
    useEffect(() => {
        fetch("http://localhost:8080/api/batches")
            .then(res => res.json())
            .then(data => setBatches(data))
            .catch(err => console.error("Error fetching batches:", err));
    }, []);

    // Fetch subjects when a batch is selected
    useEffect(() => {
        if (selectedBatch) {
            fetch(`http://localhost:8080/api/subjects-by-batch/${selectedBatch}`)
                .then(res => res.json())
                .then(data => setSubjects(data))
                .catch(err => console.error("Error fetching subjects:", err));
        }
    }, [selectedBatch]);

    // Fetch faculty list when a subject is selected
    useEffect(() => {
        if (selectedSubject) {
            fetch(`http://localhost:8080/api/faculty-by-subject/${selectedSubject}`)
                .then(res => res.json())
                .then(data => setFacultyList(data))
                .catch(err => console.error("Error fetching faculty:", err));
        }
    }, [selectedSubject]);

    // Fetch existing schedule to check for conflicts
    useEffect(() => {
        fetch("http://localhost:8080/api/schedule")
            .then(res => res.json())
            .then(data => setSchedule(data))
            .catch(err => console.error("Error fetching schedule:", err));
    }, []);

    // Check if a faculty member is already assigned at the same time
    const isFacultyDisabled = (facultyId) => {
        return schedule.some(
            (entry) =>
                entry.faculty._id === facultyId &&
                entry.day === selectedDay &&
                entry.timeSlot === selectedTimeSlot
        );
    };

    // Handle faculty assignment submission
    const handleSubmit = () => {
        if (!selectedBatch || !selectedSubject || !selectedDay || !selectedTimeSlot || !selectedFaculty) {
            alert("Please select all fields before assigning.");
            return;
        }

        fetch("http://localhost:8080/api/assign-faculty", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                batchId: selectedBatch,
                day: selectedDay,
                timeSlot: selectedTimeSlot,
                subject: selectedSubject,
                faculty: selectedFaculty
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                    setSchedule([...schedule, data.data]); // Update state to reflect change
                }
            })
            .catch(err => console.error("Error assigning faculty:", err));
    };

    return (
        <div class="main-wrapper">
            <div class="page-wrapper cardhead">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title">Assign Faculty to Batch</h5>
                                </div>
                                <div class="card-body">
                                    <div>

                                        <div class="row">
                                            <div class="col-xl-4">
                                                <label>Batch:</label>
                                                <select value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)}>
                                                    <option value="">Select Batch</option>
                                                    {batches.map((batch) => (
                                                        <option key={batch._id} value={batch._id}>{batch.batchName}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div class="col-xl-4">
                                                <label>Day:</label>
                                                <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                                                    <option value="">Select Day</option>
                                                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                                                        <option key={day} value={day}>{day}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div class="col-xl-4">
                                                <label>Time Slot:</label>
                                                <select value={selectedTimeSlot} onChange={(e) => setSelectedTimeSlot(e.target.value)}>
                                                    <option value="">Select Time</option>
                                                    {["9-10", "10-11", "11-12"].map((slot) => (
                                                        <option key={slot} value={slot}>{slot}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-4">
                                                <label>Subject:</label>
                                                <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                                                    <option value="">Select Subject</option>
                                                    {subjects.map((subject) => (
                                                        <option key={subject.subjectCode} value={subject.subjectCode}>{subject.subjectName}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div class="col-xl-4">
                                                <label>Faculty:</label>
                                                <select value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
                                                    <option value="">Select Faculty</option>
                                                    {facultyList.map((faculty) => (
                                                        <option key={faculty._id} value={faculty._id} disabled={isFacultyDisabled(faculty._id)}>
                                                            {faculty.firstName} {faculty.lastName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div class="col-xl-4">
                                                <button onClick={handleSubmit}>Assign Faculty</button>
                                            </div>
                                        </div>
                                        <h3>Assigned Faculty Schedule</h3>
                                        <ul>
                                            {/* {schedule.map((entry, index) => (
                                                <li key={index}>
                                                    {entry.day}, {entry.timeSlot} - {entry.subject.subjectName} by {entry.faculty.firstName} {entry.faculty.lastName}
                                                </li>
                                            ))} */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BatchAssignment;
