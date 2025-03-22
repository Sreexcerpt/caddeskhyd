// import React from 'react';

// const PayRole = () => {
//     return (
//         <>
//             <div class="main-wrapper">
//                 <div class="page-wrapper cardhead">
//                     <div class="content container-fluid">
//                         <div class="row">
//                             <div class="col-md-12">
//                                 <div class="page-header">
//                                     <div class="row">
//                                         <div class="col-md-4">
//                                             <h3 >Pay Role</h3>
//                                         </div>
//                                         <div class="col-md-8 float-end ms-auto">
//                                             <div class="d-flex title-head">
//                                                 <div class="daterange-picker d-flex align-items-center justify-content-center">

//                                                     <div class="head-icons mb-0">
//                                                         <a href="/Payrole" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
//                                                         <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i class="ti ti-chevrons-up"></i></a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='row'>
//                             <div className="col-md-12">
//                                 <div className="card">
//                                     <div className="card-body">
//                                         <div className="table-responsive">
//                                             <table className="table table-striped">
//                                                 <thead>
//                                                     <tr>
//                                                         <th>Employee ID</th>
//                                                         <th>Name</th>
//                                                         <th>Department</th>
//                                                         <th>Salary</th>
//                                                         <th>Action</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     <tr>
//                                                         <td>1</td>
//                                                         <td>John Doe</td>
//                                                         <td>Engineering</td>
//                                                         <td>$5000</td>
//                                                         <td>
//                                                             <button className="btn btn-primary" data-bs-toggle="offcanvas"
//                                                                 data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Generate Pay Slip</button>
//                                                         </td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td>2</td>
//                                                         <td>Jane Smith</td>
//                                                         <td>Marketing</td>
//                                                         <td>$4500</td>
//                                                         <td>
//                                                             <button className="btn btn-primary" data-bs-toggle="offcanvas"
//                                                                 data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Generate Pay Slip</button>
//                                                         </td>
//                                                     </tr>
//                                                     {/* Add more rows as needed */}
//                                                 </tbody>
//                                             </table>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
//                             aria-labelledby="offcanvasRightLabel">
//                             <div class="offcanvas-header">
//                                 <h5 id="offcanvasRightLabel">Salary Slip</h5>
//                                 <button type="button" class="btn-close"
//                                     data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                             </div>
//                             {/* <!-- end offcanvas-header--> */}

//                             <div class="offcanvas-body">
//                                 <form>
//                                     <div className='row'>
//                                     <div className=" col-xl-4 mb-3">
//                                         <label htmlFor="employeeId" className="form-label">Employee ID</label>
//                                         <input type="text" className="form-control" id="employeeId" placeholder="Enter Employee ID" />
//                                     </div>
//                                     <div className=" col-xl-4 mb-3">
//                                         <label htmlFor="employeeName" className="form-label">Employee Name</label>
//                                         <input type="text" className="form-control" id="employeeName" placeholder="Enter Employee Name" />
//                                     </div>
//                                     <div className="col-xl-4 mb-3">
//                                         <label htmlFor="department" className="form-label">Department</label>
//                                         <input type="text" className="form-control" id="department" placeholder="Enter Department" />
//                                     </div>
//                                     </div>
//                                     <div className='row'>
//                                     <div className="col-xl-4 mb-3">
//                                         <label htmlFor="salary" className="form-label">Salary</label>
//                                         <input type="text" className="form-control" id="salary" placeholder="Enter Salary" />
//                                     </div>
//                                     <div className="col-xl-4 mb-3">
//                                         <label htmlFor="travelAllowance" className="form-label">Travel Allowance</label>
//                                         <input type="text" className="form-control" id="travelAllowance" placeholder="Enter Travel Allowance" />
//                                     </div>
//                                     <div className="col-xl-4 mb-3">
//                                         <label htmlFor="housingAllowance" className="form-label">Housing Allowance</label>
//                                         <input type="text" className="form-control" id="housingAllowance" placeholder="Enter Housing Allowance" />
//                                     </div></div>
//                                     <div className='row'>
//                                     <div className="col-xl-4 mb-3">
//                                         <label htmlFor="medicalAllowance" className="form-label">Medical Allowance</label>
//                                         <input type="text" className="form-control" id="medicalAllowance" placeholder="Enter Medical Allowance" />
//                                     </div>
//                                     <button type="submit" className="btn btn-primary">Generate</button></div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default PayRole;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import jsPDF from "jspdf";

