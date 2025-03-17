import React from 'react';

const StudentPayments = () => {
    return (
        <>
            <div class="page-wrapper">
                <div class="content">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-header">
                                <div class="row align-items-center">
                                    <div class="col-sm-4">
                                        <h4 >Online Payments</h4>
                                    </div>
                                    <div class="col-sm-8 text-sm-end">
                                        <div class="head-icons">
                                            <a href="/StudentPayments" data-bs-toggle="tooltip" data-bs-placement="top"
                                                data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
                                                data-bs-original-title="Collapse" id="collapse-header">
                                                <i class="ti ti-chevrons-up"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <ul class="nav nav-tabs nav-tabs-bottom mb-3">
                                                <li class="nav-item"><a class="nav-link active" href="#bottom-tab1"
                                                    data-bs-toggle="tab">Tuition fee</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#bottom-tab2"
                                                    data-bs-toggle="tab">Miscellaneous Fee</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#bottom-tab3"
                                                    data-bs-toggle="tab">Payments History</a></li>
                                            </ul>
                                        </div>
                                        <div class="card-body">
                                            <div class="tab-content">
                                                <div class="tab-pane show active" id="bottom-tab1">
                                                Tuition fee
                                                   <table class="table table-striped table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Invoice ID</th>
                                                                <th>Amount</th>
                                                                <th>Payment Type</th>
                                                                <th>Payment Status</th>
                                                                <th>Payment Date</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>#INV-0001</td>
                                                                <td>$100.00</td>
                                                                <td>Online Payment</td>
                                                                <td><span class="badge bg-success">Paid</span></td>
                                                                <td>12-02-2021</td>
                                                                <td>
                                                                    <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
                                                                        class="fa fa-eye"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>#INV-0002</td>
                                                                <td>$150.00</td>
                                                                <td>Online Payment</td>
                                                                <td><span class="badge bg-success">Paid</span></td>
                                                                <td>12-02-2021</td>
                                                                <td>
                                                                    <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
                                                                        class="fa fa-eye"></i></a>
                                                                </td>
                                                            </tr>                                                        
                                                             <tr>
                                                                <td>#INV-0003</td>
                                                                <td>$200.00</td>
                                                                <td>Online Payment</td>
                                                                <td><span class="badge bg-danger">Unpaid</span></td>
                                                                <td>12-02-2021</td>
                                                                <td>
                                                                    <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
                                                                        class="fa fa-eye"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>#INV-0004</td>
                                                                <td>$250.00</td>
                                                                <td>Online Payment</td>
                                                                <td><span class="badge bg-success">Paid</span></td>
                                                                <td>12-02-2021</td>
                                                                <td>
                                                                    <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
                                                                        class="fa fa-eye"></i></a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane" id="bottom-tab2">
                                                    Miscellaneous Fee
                                                </div>
                                                <div class="tab-pane" id="bottom-tab3">
                                                    Payments History
                                                    <table class="table table-striped table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Invoice ID</th>
                                                                <th>Amount</th>
                                                                <th>Payment Type</th>
                                                                <th>Payment Status</th>
                                                                <th>Payment Date</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>#INV-0001</td>
                                                                <td>$100.00</td>
                                                                <td>Online Payment</td>
                                                                <td><span class="badge bg-success">Paid</span></td>
                                                                <td>12-02-2021</td>
                                                                <td>
                                                                    <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
                                                                        class="fa fa-eye"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>#INV-0002</td>
                                                                <td>$150.00</td>
                                                                <td>Online Payment</td>
                                                                <td><span class="badge bg-success">Paid</span></td>
                                                                <td>12-02-2021</td>
                                                                <td>
                                                                    <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
                                                                        class="fa fa-eye"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>#INV-0003</td>
                                                                <td>$200.00</td>
                                                                <td>Online Payment</td>
                                                                <td><span class="badge bg-danger">Unpaid</span></td>
                                                                <td>12-02-2021</td>
                                                                <td>
                                                                    <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
                                                                        class="fa fa-eye"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>#INV-0004</td>
                                                                <td>$250.00</td>
                                                                <td>Online Payment</td>
                                                                <td><span class="badge bg-success">Paid</span></td>
                                                                <td>12-02-2021</td>
                                                                <td>
                                                                    <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
                                                                        class="fa fa-eye"></i></a>
                                                                </td>
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
                </div>
            </div>
        </>
    );
};

export default StudentPayments;