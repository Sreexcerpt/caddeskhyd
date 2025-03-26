// import React from 'react';

// const PaymentsAndInvoicing = () => {
//     return (
//         <>
//             <div class="main-wrapper">
//                 <div class="page-wrapper cardhead">
//                     <div class="content container-fluid">
//                         <div class="row">
//                             <div class="col-md-12">
//                                 <div class="card">
//                                     <div class="card-header">
//                                         <div className='row'>
//                                             <div class=" col-md-6">
//                                                 <h5 class="card-title">Payments And Invoicing</h5>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <div class="row">
//                                                     <div class="col-md-6">
//                                                         {/* <button type="button" class="btn btn-primary">Add Invoice</button> */}
//                                                     </div>
//                                                     <div class="col-md-6">
//                                                         {/* <button type="button" class="btn btn-primary">Add Payment</button> */}
//                                                         <button class="btn btn-primary mt-2" type="button" data-bs-toggle="offcanvas"
//                                                             data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add Expenses</button>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="card-body">
//                                         <div className='responsive-table'>
//                                             <table className='table table-bordered'>
//                                                 <thead>
//                                                     <tr>
//                                                         <th>Invoice No</th>
//                                                         <th>Invoice Date</th>
//                                                         <th>Due Date</th>
//                                                         <th>Amount</th>
//                                                         <th>Status</th>
//                                                         <th>Action</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     <tr>
//                                                         <td>1</td>
//                                                         <td>01-01-2021</td>
//                                                         <td>01-01-2022</td>
//                                                         <td>1000</td>
//                                                         <td>Unpaid</td>
//                                                         <td><button className='btn btn-primary'>View</button></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td>2</td>
//                                                         <td>01-01-2021</td>
//                                                         <td>01-01-2022</td>
//                                                         <td>1000</td>
//                                                         <td>Paid</td>
//                                                         <td><button className='btn btn-primary'>View</button></td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td>3</td>
//                                                         <td>01-01-2021</td>
//                                                         <td>01-01-2022</td>
//                                                         <td>1000</td>
//                                                         <td>Unpaid</td>
//                                                         <td><button className='btn btn-primary'>View</button></td>
//                                                     </tr>
//                                                 </tbody>
//                                             </table>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
//                                     aria-labelledby="offcanvasRightLabel">
//                                     <div class="offcanvas-header">
//                                         <h5 id="offcanvasRightLabel">Add Expenses</h5>
//                                         <button type="button" class="btn-close"
//                                             data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                     </div>
//                                     {/* <!-- end offcanvas-header--> */}

//                                     <div class="offcanvas-body">
//                                         <div className='row'>
//                                             <div className='col-xl-6'>
//                                                 <label htmlFor="invoiceNo">Invoice No:</label>
//                                                 <input type="text" id="invoiceNo" name="invoiceNo" />
//                                             </div>
//                                             <div className='col-xl-6'>
//                                                 <label htmlFor="invoiceDate">Invoice Date:</label>
//                                                 <input type="date" id="invoiceDate" name="invoiceDate" />
//                                             </div>
//                                         </div>
//                                         <div className='row'>
//                                             <div className='col-xl-6'>
//                                                 <label htmlFor="dueDate">Due Date:</label>
//                                                 <input type="date" id="dueDate" name="dueDate" />
//                                             </div>
//                                             <div className='col-xl-6'>
//                                                 <label htmlFor="amount">Amount:</label>
//                                                 <input type="text" id="amount" name="amount" />
//                                             </div>
//                                         </div>
//                                         <div className='row'>
//                                             <div className='col-xl-6'>
//                                                 <label htmlFor="status">Status:</label>
//                                                 <select id="status" name="status">
//                                                     <option value="paid">Paid</option>
//                                                     <option value="unpaid">Unpaid</option>
//                                                 </select>
//                                             </div>
//                                             <div className='col-xl-6'>
//                                                 <label htmlFor="paymentDate">Payment Date:</label>
//                                                 <input type="date" id="paymentDate" name="paymentDate" />
//                                             </div>
//                                         </div>
//                                         <div className='row'>
//                                             <div className='col-xl-6'>
//                                                 <label htmlFor="paymentMode">Payment Mode:</label>
//                                                 <select id="paymentMode" name="paymentMode">
//                                                     <option value="cash">Cash</option>
//                                                     <option value="cheque">Cheque</option>
//                                                     <option value="online">Online</option>
//                                                 </select>
//                                             </div>
//                                             <div className='col-xl-6'>
//                                                 <label htmlFor="transactionId">Transaction Id:</label>
//                                                 <input type="text" id="transactionId" name="transactionId" />
//                                             </div>
//                                         </div>
//                                         <div className='row'>
//                                             <div className='col-xl-12'>
//                                                 <label htmlFor="remarks">Remarks:</label>
//                                                 <textarea id="remarks" className='form-control post-textarea' name="remarks"></textarea>
//                                             </div>
//                                             <div className='col-xl-12'>
//                                                 <button type="submit">Submit</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* <!-- end offcanvas-body--> */}
//                                 </div>
//                                 {/* <!-- end offcanvas--> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// };

