





import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "./Batchviewandedit.css";

const BatchTimetable = () => {
  // State variables
  const [batches, setBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState("");
  const [timetableData, setTimetableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timeSlots] = useState(["08:00-09:00", "09:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00", "14:00-15:00", "15:00-16:00", "16:00-17:00"]);
  const [weekdays] = useState(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
  
  // Edit modal state
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState({
    timetableId: "",
    subjectCode: "",
    subjectName: "",
    facultyId: "",
    facultyName: ""
  });
  
  // Subject and faculty lists for dropdown
  const [subjects, setSubjects] = useState([]);
  const [faculties, setFaculties] = useState([]);

  // Fetch all batches on component mount
  useEffect(() => {
    fetchBatches();
  }, []);

  // Fetch batches from the server
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

  // Fetch timetable data when a batch is selected
  const handleBatchChange = async (batchId) => {
    setSelectedBatch(batchId);
    setError(null);
    
    if (batchId) {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/api/timetable/batch/${batchId}`);
        setTimetableData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching timetable:", err);
        setError("Failed to load timetable data. Please try again later.");
        setLoading(false);
      }
    } else {
      setTimetableData([]);
    }
  };

  // Get entry for a specific day and time slot
  const getEntryForTimeSlot = (day, timeSlot) => {
    return timetableData.find(entry => 
      entry.schedule.some(s => s.day === day && s.timeSlot === timeSlot)
    );
  };

  // Open edit modal with selected entry data
  const handleEditClick = async (entry) => {
    setLoading(true);
    try {
      // Fetch subjects for the selected batch
      const subjectsResponse = await axios.get(`http://localhost:8080/getSubjectsByBatch/${selectedBatch}`);
      setSubjects(subjectsResponse.data);
      
      // Fetch faculties who can teach the current subject
      const facultiesResponse = await axios.get(`http://localhost:8080/getFaculties/${entry.subject.subjectCode}`);
      setFaculties(facultiesResponse.data);
      
      setEditData({
        timetableId: entry._id,
        subjectCode: entry.subject.subjectCode,
        subjectName: entry.subject.subjectName,
        facultyId: entry.faculty.staffOrFacultyId,
        facultyName: `${entry.faculty.firstName} ${entry.faculty.lastName}`,
        scheduleInfo: entry.schedule.map(s => `${s.day} ${s.timeSlot}`).join(", ")
      });
      
      setShowEditModal(true);
      setLoading(false);
    } catch (err) {
      console.error("Error preparing edit data:", err);
      setError("Failed to load edit data. Please try again.");
      setLoading(false);
    }
  };

  // Handle subject change in edit modal
  const handleSubjectChange = async (subjectCode) => {
    setEditData({...editData, subjectCode});
    
    if (subjectCode) {
      setLoading(true);
      try {
        // Fetch faculties who can teach this subject
        const response = await axios.get(`http://localhost:8080/getFaculties/${subjectCode}`);
        setFaculties(response.data);
        
        // Find the subject name
        const subject = subjects.find(s => s.subjectCode === subjectCode);
        if (subject) {
          setEditData(prev => ({...prev, subjectName: subject.subjectName}));
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching faculties:", err);
        setError("Failed to load faculties. Please try again.");
        setLoading(false);
      }
    }
  };

  // Handle faculty change in edit modal
  const handleFacultyChange = (facultyId) => {
    const faculty = faculties.find(f => f.staffOrFacultyId === facultyId);
    if (faculty) {
      setEditData({
        ...editData, 
        facultyId, 
        facultyName: `${faculty.firstName} ${faculty.lastName}`
      });
    }
  };

  // Save edited timetable entry
  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      await axios.put(`http://localhost:8080/api/timetable/${editData.timetableId}`, {
        subject: {
          subjectCode: editData.subjectCode,
          subjectName: editData.subjectName
        },
        faculty: {
          staffOrFacultyId: editData.facultyId,
          firstName: editData.facultyName.split(' ')[0],
          lastName: editData.facultyName.split(' ')[1] || ''
        }
      });
      
      // Refresh the timetable data
      const response = await axios.get(`http://localhost:8080/api/timetable/batch/${selectedBatch}`);
      setTimetableData(response.data);
      
      setShowEditModal(false);
      setLoading(false);
    } catch (err) {
      console.error("Error updating timetable:", err);
      setError("Failed to update the timetable. Please try again.");
      setLoading(false);
    }
  };

  // Delete timetable entry
  const handleDelete = async (entryId) => {
    if (window.confirm("Are you sure you want to delete this timetable entry? This action cannot be undone.")) {
      setLoading(true);
      try {
        await axios.delete(`http://localhost:8080/api/timetable/${entryId}`);
        
        // Refresh the timetable data
        const response = await axios.get(`http://localhost:8080/api/timetable/batch/${selectedBatch}`);
        setTimetableData(response.data);
        
        setLoading(false);
      } catch (err) {
        console.error("Error deleting timetable entry:", err);
        setError("Failed to delete the timetable entry. Please try again.");
        setLoading(false);
      }
    }
  };

  return (
    <div className="main-wrapper">
      <div className="page-wrapper cardhead">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Batch Timetable View</h5>
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
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <label className="form-label">Select Batch</label>
                      <select 
                        className="form-select" 
                        value={selectedBatch} 
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
                  
                  {/* Selected Batch Details */}
                  {selectedBatch && (
                    <div className="selected-batch-details mb-4">
                      <h6>Selected Batch Details</h6>
                      <p>{batches.find(b => b.batchId === selectedBatch)?.batchName}</p>
                    </div>
                  )}
                  
                  {/* Timetable Grid */}
                  {selectedBatch && timetableData.length > 0 ? (
                    <div className="timetable-container">
                      <table className="timetable-grid">
                        <thead>
                          <tr>
                            <th>Day / Time</th>
                            {timeSlots.map(slot => (
                              <th key={slot}>{slot}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {weekdays.map(day => (
                            <tr key={day}>
                              <td className="day-cell">{day}</td>
                              {timeSlots.map(timeSlot => {
                                const entry = getEntryForTimeSlot(day, timeSlot);
                                return (
                                  <td key={timeSlot} className={entry ? "has-class" : "no-class"}>
                                    {entry && (
                                      <div className="class-entry">
                                        <div className="subject-name">{entry.subject.subjectName}</div>
                                        <div className="faculty-name">
                                          {entry.faculty.firstName} {entry.faculty.lastName}
                                        </div>
                                        <div className="entry-actions">
                                          <button 
                                            className="btn btn-sm btn-primary me-1" 
                                            onClick={() => handleEditClick(entry)}
                                            disabled={loading}
                                          >
                                            <i className="ti ti-edit"></i>
                                          </button>
                                          <button 
                                            className="btn btn-sm btn-danger" 
                                            onClick={() => handleDelete(entry._id)}
                                            disabled={loading}
                                          >
                                            <i className="ti ti-trash"></i>
                                          </button>
                                        </div>
                                      </div>
                                    )}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : selectedBatch ? (
                    <div className="alert alert-info">
                      No timetable entries found for this batch. Please create a new timetable entry.
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Timetable Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group mb-3">
            <label>Schedule</label>
            <input 
              type="text" 
              className="form-control" 
              value={editData.scheduleInfo}
              disabled
            />
            <small className="text-muted">Schedule cannot be edited. Delete and create a new entry to change schedule.</small>
          </div>
          
          <div className="form-group mb-3">
            <label>Subject</label>
            <select 
              className="form-select"
              value={editData.subjectCode}
              onChange={(e) => handleSubjectChange(e.target.value)}
              disabled={loading}
            >
              <option value="">Select Subject</option>
              {subjects.map(subject => (
                <option key={subject.subjectCode} value={subject.subjectCode}>
                  {subject.subjectName}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group mb-3">
            <label>Faculty</label>
            <select 
              className="form-select"
              value={editData.facultyId}
              onChange={(e) => handleFacultyChange(e.target.value)}
              disabled={loading}
            >
              <option value="">Select Faculty</option>
              {faculties.map(faculty => (
                <option key={faculty.staffOrFacultyId} value={faculty.staffOrFacultyId}>
                  {faculty.firstName} {faculty.lastName}
                </option>
              ))}
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSaveChanges}
            disabled={loading || !editData.subjectCode || !editData.facultyId}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BatchTimetable;