Modal.setAppElement("#root");

function Payroll() {
    const [faculties, setFaculties] = useState([]);
    const [salaryRecords, setSalaryRecords] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const [salaryDetails, setSalaryDetails] = useState({
        basicPay: "",
        salary: "",
        travelAllowance: "",
        medicalAllowance: "",
        washingAllowance: "",
        da: "",
        hr: "",
        date: new Date().toISOString().split("T")[0], // Default to today
    });

    useEffect(() => {
        fetchFaculties();
        fetchSalaryRecords();
    }, []);

    const fetchFaculties = async () => {
        try {
            const response = await axios.get("/api/faculties");
            setFaculties(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error fetching faculties:", error);
        }
    };

    const fetchSalaryRecords = async () => {
        try {
            const response = await axios.get("/api/salary-records");
            setSalaryRecords(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error fetching salary records:", error);
        }
    };

    const openModal = (faculty) => {
        setSelectedFaculty(faculty);
        setSalaryDetails({
            basicPay: "",
            salary: "",
            travelAllowance: "",
            medicalAllowance: "",
            washingAllowance: "",
            da: "",
            hr: "",
            date: new Date().toISOString().split("T")[0],
        });
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedFaculty(null);
    };

    const handleChange = (e) => {
        setSalaryDetails({ ...salaryDetails, [e.target.name]: e.target.value });
    };

    const saveSalary = async () => {
        try {
            await axios.post("/api/save-salary", {
                facultyId: selectedFaculty._id,
                ...salaryDetails,
            });

            alert("Salary saved successfully!");
            generatePDF();
            fetchSalaryRecords(); // Refresh salary records
            closeModal();
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("Salary already recorded for this employee in the same month!");
            } else {
                console.error("Error saving salary:", error);
            }
        }
    };

    const generatePDF = () => {
        if (!selectedFaculty) return;

        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text("Salary Receipt", 90, 10);
        doc.setFontSize(12);
        doc.text(`Employee Name: ${selectedFaculty.firstName} ${selectedFaculty.lastName}`, 20, 30);
        doc.text(`Department: ${selectedFaculty.department}`, 20, 40);
        doc.text(`Employee ID: ${selectedFaculty.employeeId}`, 20, 50);
        doc.text(`Date: ${salaryDetails.date}`, 20, 60);
        doc.text(`Basic Pay: ₹${salaryDetails.basicPay}`, 20, 70);
        doc.text(`Salary: ₹${salaryDetails.salary}`, 20, 80);
        doc.text(`Travel Allowance: ₹${salaryDetails.travelAllowance}`, 20, 90);
        doc.text(`Medical Allowance: ₹${salaryDetails.medicalAllowance}`, 20, 100);
        doc.text(`Washing Allowance: ₹${salaryDetails.washingAllowance}`, 20, 110);
        doc.text(`DA: ${salaryDetails.da}%`, 20, 120);
        doc.text(`HR: ${salaryDetails.hr}%`, 20, 130);
        doc.text("Authorized Signature: ________________", 20, 150);

        doc.save(`Salary_Receipt_${selectedFaculty.firstName}.pdf`);
    };

    const filteredSalaries = salaryRecords.filter((record) => {
        const facultyName = record.facultyId?.firstName
            ? `${record.facultyId.firstName} ${record.facultyId.lastName}`.toLowerCase()
            : "";

        const employeeId = record.facultyId?.employeeId || ""; // Ensure it exists

        const matchesSearch = searchQuery
            ? facultyName.includes(searchQuery.toLowerCase()) || employeeId.includes(searchQuery)
            : true;

        const matchesYear = selectedYear ? record.date.startsWith(selectedYear) : true;

        const matchesMonth = selectedMonth
            ? new Date(record.date).toLocaleString("en-US", { month: "long" }) === selectedMonth
            : true;

        return matchesSearch && matchesYear && matchesMonth;
    });


    return (
        <div class="main-wrapper">
            <div class="page-wrapper cardhead">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-header">
                                <div class="row">
                                    <div class="col-md-4">
                                        <h3 >Pay Role</h3>
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
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Employee ID</th>
                                                    <th>Name</th>
                                                    <th>Role</th>
                                                    <th>Department</th>
                                                    <th>Salary</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {faculties.map((faculty) => (
                                                    <tr>
                                                        <td>{faculty.employeeId}</td>
                                                        <td>{faculty.firstName} {faculty.lastName}</td>
                                                        <td>{faculty.role}</td>
                                                        <td>{faculty.department}</td>
                                                        <td>{faculty.salary}</td>
                                                        <td><button class="btn btn-primary mt-1" data-bs-toggle="modal"
                                                            data-bs-target="#standard-modal" onClick={() => openModal(faculty)}>Generate Salary</button></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        {/* <h3>Faculty List</h3> */}
                        {/* <ul>
                            {faculties.map((faculty) => (
                                <li key={faculty._id}>
                                    {faculty.firstName} {faculty.lastName} - {faculty.role} - {faculty.department} - {faculty.employeeId} - {faculty.salary}
                                    <button onClick={() => openModal(faculty)}>Generate Salary</button>
                                </li>
                            ))}
                        </ul> */}

                        {/* Search and Filter Section */}

                        {/* <div id="standard-modal" class="modal fade" tabindex="-1" role="dialog"
                            aria-labelledby="standard-modalLabel" aria-hidden="true">
                            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                                <h2>Generate Salary</h2>

                                {selectedFaculty && (
                                    <div>
                                        <p>
                                            <strong>Employee:</strong> {selectedFaculty.firstName} {selectedFaculty.lastName}
                                        </p>
                                        <p>
                                            <strong>Annual Salary:</strong> {selectedFaculty.salary}
                                        </p>
                                        <label>Date:</label>
                                        <input type="date" name="date" value={salaryDetails.date} onChange={handleChange} />

                                        <label>Basic Pay:</label>
                                        <input type="number" name="basicPay" value={salaryDetails.basicPay} onChange={handleChange} />

                                        <label>Salary:</label>
                                        <input type="number" name="salary" value={salaryDetails.salary} onChange={handleChange} />

                                        <label>Travel Allowance:</label>
                                        <input type="number" name="travelAllowance" value={salaryDetails.travelAllowance} onChange={handleChange} />

                                        <label>Medical Allowance:</label>
                                        <input type="number" name="medicalAllowance" value={salaryDetails.medicalAllowance} onChange={handleChange} />

                                        <label>Washing Allowance:</label>
                                        <input type="number" name="washingAllowance" value={salaryDetails.washingAllowance} onChange={handleChange} />

                                        <label>DA (%):</label>
                                        <input type="number" name="da" value={salaryDetails.da} onChange={handleChange} />

                                        <label>HR (%):</label>
                                        <input type="number" name="hr" value={salaryDetails.hr} onChange={handleChange} />

                                        <button onClick={saveSalary}>Save & Download Receipt</button>
                                        <button onClick={closeModal}>Cancel</button>
                                    </div>
                                )}
                            </Modal>
                        </div> */}
                        <div id="standard-modal" class="modal fade" tabindex="-1" role="dialog"
                            aria-labelledby="standard-modalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="standard-modalLabel">Salary details</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        {selectedFaculty && (
                                            <div>
                                                <p>
                                                    <strong>Employee:</strong> {selectedFaculty.firstName} {selectedFaculty.lastName}
                                                </p>
                                                <p>
                                                    <strong>Annual Salary:</strong> {selectedFaculty.salary}
                                                </p>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <label>Date:</label>
                                                        <input type="date" name="date" value={salaryDetails.date} onChange={handleChange} />
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <label>Basic Pay:</label>
                                                        <input type="number" name="basicPay" value={salaryDetails.basicPay} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <label>Salary:</label>
                                                        <input type="number" name="salary" value={salaryDetails.salary} onChange={handleChange} />
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <label>Travel Allowance:</label>
                                                        <input type="number" name="travelAllowance" value={salaryDetails.travelAllowance} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <label>Medical Allowance:</label>
                                                        <input type="number" name="medicalAllowance" value={salaryDetails.medicalAllowance} onChange={handleChange} />
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <label>Washing Allowance:</label>
                                                        <input type="number" name="washingAllowance" value={salaryDetails.washingAllowance} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <label>DA (%):</label>
                                                        <input type="number" name="da" value={salaryDetails.da} onChange={handleChange} />
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <label>HR (%):</label>
                                                        <input type="number" name="hr" value={salaryDetails.hr} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <button onClick={saveSalary}>Save </button>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <button onClick={closeModal} data-bs-dismiss="modal"
                                                            aria-label="Close">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
}

export default Payroll;