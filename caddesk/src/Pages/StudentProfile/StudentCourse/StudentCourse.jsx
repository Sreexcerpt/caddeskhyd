import React from 'react';

const StudentCourse = () => {
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
                                            <h3 >Student Courses</h3>
                                        </div>
                                        <div class="col-md-8 float-end ms-auto">
                                            <div class="d-flex title-head">
                                                <div class="daterange-picker d-flex align-items-center justify-content-center">

                                                    <div class="head-icons mb-0">
                                                        <a href="/StudentCourse" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
                                                        <a href="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i class="ti ti-chevrons-up"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-4'>
                                <div className='card'>
                                    <div className='card-header'>
                                    Enrolled Courses
                                    </div>
                                    <div className='card-body'>
                                        16
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4'>
                            <div className='card'>
                                    <div className='card-header'>
                                    Active Courses
                                    </div>
                                    <div className='card-body'>
                                    <p class="fw-semibold fs-16 mb-0">25</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4'>
                            <div className='card'>
                                    <div className='card-header'>
                                    Completed Courses
                                    </div>
                                    <div className='card-body'>
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title">Enrolled Courses</h5>
                                    </div>
                                    <div class="card-body">
                                        <div className='row'>
                                            <div className='col-xl-3'>
                                                <div class="card">
                                                    <img src="/assets/img/img-02.jpg" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h4>Name</h4>
                                                        <p class="card-text">Some quick example text to build on the card title and
                                                            make up the bulk of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-3'>
                                                <div class="card">
                                                    <img src="/assets/img/img-02.jpg" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h4>Name</h4>
                                                        <p class="card-text">Some quick example text to build on the card title and
                                                            make up the bulk of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-3'>
                                                <div class="card">
                                                    <img src="/assets/img/img-02.jpg" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h4>Name</h4>
                                                        <p class="card-text">Some quick example text to build on the card title and
                                                            make up the bulk of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-3'>
                                                <div class="card">
                                                    <img src="/assets/img/img-02.jpg" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h4>Name</h4>
                                                        <p class="card-text">Some quick example text to build on the card title and
                                                            make up the bulk of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
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

export default StudentCourse;