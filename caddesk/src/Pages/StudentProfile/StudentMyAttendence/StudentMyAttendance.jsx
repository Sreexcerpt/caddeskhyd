import React from 'react';

const StudentMyAttendance = () => {
    return (
        <>
            <div class="main-wrapper">
                <div class="page-wrapper cardhead">
                    <div class="content container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">My Attendance</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-xl-4"></div>
                                            <div class="col-xl-2">
                                                <label>Batch:</label>
                                                <select>
                                                    <option value="">Select Batch</option>
                                                    <option value="1">Batch 1</option>
                                                    <option value="2">Batch 2</option>
                                                    <option value="3">Batch 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Subject ID</th>
                                                        <th>Subject Name</th>
                                                        <th>Total Classes</th>
                                                        <th>Percentage(%)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Maths</td>
                                                        <td>8/10</td>
                                                        <td>80%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Science</td>
                                                        <td>7/10</td>
                                                        <td>70%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>English</td>
                                                        <td>9/10</td>
                                                        <td>90%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>History</td>
                                                        <td>6/10</td>
                                                        <td>60%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Geography</td>
                                                        <td>7/10</td>
                                                        <td>70%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Computer</td>
                                                        <td>8/10</td>
                                                        <td>80%</td>
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

export default StudentMyAttendance;