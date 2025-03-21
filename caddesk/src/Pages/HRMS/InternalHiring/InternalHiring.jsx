import React, { useState } from 'react';

const InternalHiring = () => {
    const [candidates, setCandidates] = useState([]);
    const [form, setForm] = useState({
        name: '',
        dob: '',
        gender: '',
        location: '',
        email: '',
        phoneNumber: '',
        education: '',
        workExperience: '',
        currentSalary: '',
        expectedSalary: '',
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({
            ...form,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCandidates([
            ...candidates,
            {
                ...form,
                screeningStatus: 'Applied',
                followUpActivities: [],
                remarks: '',
            },
        ]);
        setForm({
            name: '',
            dob: '',
            gender: '',
            location: '',
            email: '',
            phoneNumber: '',
            education: '',
            workExperience: '',
            currentSalary: '',
            expectedSalary: '',
            resume: null,
        });
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
                                            <h3 >Internal Hiring</h3>
                                        </div>
                                        <div class="col-md-8 float-end ms-auto">
                                            <div class="d-flex title-head">
                                                <div class="daterange-picker d-flex align-items-center justify-content-center">

                                                    <div class="head-icons mb-0">
                                                        <a href="/Payroll" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
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
                            <div>
                                <h1></h1>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                                    <input type="date" name="dob" placeholder="DOB" value={form.dob} onChange={handleChange} required />
                                    <input type="text" name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} required />
                                    <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
                                    <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                                    <input type="tel" name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} required />
                                    <input type="text" name="education" placeholder="Education" value={form.education} onChange={handleChange} required />
                                    <input type="text" name="workExperience" placeholder="Work Experience" value={form.workExperience} onChange={handleChange} required />
                                    <input type="number" name="currentSalary" placeholder="Current Salary" value={form.currentSalary} onChange={handleChange} required />
                                    <input type="number" name="expectedSalary" placeholder="Expected Salary" value={form.expectedSalary} onChange={handleChange} required />
                                    <input type="file" name="resume" onChange={handleChange} required />
                                    <button type="submit">Submit</button>
                                </form>

                                <h2>Candidates Listing</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>DOB</th>
                                            <th>Gender</th>
                                            <th>Location</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>Education</th>
                                            <th>Work Experience</th>
                                            <th>Current Salary</th>
                                            <th>Expected Salary</th>
                                            <th>Screening Status</th>
                                            <th>Follow-Up Activities</th>
                                            <th>Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {candidates.map((candidate, index) => (
                                            <tr key={index}>
                                                <td>{candidate.name}</td>
                                                <td>{candidate.dob}</td>
                                                <td>{candidate.gender}</td>
                                                <td>{candidate.location}</td>
                                                <td>{candidate.email}</td>
                                                <td>{candidate.phoneNumber}</td>
                                                <td>{candidate.education}</td>
                                                <td>{candidate.workExperience}</td>
                                                <td>{candidate.currentSalary}</td>
                                                <td>{candidate.expectedSalary}</td>
                                                <td>{candidate.screeningStatus}</td>
                                                <td>{candidate.followUpActivities.join(', ')}</td>
                                                <td>{candidate.remarks}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default InternalHiring;