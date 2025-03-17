import React from 'react';

const PayRole = () => {
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
                                            <h3 >Pay Role</h3>
                                        </div>
                                        <div class="col-md-8 float-end ms-auto">
                                            <div class="d-flex title-head">
                                                <div class="daterange-picker d-flex align-items-center justify-content-center">

                                                    <div class="head-icons mb-0">
                                                        <a href="/Payrole" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
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
                                                        <th>Department</th>
                                                        <th>Salary</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>John Doe</td>
                                                        <td>Engineering</td>
                                                        <td>$5000</td>
                                                        <td>
                                                            <button className="btn btn-primary" data-bs-toggle="offcanvas"
                                                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Generate Pay Slip</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Jane Smith</td>
                                                        <td>Marketing</td>
                                                        <td>$4500</td>
                                                        <td>
                                                            <button className="btn btn-primary" data-bs-toggle="offcanvas"
                                                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Generate Pay Slip</button>
                                                        </td>
                                                    </tr>
                                                    {/* Add more rows as needed */}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel">Salary Slip</h5>
                                <button type="button" class="btn-close"
                                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            {/* <!-- end offcanvas-header--> */}

                            <div class="offcanvas-body">
                                <form>
                                    <div className='row'>
                                    <div className=" col-xl-4 mb-3">
                                        <label htmlFor="employeeId" className="form-label">Employee ID</label>
                                        <input type="text" className="form-control" id="employeeId" placeholder="Enter Employee ID" />
                                    </div>
                                    <div className=" col-xl-4 mb-3">
                                        <label htmlFor="employeeName" className="form-label">Employee Name</label>
                                        <input type="text" className="form-control" id="employeeName" placeholder="Enter Employee Name" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="department" className="form-label">Department</label>
                                        <input type="text" className="form-control" id="department" placeholder="Enter Department" />
                                    </div>
                                    </div>
                                    <div className='row'>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="salary" className="form-label">Salary</label>
                                        <input type="text" className="form-control" id="salary" placeholder="Enter Salary" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="travelAllowance" className="form-label">Travel Allowance</label>
                                        <input type="text" className="form-control" id="travelAllowance" placeholder="Enter Travel Allowance" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="housingAllowance" className="form-label">Housing Allowance</label>
                                        <input type="text" className="form-control" id="housingAllowance" placeholder="Enter Housing Allowance" />
                                    </div></div>
                                    <div className='row'>
                                    <div className="col-xl-4 mb-3">
                                        <label htmlFor="medicalAllowance" className="form-label">Medical Allowance</label>
                                        <input type="text" className="form-control" id="medicalAllowance" placeholder="Enter Medical Allowance" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Generate</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayRole;