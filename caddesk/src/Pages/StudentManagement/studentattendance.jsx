import React, { useState } from 'react';

const StudentAttendance = () => {
    const [attendance, setAttendance] = useState([
        { id: 1, name: 'John Doe', status: 'Present' },
        { id: 2, name: 'Jane Smith', status: 'Absent' },
        { id: 3, name: 'Alice Johnson', status: 'Present' },
    ]);
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('01:00');
    const [timeSlots, setTimeSlots] = useState([]);

    const handleAttendance = (studentId, status) => {
        setAttendance(prevAttendance => {
            const updatedAttendance = prevAttendance.map(student =>
                student.id === studentId ? { ...student, status } : student
            );
            return updatedAttendance;
        });
    };

    const generateTimeOptions = () => {
        const times = [];
        for (let i = 0; i < 24; i++) {
            const hour = i < 10 ? `0${i}` : i;
            times.push(`${hour}:00`);
        }
        return times;
    };

    const generateEndTimeOptions = (startTime) => {
        const times = [];
        const startHour = parseInt(startTime.split(':')[0], 10);
        for (let i = startHour + 1; i < 24; i++) {
            const hour = i < 10 ? `0${i}` : i;
            times.push(`${hour}:00`);
        }
        return times;
    };

    const generateTimeSlots = (startTime, endTime) => {
        const slots = [];
        const startHour = parseInt(startTime.split(':')[0], 10);
        const endHour = parseInt(endTime.split(':')[0], 10);
        for (let i = startHour; i < endHour; i++) {
            const start = i < 10 ? `0${i}:00` : `${i}:00`;
            const end = (i + 1) < 10 ? `0${i + 1}:00` : `${i + 1}:00`;
            slots.push(`${start} to ${end}`);
        }
        return slots;
    };

    const handleStartTimeChange = (event) => {
        const newStartTime = event.target.value;
        setStartTime(newStartTime);
        setEndTimeOptions(generateEndTimeOptions(newStartTime));
        setTimeSlots(generateTimeSlots(newStartTime, endTime));
    };

    const handleEndTimeChange = (event) => {
        const newEndTime = event.target.value;
        setEndTime(newEndTime);
        setTimeSlots(generateTimeSlots(startTime, newEndTime));
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div >
                        <h4>Student Attendance</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className='card'>
                            <div className='card-header d-flex flex-wrap gap-2'>
                                <div className="dropdown">
                                    <label htmlFor="batchName">Batch Name</label>
                                    <select className="dropdown" id="batchName">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <select className="dropdown" id="subject">
                                        <option>Action</option>
                                        <option>Another action</option>
                                        <option>Something else here</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="todayDate">Today Date</label>
                                    <input type="date" className="dropdown" id="todayDate" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="startTime">Start Time</label>
                                    <select className="dropdown" id="startTime" value={startTime} onChange={handleStartTimeChange}>
                                        {generateTimeOptions().map(time => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="endTime">End Time</label>
                                    <select className="dropdown" id="endTime" value={endTime} onChange={handleEndTimeChange}>
                                        {generateEndTimeOptions(startTime).map(time => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table mb-0'>
                                        <thead>
                                            <tr>
                                                <th>Student Name</th>
                                                {timeSlots.map((slot, index) => (
                                                    <th key={index}>{slot}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {attendance.map(student => (
                                                <tr key={student.id}>
                                                    <td>{student.name}</td>
                                                    {timeSlots.map((slot, index) => (
                                                        <td key={index}>
                                                            <input
                                                                type="checkbox"
                                                                name={`attendance-${student.id}-${index}`}
                                                                checked={student.status === 'Present'}
                                                                onChange={() => handleAttendance(student.id, student.status === 'Present' ? 'Absent' : 'Present')}
                                                            />
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentAttendance;