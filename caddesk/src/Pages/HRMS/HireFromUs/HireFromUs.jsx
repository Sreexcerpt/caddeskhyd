import React, { useState } from 'react';

const HireFromUs = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        jobTitle: '',
        jobDescription: '',
        requiredSkills: '',
        experience: '',
        location: '',
        salary: '',
        contactEmail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <>
            <div class="main-wrapper">
                <div class="page-wrapper cardhead">
                    <div class="content container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="page-header">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <h3 >Hire From Us</h3>
                                        </div>
                                        <div class="col-md-8 float-end ms-auto">
                                            <div class="d-flex title-head">
                                                <div class="daterange-picker d-flex align-items-center justify-content-center">

                                                    <div class="head-icons mb-0">
                                                        <a href="/HireFromUs" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
                                                        <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i class="ti ti-chevrons-up"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='card'>
                                <form onSubmit={handleSubmit} className='from'>
                                    <div>
                                        <label>Company Name:</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Job Title:</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Job Type:</label>
                                        <input
                                            type="text"
                                            name="jobType"
                                            value={formData.jobType}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Salary Range:</label>
                                        <input
                                            type="text"
                                            name="salaryRange"
                                            value={formData.salaryRange}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Location:</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Required Skills:</label>
                                        <input
                                            type="text"
                                            name="requiredSkills"
                                            value={formData.requiredSkills}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Work Experience Needed:</label>
                                        <input
                                            type="text"
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Required Education:</label>
                                        <input
                                            type="text"
                                            name="education"
                                            value={formData.education}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Job Description & Responsibilities:</label>
                                        <textarea
                                            name="jobDescription"
                                            value={formData.jobDescription}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Contact Email:</label>
                                        <input
                                            type="email"
                                            name="contactEmail"
                                            value={formData.contactEmail}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HireFromUs;