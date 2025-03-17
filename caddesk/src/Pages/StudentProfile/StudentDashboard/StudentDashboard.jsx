import React from 'react';

function StudentDashboard() {
    return (
        <>
            <div class="page-wrapper">
                <div class="content">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-header">
                                <div class="row align-items-center ">
                                    <div class="col-md-4">
                                        <h3>Dashboard</h3>
                                    </div>
                                    <div className="col-md-8 float-end ms-auto">
                                        <div className="d-flex title-head">
                                            <div className="daterange-picker d-flex align-items-center justify-content-center">
                                                <div className="head-icons mb-0">
                                                    <a href="/StudentDashboard" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
                                                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i className="ti ti-chevrons-up"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="welcome-wrap mb-4">
                        <div class=" d-flex align-items-center justify-content-between flex-wrap">
                            <div class="mb-3">
                                <h2 class="mb-1 text-white">Welcome Back, Adrian</h2>
                                <p class="text-light">14 New Notifications Today !!!</p>
                            </div>
                            <div class="d-flex align-items-center flex-wrap mb-1">
                                <a href="company.html" class="btn btn-dark btn-md me-2 mb-2">Companies</a>
                                <a href="packages.html" class="btn btn-light btn-md mb-2">All Packages</a>
                            </div>
                        </div>
                    </div>


                    <div class="row">

                        <div class="col-xl-3 col-sm-6 d-flex">
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span class="avatar avatar-md rounded bg-dark mb-3">
                                            <i class="ti ti-building fs-16"></i>
                                        </span>


                                        <div class="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h2 class="mb-1">5468</h2>
                                                <p class="fs-13">Total Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 d-flex">
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span class="avatar avatar-md rounded bg-dark mb-3">
                                            <i class="ti ti-carousel-vertical fs-16"></i>
                                        </span>


                                        <div class="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h2 class="mb-1">4598</h2>
                                                <p class="fs-13">Active Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 d-flex">
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span class="avatar avatar-md rounded bg-dark mb-3">
                                            <i class="ti ti-chalkboard-off fs-16"></i>
                                        </span>


                                        <div class="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h2 class="mb-1">3698</h2>
                                                <p class="fs-13">Courses Completed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 
                        <div class="col-xl-3 col-sm-6 d-flex">
                            <div class="card flex-fill">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <span class="avatar avatar-md rounded bg-dark mb-3">
                                            <i class="ti ti-businessplan fs-16"></i>
                                        </span>
                                        <span class="badge bg-danger fw-normal mb-3">
                                            -16%
                                        </span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h2 class="mb-1">$89,878,58</h2>
                                            <p class="fs-13">Total Earnings</p>
                                        </div>
                                        <div class="company-bar4">5,10,7,5,10,7,5</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                    </div>

                    <div class="row">
                        <div class="col-xl-4 col-lg-6 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                                    <h5 class="mb-2">Course 1</h5>
                                </div>
                                <div class="card-body">


                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                                    <h5 class="mb-2">Course 2</h5>
                                </div>
                                <div class="card-body pb-0">

                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 ">
                            <div class="card flex-fill">
                                <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
                                    <h5 class="mb-2">Course 3</h5>
                                </div>
                                <div class="card-body">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default StudentDashboard;