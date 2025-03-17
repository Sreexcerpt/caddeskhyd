import React from 'react';

const StudentCertificate = () => {
    return (
        <>
            <div class="main-wrapper">
                <div class="page-wrapper cardhead">
                    <div class="content container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title">Student Certificate</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Student Name</th>
                                                        <th scope="col">Course</th>
                                                        <th scope="col">Batch</th>
                                                        <th scope='col'>Start Date</th>
                                                        <th scope='col'>End Date</th>
                                                        <th scope='col'>Total Hours</th>
                                                        <th scope="col">Certificate</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>John Doe</td>
                                                        <td>AutoCAD</td>
                                                        <td>Batch 1</td>
                                                        <td>01/01/2021</td>
                                                        <td>01/06/2021</td>
                                                        <td>60</td>
                                                        <td><button type="button" class="btn btn-primary">Download</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jane Doe</td>
                                                        <td>Revit</td>
                                                        <td>Batch 2</td>
                                                        <td>01/01/2021</td>
                                                        <td>01/06/2021</td>
                                                        <td>60</td>
                                                        <td><button type="button" class="btn btn-primary">Download</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>John Smith</td>
                                                        <td>3DS Max</td>
                                                        <td>Batch 3</td>
                                                        <td>01/01/2021</td>
                                                        <td>01/06/2021</td>
                                                        <td>60</td>
                                                        <td><button type="button" class="btn btn-primary">Download</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default StudentCertificate;