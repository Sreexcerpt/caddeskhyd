
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import jsPDF from "jspdf";
const Payview = () => {
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
        doc.text(`Employee ID: ${selectedFaculty.staffOrFacultyId}`, 20, 50);
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

        const staffOrFacultyId = record.facultyId?.staffOrFacultyId || ""; // Ensure it exists

        const matchesSearch = searchQuery
            ? facultyName.includes(searchQuery.toLowerCase()) || staffOrFacultyId.includes(searchQuery)
            : true;

        const matchesYear = selectedYear ? record.date.startsWith(selectedYear) : true;

        const matchesMonth = selectedMonth
            ? new Date(record.date).toLocaleString("en-US", { month: "long" }) === selectedMonth
            : true;

        return matchesSearch && matchesYear && matchesMonth;
    });
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 7;

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filteredSalaries.slice(indexOfFirstRecord, indexOfLastRecord);

    const totalPages = Math.ceil(filteredSalaries.length / recordsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                                            <h3>Salary Records</h3>
                                        </div>
                                        <div class="col-md-8 float-end ms-auto">
                                            <div class="d-flex title-head">
                                                <div class="daterange-picker d-flex align-items-center justify-content-center">
                                                    <div class="head-icons mb-0">
                                                        <a href="/Payview" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
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
                            <div className="row">
                                <div className="col-xl-4">
                                    <input
                                        type="text"
                                        placeholder="Search by Name or ID"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <div className="col-xl-4">
                                    <select onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear}>
                                        <option value="">Select Year</option>
                                        {[2025, 2024, 2023].map((year) => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-xl-4">
                                    <select onChange={(e) => setSelectedMonth(e.target.value)} value={selectedMonth}>
                                        <option value="">Select Month</option>
                                        {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
                                            <option key={month} value={month}>{month}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Employee Name</th>
                                        <th>Department</th>
                                        <th>Employee ID</th>
                                        <th>Date</th>
                                        <th>Basic Pay</th>
                                        <th>Salary</th>
                                        <th>Travel Allowance</th>
                                        <th>Medical Allowance</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRecords.map((record, index) => (
                                        <tr key={index}>
                                            <td>{record.facultyId?.firstName} {record.facultyId?.lastName}</td>
                                            <td>{record.facultyId?.department}</td>
                                            <td>{record.facultyId?.staffOrFacultyId}</td>
                                            <td>{record.date}</td>
                                            <td>₹{record.basicPay}</td>
                                            <td>₹{record.salary}</td>
                                            <td>₹{record.travelAllowance}</td>
                                            <td>₹{record.medicalAllowance}</td>
                                            <td>
                                                <div class="dropdown table-action">
                                                    <a href="#" class="action-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fa fa-ellipsis-v"></i>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_edit">
                                                            <i class="ti ti-eye text-indigo"></i> Preview
                                                        </a>
                                                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_payments">
                                                            <i class="ti ti-arrow-down text-green"></i> Download
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="pagination">
                                {/* {Array.from({ length: totalPages }, (_, index) => (
                                    <button key={index + 1} onClick={() => paginate(index + 1)} className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}>
                                        {index + 1}
                                    </button>
                                ))} */}
                                <nav aria-label="Page navigation" class="pagination-style-1">
                                    <ul class="pagination mb-0">
                                        
                                        {Array.from({ length: totalPages }, (_, index) => (
                                    <li className="page-link" key={index + 1} onClick={() => paginate(index + 1)} >
                                        {index + 1}
                                    </li>
                                ))}
                                        
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payview;