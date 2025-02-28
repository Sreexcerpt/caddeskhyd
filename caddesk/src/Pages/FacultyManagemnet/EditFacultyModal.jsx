import React, { useState } from "react";
import "./EditFacultyModal.css";

const EditFacultyModal = ({ faculty, onClose, refresh }) => {
  const [formData, setFormData] = useState(faculty);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updating Faculty:", formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h3>Edit Faculty</h3>
        <form onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} />
          <input name="email" value={formData.email} onChange={handleChange} />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditFacultyModal;
