import React, { useState } from "react";
import { CSVLink } from "react-csv";

const StudentTimetable = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const classes = ["Class 1", "Class 2", "Class 3"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const timetable = {
    "Class 1": {
      Monday: [
        { time: "9:00 AM - 10:00 AM", subject: "Data Structures & Algorithms", lecturer: "Prof. Smith", classroom: "101" },
        { time: "10:00 AM - 11:00 AM", subject: "Object-Oriented Programming", lecturer: "Ms. Johnson", classroom: "102" },
        { time: "11:00 AM - 12:00 PM", subject: "Database Management Systems", lecturer: "Dr. Adams", classroom: "103" },
        { time: "12:00 PM - 1:00 PM", subject: "Web Development", lecturer: "Dr. Clark", classroom: "104" },
        { time: "2:00 PM - 3:00 PM", subject: "Computer Networks", lecturer: "Ms. Green", classroom: "105" },
        { time: "3:00 PM - 4:00 PM", subject: "Operating Systems", lecturer: "Mr. White", classroom: "106" },
        { time: "4:00 PM - 5:00 PM", subject: "Cybersecurity", lecturer: "Ms. Brown", classroom: "107" },
        { time: "5:00 PM - 6:00 PM", subject: "Artificial Intelligence", lecturer: "Dr. Carter", classroom: "108" },
        { time: "6:00 PM - 7:00 PM", subject: "Software Engineering", lecturer: "Ms. Lee", classroom: "109" },
      ],
      Tuesday: [
        { time: "12:00 PM - 1:00 PM", subject: "Web Development", lecturer: "Dr. Clark", classroom: "104" },
        { time: "2:00 PM - 3:00 PM", subject: "Computer Networks", lecturer: "Ms. Green", classroom: "105" },
        { time: "3:00 PM - 4:00 PM", subject: "Operating Systems", lecturer: "Mr. White", classroom: "106" },
        { time: "4:00 PM - 5:00 PM", subject: "Cybersecurity", lecturer: "Ms. Brown", classroom: "107" },
      ],
    },
    "Class 2": {
      Monday: [
        { time: "5:00 PM - 6:00 PM", subject: "Artificial Intelligence", lecturer: "Dr. Carter", classroom: "108" },
        { time: "6:00 PM - 7:00 PM", subject: "Software Engineering", lecturer: "Ms. Lee", classroom: "109" },
      ],
      Wednesday: [
        { time: "5:00 PM - 6:00 PM", subject: "Artificial Intelligence", lecturer: "Dr. Carter", classroom: "108" },
        { time: "6:00 PM - 7:00 PM", subject: "Software Engineering", lecturer: "Ms. Lee", classroom: "109" },
      ],
    },
    "Class 3": {
      Thursday: [
        { time: "12:00 PM - 1:00 PM", subject: "Web Development", lecturer: "Dr. Clark", classroom: "104" },
        { time: "2:00 PM - 3:00 PM", subject: "Computer Networks", lecturer: "Ms. Green", classroom: "105" },
        { time: "3:00 PM - 4:00 PM", subject: "Operating Systems", lecturer: "Mr. White", classroom: "106" },
        { time: "4:00 PM - 5:00 PM", subject: "Cybersecurity", lecturer: "Ms. Brown", classroom: "107" },
      ],
    },
    "Class 4": {
      Friday: [
        { time: "12:00 PM - 1:00 PM", subject: "Web Development", lecturer: "Dr. Clark", classroom: "104" },
        { time: "2:00 PM - 3:00 PM", subject: "Computer Networks", lecturer: "Ms. Green", classroom: "105" },
        { time: "3:00 PM - 4:00 PM", subject: "Operating Systems", lecturer: "Mr. White", classroom: "106" },
        { time: "4:00 PM - 5:00 PM", subject: "Cybersecurity", lecturer: "Ms. Brown", classroom: "107" },
      ],
    },
  };

  const getTimetableData = () => {
    return selectedClass && selectedDay && timetable[selectedClass]?.[selectedDay]
      ? timetable[selectedClass][selectedDay]
      : [];
  };

  const exportData = getTimetableData().map(({ time, subject, lecturer, classroom }) => ({
    Time: time,
    Subject: subject,
    Lecturer: lecturer,
    Classroom: classroom,
  }));

  return (
    <>
      <div class="page-wrapper cardhead">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row">
              <div class="col-xl-12">
                <div class="card">
                  <div class="card-header justify-content-between">
                    <div class="card-title">
                      Student Timetable
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <select
                          value={selectedClass}
                          onChange={(e) => setSelectedClass(e.target.value)}
                          style={{ padding: "8px", margin: "3px", width: '330px' }}
                        >
                          <option value="">Select Class</option>
                          {classes.map((cls) => (
                            <option key={cls} value={cls}>{cls}</option>
                          ))}
                        </select>

                        <select
                          value={selectedDay}
                          onChange={(e) => setSelectedDay(e.target.value)}
                          style={{ padding: "8px", margin: "3px", width: '330px' }}
                        >
                          <option value="">Select Day</option>
                          {days.map((day) => (
                            <option key={day} value={day}>{day}</option>
                          ))}
                        </select>

                        {selectedDay && getTimetableData().length > 0 && (
                          <CSVLink data={exportData} filename={`timetable_${selectedClass}_${selectedDay}.csv`}>
                            <button
                              style={{ padding: "8px", borderRadius: "5px", backgroundColor: "#ff4757", color: "#fff", border: "none", cursor: "pointer" }}
                            >
                              Export to CSV
                            </button>
                          </CSVLink>
                        )}
                      </div>
                      <table class="table text-nowrap">
                        <thead>
                          <tr>

                            <th scope="col">Time</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Lecturer</th>
                            <th scope="col">Classroom</th>

                          </tr>
                        </thead>
                        <tbody>
                          {getTimetableData().length > 0 ? (
                            getTimetableData().map((entry, index) => (
                              <tr key={index}>
                                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{entry.time}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{entry.subject}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{entry.lecturer}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #555" }}>{entry.classroom}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="4" style={{ padding: "10px" }}>No timetable available</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
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

export default StudentTimetable;
