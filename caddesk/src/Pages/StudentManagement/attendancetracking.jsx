import React, { useState, useEffect } from 'react';

const AttendanceTracking = () => {
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState({});

    useEffect(() => {
        // Fetch students data from an API or database
        const fetchStudents = async () => {
            const response = await fetch('/api/students');
            const data = await response.json();
            setStudents(data);
        };

        fetchStudents();
    }, []);

    const handleAttendanceChange = (studentId, isPresent) => {
        setAttendance({
            ...attendance,
            [studentId]: isPresent,
        });
    };

    const handleSubmit = () => {
        // Submit attendance data to an API or database
        console.log('Attendance submitted:', attendance);
    };

    return (
        <div class="page-wrapper">
            <div class="content">
                <div class="page-header">
                    <div >
                        <h4>Attendance Tracking</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Student Name</th>
                                        <th>Present</th>
                                        <th>Absent</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((student) => (
                                        <tr key={student.id}>
                                            <td>{student.name}</td>
                                            <td>
                                                <input
                                                    type="radio"
                                                    name={`attendance-${student.id}`}
                                                    checked={attendance[student.id] === true}
                                                    onChange={() => handleAttendanceChange(student.id, true)}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="radio"
                                                    name={`attendance-${student.id}`}
                                                    checked={attendance[student.id] === false}
                                                    onChange={() => handleAttendanceChange(student.id, false)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button onClick={handleSubmit}>Submit Attendance</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceTracking;