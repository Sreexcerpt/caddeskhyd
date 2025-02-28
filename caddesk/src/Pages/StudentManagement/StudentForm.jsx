


import React, { useState } from "react";

const StudentRegistrationForm = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [formData, setFormData] = useState({
   // Personal Details
   studentId: '',
   firstName: '',
   lastName: '',
   dob: '',
   gender: '',
   nationality: '',
   aadharNumber: '',
   
   // Contact Information
   address: '',
   phoneNumber: '',
   email: '',
   parentName: '',
   parentPhone: '',
   parentEmail: '',
   
   // Academic Records
   previousSchool: '',
   previousQualification: '',
   enrolledCourse: '',
   batchAssigned: '',
   grades: '',
   testScores: '',
   disciplinaryRecords: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:8080/register1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Student registered successfully!");
        setFormData({
          studentId: '',
          firstName: '',
          lastName: '',
          dob: '',
          gender: '',
          nationality: '',
          aadharNumber: '',
          address: '',
          phoneNumber: '',
          email: '',
          parentName: '',
          parentPhone: '',
          parentEmail: '',
          previousSchool: '',
          previousQualification: '',
          enrolledCourse: '',
          batchAssigned: '',
          grades: '',
          testScores: '',
          disciplinaryRecords: ''
        });
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register student.");
    }
  };
  





  
  return (
    <div style={{ maxWidth: "600px", marginLeft: "300px", padding: "20px", background: "white", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Student Registration Form</h1>
      
      {/* Tabs */}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("personal")} style={{ marginRight: "10px", padding: "10px", border: activeTab === "personal" ? "2px solid blue" : "1px solid gray" }}>Personal</button>
        <button onClick={() => setActiveTab("contact")} style={{ marginRight: "10px", padding: "10px", border: activeTab === "contact" ? "2px solid blue" : "1px solid gray" }}>Contact</button>
        <button onClick={() => setActiveTab("academic")} style={{ padding: "10px", border: activeTab === "academic" ? "2px solid blue" : "1px solid gray" }}>Academic</button>
      </div>

      <form onSubmit={handleSubmit}>
        {activeTab === "personal" && (
          <div>
            <h2>Personal Details</h2>
            <label>StudentID</label>
            <input type="text" id="studentId" value={formData.studentId} onChange={handleInputChange} />
            <label>First Name</label>
            <input type="text" id="firstName" value={formData.firstName} onChange={handleInputChange} />
            <label>Middle Name</label>
            <input type="text" id="middleName" value={formData.middleName} onChange={handleInputChange} />
            <label>Last Name</label>
            <input type="text" id="lastName" value={formData.lastName} onChange={handleInputChange} />
            <label>Date of Birth</label>
            <input type="date" id="dob" value={formData.dob} onChange={handleInputChange} />
            <label>Blood Group</label>
            <input type="text" id="bloodGroup" value={formData.bloodGroup} onChange={handleInputChange} />
            <label>Emergency Contact</label>
            <input type="text" id="emergencyContact" value={formData.emergencyContact} onChange={handleInputChange} />

          </div>
        )}
        
        {activeTab === "contact" && (
  <div>
    <h2>Contact Information</h2>
    
    
    <label>Address</label>
    <input type="address" id="address" value={formData.address} onChange={handleInputChange} />
    
    <label>Phone Number</label>
    <input type="text" id="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />

    <label>Email</label>
    <input type="text" id="email" value={formData.email} onChange={handleInputChange} />

    <label>Parent/Guardian Name</label>
    <input type="text" id="guardianName" value={formData.guardianName} onChange={handleInputChange} />

    <label>Parent/Guardian Phone</label>
    <input type="text" id="guardianPhone" value={formData.guardianPhone} onChange={handleInputChange} />

    <label>Parent/Guardian Email</label>
    <input type="text" id="guardianEmail" value={formData.guardianEmail} onChange={handleInputChange} />
  </div>
)}

        {activeTab === "academic" && (
  <div>
    <h2>Academic Records</h2>
    
    <label>Previous School/Institution</label>
    <input 
      type="text" 
      id="previousSchool" 
      value={formData.previousSchool} 
      onChange={handleInputChange} 
    />

    <label>Previous Qualification</label>
    <select 
      id="previousQualification" 
      value={formData.previousQualification} 
      onChange={handleInputChange}
    >
      <option value="">Select Qualification</option>
      <option value="High School">High School</option>
      <option value="Diploma">Diploma</option>
      <option value="Bachelor's Degree">Bachelor's Degree</option>
      <option value="Master's Degree">Master's Degree</option>
    </select>

    <label>Course Enrolled</label>
    <select 
      id="courseEnrolled" 
      value={formData.courseEnrolled} 
      onChange={handleInputChange}
    >
      <option value="">Select Course</option>
      <option value="Computer Science">Computer Science</option>
      <option value="Engineering">Engineering</option>
      <option value="Business Administration">Business Administration</option>
      <option value="Medicine">Medicine</option>
    </select>

    <label>Batch Assigned</label>
    <input 
      type="text" 
      id="batchAssigned" 
      value={formData.batchAssigned} 
      onChange={handleInputChange} 
    />

    <label>Grades</label>
    <input 
      type="text" 
      id="grades" 
      placeholder="e.g., 3.8 GPA" 
      value={formData.grades} 
      onChange={handleInputChange} 
    />

    <label>Test Scores</label>
    <input 
      type="text" 
      id="testScores" 
      placeholder="e.g., SAT: 1400, ACT: 32" 
      value={formData.testScores} 
      onChange={handleInputChange} 
    />

    <label>Extracurricular Activities</label>
    <input 
      type="text" 
      id="extracurricularActivities" 
      value={formData.extracurricularActivities} 
      onChange={handleInputChange} 
    />

    <label>Disciplinary Records</label>
    <input 
      type="text" 
      id="disciplinaryRecords" 
      value={formData.disciplinaryRecords} 
      onChange={handleInputChange} 
    />
  </div>
)}

        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;

