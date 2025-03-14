import React from 'react';

const PaymentsAndInvoicing = () => {
    return (
        <>
            <div class="main-wrapper">
                <div class="page-wrapper cardhead">
                    <div class="content container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header">
                                        <div className='row'>
                                            <div class=" col-md-6">
                                                <h5 class="card-title">Payments And Invoicing</h5>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        {/* <button type="button" class="btn btn-primary">Add Invoice</button> */}
                                                    </div>
                                                    <div class="col-md-6">
                                                        {/* <button type="button" class="btn btn-primary">Add Payment</button> */}
                                                        <button class="btn btn-primary mt-2" type="button" data-bs-toggle="offcanvas"
                                                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add Expenses</button>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div className='responsive-table'>
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr>
                                                        <th>Invoice No</th>
                                                        <th>Invoice Date</th>
                                                        <th>Due Date</th>
                                                        <th>Amount</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>01-01-2021</td>
                                                        <td>01-01-2022</td>
                                                        <td>1000</td>
                                                        <td>Unpaid</td>
                                                        <td><button className='btn btn-primary'>View</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>01-01-2021</td>
                                                        <td>01-01-2022</td>
                                                        <td>1000</td>
                                                        <td>Paid</td>
                                                        <td><button className='btn btn-primary'>View</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>01-01-2021</td>
                                                        <td>01-01-2022</td>
                                                        <td>1000</td>
                                                        <td>Unpaid</td>
                                                        <td><button className='btn btn-primary'>View</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                                    aria-labelledby="offcanvasRightLabel">
                                    <div class="offcanvas-header">
                                        <h5 id="offcanvasRightLabel">Add Expenses</h5>
                                        <button type="button" class="btn-close"
                                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    {/* <!-- end offcanvas-header--> */}

                                    <div class="offcanvas-body">
                                        <div className='row'>
                                            <div className='col-xl-6'>
                                                <label htmlFor="invoiceNo">Invoice No:</label>
                                                <input type="text" id="invoiceNo" name="invoiceNo" />
                                            </div>
                                            <div className='col-xl-6'>
                                                <label htmlFor="invoiceDate">Invoice Date:</label>
                                                <input type="date" id="invoiceDate" name="invoiceDate" />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xl-6'>
                                                <label htmlFor="dueDate">Due Date:</label>
                                                <input type="date" id="dueDate" name="dueDate" />
                                            </div>
                                            <div className='col-xl-6'>
                                                <label htmlFor="amount">Amount:</label>
                                                <input type="text" id="amount" name="amount" />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xl-6'>
                                                <label htmlFor="status">Status:</label>
                                                <select id="status" name="status">
                                                    <option value="paid">Paid</option>
                                                    <option value="unpaid">Unpaid</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-6'>
                                                <label htmlFor="paymentDate">Payment Date:</label>
                                                <input type="date" id="paymentDate" name="paymentDate" />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xl-6'>
                                                <label htmlFor="paymentMode">Payment Mode:</label>
                                                <select id="paymentMode" name="paymentMode">
                                                    <option value="cash">Cash</option>
                                                    <option value="cheque">Cheque</option>
                                                    <option value="online">Online</option>
                                                </select>
                                            </div>
                                            <div className='col-xl-6'>
                                                <label htmlFor="transactionId">Transaction Id:</label>
                                                <input type="text" id="transactionId" name="transactionId" />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xl-12'>
                                                <label htmlFor="remarks">Remarks:</label>
                                                <textarea id="remarks" className='form-control post-textarea' name="remarks"></textarea>
                                            </div>
                                            <div className='col-xl-12'>
                                                <button type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end offcanvas-body--> */}
                                </div>
                                {/* <!-- end offcanvas--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PaymentsAndInvoicing;