// export default PaymentsAndInvoicing;


////crt working code withot view button functionality
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PaymentsAndInvoicing = () => {
//     const [invoices, setInvoices] = useState([]);
//     const [formData, setFormData] = useState({
//         invoiceNo: '', invoiceDate: '', dueDate: '', amount: '',
//         status: 'unpaid', paymentDate: '', paymentMode: 'cash', transactionId: '', remarks: ''
//     });

//     useEffect(() => {
//         fetchInvoices();
//         fetchInvoiceNo(); 
//     }, []);

//     const fetchInvoices = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/invoices');
//             setInvoices(response.data);
//         } catch (error) {
//             console.error('Error fetching invoices:', error);
//         }
//     };


//     const fetchInvoiceNo = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/generate-invoice-no');
//             setFormData((prevData) => ({
//                 ...prevData,
//                 invoiceNo: response.data.invoiceNo, // Set generated invoice number
//             }));
//         } catch (error) {
//             console.error("Error fetching invoice number:", error);
//         }
//     };



//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:8080/invoices', formData);
//             fetchInvoices(); // Refresh invoice list
//             fetchInvoiceNo(); // Generate new invoice number after submitting

//             setFormData({ // Reset form but keep new `invoiceNo`
//                 invoiceNo: '', invoiceDate: '', dueDate: '', amount: '',
//                 status: 'unpaid', paymentDate: '', paymentMode: 'cash', transactionId: '', remarks: ''
//             });

//         } catch (error) {
//             console.error('Error adding invoice:', error);
//         }
//     };


//     return (
//         <>
//             <div className="main-wrapper">
//                 <div className="page-wrapper cardhead">
//                     <div className="content container-fluid">
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <div className="card">
//                                     <div className="card-header">
//                                         <div className='row'>
//                                             <div className="col-md-6">
//                                                 <h5 className="card-title">Payments And Invoicing</h5>
//                                             </div>
//                                             <div className="col-md-6 text-end">
//                                                 <button className="btn btn-primary mt-2" type="button" data-bs-toggle="offcanvas"
//                                                     data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add Expenses</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="card-body">
//                                         <div className='responsive-table'>
//                                             <table className='table table-bordered'>
//                                                 <thead>
//                                                     <tr>
//                                                         <th>Invoice No</th>
//                                                         <th>Invoice Date</th>
//                                                         <th>Due Date</th>
//                                                         <th>Amount</th>
//                                                         <th>Status</th>
//                                                         <th>Action</th>
//                                                     </tr>
//                                                 </thead>
//                                                 <tbody>
//                                                     {invoices.map((inv) => (
//                                                         <tr key={inv._id}>
//                                                             <td>{inv.invoiceNo}</td>
//                                                             <td>{inv.invoiceDate}</td>
//                                                             <td>{inv.dueDate}</td>
//                                                             <td>{inv.amount}</td>
//                                                             <td>{inv.status}</td>
//                                                             <td><button className='btn btn-primary'>View</button></td>
//                                                         </tr>
//                                                     ))}
//                                                 </tbody>
//                                             </table>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="offcanvas offcanvas-end" id="offcanvasRight"
//                                     aria-labelledby="offcanvasRightLabel">
//                                           <div class="col-md-6">
//                                     <div className="offcanvas-header">
//                                         <h5 id="offcanvasRightLabel">Add Expenses</h5>
//                                         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                     </div>
//                                     </div>
//                                     <div className="offcanvas-body">
//                                         <form onSubmit={handleSubmit}>
//                                             <div className='row'>
//                                             <div className='col-xl-6'>
//     <label htmlFor="invoiceNo">Invoice No:</label>
//     <input type="text" id="invoiceNo" name="invoiceNo" value={formData.invoiceNo} onChange={handleChange} required />
// </div>
//                                                 <div className='col-xl-6'>
//                                                     <label htmlFor="invoiceDate">Invoice Date:</label>
//                                                     <input type="date" id="invoiceDate" name="invoiceDate"  value={formData.invoiceDate} onChange={handleChange} required />
//                                                 </div>
//                                             </div>
//                                             <div className='row'>
//                                                 <div className='col-xl-6'>
//                                                     <label htmlFor="dueDate">Due Date:</label>
//                                                     <input type="date" id="dueDate" name="dueDate" value={formData.dueDate}  onChange={handleChange} required />
//                                                 </div>
//                                                 <div className='col-xl-6'>
//                                                     <label htmlFor="amount">Amount:</label>
//                                                     <input type="number" id="amount" name="amount" value={formData.amount}  onChange={handleChange} required />
//                                                 </div>
//                                             </div>
//                                             <div className='row'>
//                                                 <div className='col-xl-6'>
//                                                     <label htmlFor="status">Status:</label>
//                                                     <select id="status" name="status" value={formData.status} onChange={handleChange}>
//                                                         <option value="paid">Paid</option>
//                                                         <option value="unpaid">Unpaid</option>
//                                                     </select>
//                                                 </div>
//                                                 <div className='col-xl-6'>
//                                                     <label htmlFor="paymentDate">Payment Date:</label>
//                                                     <input type="date" id="paymentDate" name="paymentDate"  value={formData.paymentDate} onChange={handleChange} />
//                                                 </div>
//                                             </div>
//                                             <div className='row'>
//                                                 <div className='col-xl-6'>
//                                                     <label htmlFor="paymentMode">Payment Mode:</label>
//                                                     <select id="paymentMode" name="paymentMode"  value={formData.paymentMode} onChange={handleChange}>
//                                                         <option value="cash">Cash</option>
//                                                         <option value="cheque">Cheque</option>
//                                                         <option value="online">Online</option>
//                                                     </select>
//                                                 </div>
//                                                 <div className='col-xl-6'>
//                                                     <label htmlFor="transactionId">Transaction Id:</label>
//                                                     <input type="text" id="transactionId" name="transactionId" value={formData.transactionId}  onChange={handleChange} />
//                                                 </div>
//                                             </div>
//                                             <div className='row'>
//                                                 <div className='col-xl-12'>
//                                                     <label htmlFor="remarks">Remarks:</label>
//                                                     <textarea id="remarks" className='form-control post-textarea' name="remarks" value={formData.remarks}  onChange={handleChange}></textarea>
//                                                 </div>
//                                                 <div className='col-xl-12 text-end mt-3'>
//                                                     <button type="submit" className="btn btn-primary">Submit</button>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default PaymentsAndInvoicing;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentsAndInvoicing = () => {
    const [invoices, setInvoices] = useState([]);
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [formData, setFormData] = useState({
        invoiceNo: '', invoiceDate: '', dueDate: '', amount: '', item: '',
        status: 'unpaid', paymentDate: '', paymentMode: 'cash', transactionId: '', remarks: ''
    });
    const [errors, setErrors] = useState({}); // State to hold validation errors
    useEffect(() => {
        fetchInvoices();
        fetchInvoiceNo();
    }, []);

    const fetchInvoices = async () => {
        try {
            const response = await axios.get('http://localhost:8080/invoices');
            setInvoices(response.data);
        } catch (error) {
            console.error('Error fetching invoices:', error);
        }
    };

    const fetchInvoiceNo = async () => {
        try {
            const response = await axios.get('http://localhost:8080/generate-invoice-no');
            setFormData((prevData) => ({
                ...prevData,
                invoiceNo: response.data.invoiceNo, // Set generated invoice number
            }));
        } catch (error) {
            console.error("Error fetching invoice number:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.invoiceNo) errors.invoiceNo = "Invoice No is required";
        if (!formData.invoiceDate) errors.invoiceDate = "Invoice Date is required";

        if (!formData.amount || formData.amount <= 0) errors.amount = "Amount must be greater than 0";



        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return; // Stop form submission if validation fails

        try {
            await axios.post("http://localhost:8080/invoices", formData);
            fetchInvoices();
            fetchInvoiceNo();

            setFormData({
                invoiceNo: "",
                invoiceDate: "",
                dueDate: "",
                amount: "",
                status: "unpaid",
                paymentDate: "",
                item: "",
                paymentMode: "cash",
                transactionId: "",
                remarks: ""
            });

            setErrors({});
        } catch (error) {
            console.error("Error adding invoice:", error);
        }
    };

    const handleViewInvoice = (invoice) => {
        setSelectedInvoice(invoice);
    };

    return (
        <>
            <div className="main-wrapper">
                <div className="page-wrapper cardhead">
                    <div className="content container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className='row'>
                                            <div className="col-md-6">
                                                <h5 className="card-title">Payments And Invoicing</h5>
                                            </div>
                                            <div className="col-md-6 text-end">
                                                <button className="btn btn-primary mt-2" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add Expenses</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className='responsive-table'>
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr>
                                                        <th>Invoice No</th>
                                                        <th>Invoice Date</th>
                                                        {/* <th>Due Date</th> */}
                                                        <th>Amount</th>
                                                        <th>Item</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {invoices.map((inv) => (
                                                        <tr key={inv._id}>
                                                            <td>{inv.invoiceNo}</td>
                                                            <td>{inv.invoiceDate}</td>
                                                            {/* <td>{inv.dueDate}</td> */}
                                                            <td>{inv.amount}</td>
                                                            <td>{inv.item}</td>
                                                            <td>
                                                                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#invoiceModal" onClick={() => handleViewInvoice(inv)}>View</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal fade" id="invoiceModal" tabIndex="-1" aria-labelledby="invoiceModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="invoiceModalLabel">Invoice Details</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                {selectedInvoice ? (
                                                    <ul>
                                                        <li><strong>Invoice No:</strong> {selectedInvoice.invoiceNo}</li>
                                                        <li><strong>Invoice Date:</strong> {selectedInvoice.invoiceDate}</li>
                                                        {/* <li><strong>Due Date:</strong> {selectedInvoice.dueDate}</li> */}
                                                        <li><strong>Amount:</strong> {selectedInvoice.amount}</li>
                                                        <li><strong>Item:</strong> {selectedInvoice.item}</li>
                                                        <li><strong>Payment Date:</strong> {selectedInvoice.paymentDate || 'N/A'}</li>
                                                        <li><strong>Payment Mode:</strong> {selectedInvoice.paymentMode || 'N/A'}</li>
                                                        <li><strong>Transaction ID:</strong> {selectedInvoice.transactionId || 'N/A'}</li>
                                                        <li><strong>Remarks:</strong> {selectedInvoice.remarks || 'N/A'}</li>
                                                    </ul>
                                                ) : (
                                                    <p>No invoice selected.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="offcanvas offcanvas-end" id="offcanvasRight"
                                    aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        <h5 id="offcanvasRightLabel">Add Expenses</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <label htmlFor="invoiceNo">Invoice No:</label>
                                                    <input type="text" id="invoiceNo" name="invoiceNo" value={formData.invoiceNo} onChange={handleChange} required />
                                                    {errors.invoiceNo && <small className="text-danger">{errors.invoiceNo}</small>}
                                                </div>

                                                <div className="col-xl-6">
                                                    <label htmlFor="invoiceDate">Invoice Date:</label>
                                                    <input type="date" id="invoiceDate" name="invoiceDate" value={formData.invoiceDate} onChange={handleChange} required />
                                                    {errors.invoiceDate && <small className="text-danger">{errors.invoiceDate}</small>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/* <div className="col-xl-6">
                    <label htmlFor="dueDate">Due Date:</label>
                    <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleChange} required />
                    {errors.dueDate && <small className="text-danger">{errors.dueDate}</small>}
                </div> */}

                                                <div className="col-xl-6">
                                                    <label htmlFor="amount">Amount:</label>
                                                    <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} required />
                                                    {errors.amount && <small className="text-danger">{errors.amount}</small>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/* <div className="col-xl-6">
                    <label htmlFor="status">Status:</label>
                    <select id="status" name="status" value={formData.status} onChange={handleChange}>
                        <option value="paid">Paid</option>
                        <option value="unpaid">Unpaid</option>
                    </select>
                </div> */}
                                                <div className="col-xl-6">
                                                    <label htmlFor="transactionId">Item</label>
                                                    <input type="text" id="item" name="item" value={formData.item} onChange={handleChange} />
                                                </div>

                                                <div className="col-xl-6">
                                                    <label htmlFor="paymentDate">Payment Date:</label>
                                                    <input type="date" id="paymentDate" name="paymentDate" value={formData.paymentDate} onChange={handleChange} />
                                                    {errors.paymentDate && <small className="text-danger">{errors.paymentDate}</small>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <label htmlFor="paymentMode">Payment Mode:</label>
                                                    <select id="paymentMode" name="paymentMode" value={formData.paymentMode} onChange={handleChange}>
                                                        <option value="cash">Cash</option>
                                                        <option value="cheque">Cheque</option>
                                                        <option value="online">Online</option>
                                                    </select>
                                                </div>

                                                <div className="col-xl-6">
                                                    <label htmlFor="transactionId">Transaction Id:</label>
                                                    <input type="text" id="transactionId" name="transactionId" value={formData.transactionId} onChange={handleChange} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <label htmlFor="remarks">Remarks:</label>
                                                    <textarea id="remarks" className="form-control post-textarea" name="remarks" value={formData.remarks} onChange={handleChange}></textarea>
                                                </div>

                                                <div className="col-xl-12 text-end mt-3">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>
                                        </form>
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

export default PaymentsAndInvoicing;


