// import React from 'react';

// const StudentPayments = () => {
//     return (
//         <>
//             <div class="page-wrapper">
//                 <div class="content">
//                     <div class="row">
//                         <div class="col-md-12">
//                             <div class="page-header">
//                                 <div class="row align-items-center">
//                                     <div class="col-sm-4">
//                                         <h4 >Online Payments</h4>
//                                     </div>
//                                     <div class="col-sm-8 text-sm-end">
//                                         <div class="head-icons">
//                                             <a href="/StudentPayments" data-bs-toggle="tooltip" data-bs-placement="top"
//                                                 data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
//                                             <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top"
//                                                 data-bs-original-title="Collapse" id="collapse-header">
//                                                 <i class="ti ti-chevrons-up"></i>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="row">
//                                 <div class="col-md-12">
//                                     <div class="card">
//                                         <div class="card-header">
//                                             <ul class="nav nav-tabs nav-tabs-bottom mb-3">
//                                                 <li class="nav-item"><a class="nav-link active" href="#bottom-tab1"
//                                                     data-bs-toggle="tab">Tuition fee</a></li>
//                                                 <li class="nav-item"><a class="nav-link" href="#bottom-tab2"
//                                                     data-bs-toggle="tab">Miscellaneous Fee</a></li>
//                                                 <li class="nav-item"><a class="nav-link" href="#bottom-tab3"
//                                                     data-bs-toggle="tab">Payments History</a></li>
//                                             </ul>
//                                         </div>
//                                         <div class="card-body">
//                                             <div class="tab-content">
//                                                 <div class="tab-pane show active" id="bottom-tab1">
//                                                 Tuition fee
//                                                    <table class="table table-striped table-hover">
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>Invoice ID</th>
//                                                                 <th>Amount</th>
//                                                                 <th>Payment Type</th>
//                                                                 <th>Payment Status</th>
//                                                                 <th>Payment Date</th>
//                                                                 <th>Actions</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>#INV-0001</td>
//                                                                 <td>$100.00</td>
//                                                                 <td>Online Payment</td>
//                                                                 <td><span class="badge bg-success">Paid</span></td>
//                                                                 <td>12-02-2021</td>
//                                                                 <td>
//                                                                     <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
//                                                                         class="fa fa-eye"></i></a>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>#INV-0002</td>
//                                                                 <td>$150.00</td>
//                                                                 <td>Online Payment</td>
//                                                                 <td><span class="badge bg-success">Paid</span></td>
//                                                                 <td>12-02-2021</td>
//                                                                 <td>
//                                                                     <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
//                                                                         class="fa fa-eye"></i></a>
//                                                                 </td>
//                                                             </tr>                                                        
//                                                              <tr>
//                                                                 <td>#INV-0003</td>
//                                                                 <td>$200.00</td>
//                                                                 <td>Online Payment</td>
//                                                                 <td><span class="badge bg-danger">Unpaid</span></td>
//                                                                 <td>12-02-2021</td>
//                                                                 <td>
//                                                                     <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
//                                                                         class="fa fa-eye"></i></a>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>#INV-0004</td>
//                                                                 <td>$250.00</td>
//                                                                 <td>Online Payment</td>
//                                                                 <td><span class="badge bg-success">Paid</span></td>
//                                                                 <td>12-02-2021</td>
//                                                                 <td>
//                                                                     <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
//                                                                         class="fa fa-eye"></i></a>
//                                                                 </td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                                 <div class="tab-pane" id="bottom-tab2">
//                                                     Miscellaneous Fee
//                                                 </div>
//                                                 <div class="tab-pane" id="bottom-tab3">
//                                                     Payments History
//                                                     <table class="table table-striped table-hover">
//                                                         <thead>
//                                                             <tr>
//                                                                 <th>Invoice ID</th>
//                                                                 <th>Amount</th>
//                                                                 <th>Payment Type</th>
//                                                                 <th>Payment Status</th>
//                                                                 <th>Payment Date</th>
//                                                                 <th>Actions</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>#INV-0001</td>
//                                                                 <td>$100.00</td>
//                                                                 <td>Online Payment</td>
//                                                                 <td><span class="badge bg-success">Paid</span></td>
//                                                                 <td>12-02-2021</td>
//                                                                 <td>
//                                                                     <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
//                                                                         class="fa fa-eye"></i></a>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>#INV-0002</td>
//                                                                 <td>$150.00</td>
//                                                                 <td>Online Payment</td>
//                                                                 <td><span class="badge bg-success">Paid</span></td>
//                                                                 <td>12-02-2021</td>
//                                                                 <td>
//                                                                     <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
//                                                                         class="fa fa-eye"></i></a>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>#INV-0003</td>
//                                                                 <td>$200.00</td>
//                                                                 <td>Online Payment</td>
//                                                                 <td><span class="badge bg-danger">Unpaid</span></td>
//                                                                 <td>12-02-2021</td>
//                                                                 <td>
//                                                                     <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
//                                                                         class="fa fa-eye"></i></a>
//                                                                 </td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>#INV-0004</td>
//                                                                 <td>$250.00</td>
//                                                                 <td>Online Payment</td>
//                                                                 <td><span class="badge bg-success">Paid</span></td>
//                                                                 <td>12-02-2021</td>
//                                                                 <td>
//                                                                     <a href="javascript:void(0);" class="btn btn-sm btn-primary"><i
//                                                                         class="fa fa-eye"></i></a>
//                                                                 </td>
//                                                             </tr>
//                                                             </tbody>
//                                                         </table>
//                                                 </div>
//                                             </div>
//                                         </div>
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

// export default StudentPayments;

import React, { useState, useEffect } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const RegistrationList = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const loggedInUserId = user ? user._id : null;

  useEffect(() => {
    if (!loggedInUserId) {
      console.error("No user ID found!");
      return;
    }

    axios
      .get(`http://localhost:8080/api/registrations/${loggedInUserId}`)
      .then((res) => {
        setRegistrations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching registrations:", err);
        setLoading(false);
      });
  }, [loggedInUserId]);

  const handleOnlinePayment = async (registrationId, installmentId = null, amount = 0) => {
    try {
      if (!installmentId) {
        alert(`Redirecting to online payment for Registration ID: ${registrationId}`);
        return;
      }

      const response = await axios.put(
        `http://localhost:8080/api/update-installment/${registrationId}/${installmentId}`,
        {
          amount,
          transactionId: `TXN${Date.now()}`,
        }
      );

      if (response.data) {
        alert("Payment successful! Installment marked as Paid.");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment failed. Please try again.");
    }
  };

  const openReceiptModal = (registration, installment) => {
    setSelectedReceipt({
      registration,
      installment
    });
    setIsReceiptModalOpen(true);
  };

  const downloadReceipt = () => {
    const input = document.getElementById('receipt-content');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Receipt_${selectedReceipt.registration.regid}.pdf`);
    });
  };

  return (
    <div className="container mx-auto p-4 text-black">
      <h2 className="text-2xl font-bold mb-4 text-black">My Registrations</h2>

      {loading ? (
        <div className="text-center text-gray-700 py-4">Loading registrations...</div>
      ) : registrations.length === 0 ? (
        <div className="text-center text-gray-700 py-4">No registrations found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-black">Reg ID</th>
                <th className="border p-2 text-black">Name</th>
                <th className="border p-2 text-black">Course</th>
                <th className="border p-2 text-black">Fee</th>
                <th className="border p-2 text-black">Fee Type</th>
                <th className="border p-2 text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((registration) => (
                <React.Fragment key={registration._id}>
                  <tr className="hover:bg-gray-50">
                    <td className="border p-2 text-black">{registration.regid}</td>
                    <td className="border p-2 text-black">{registration.fName} {registration.lName}</td>
                    <td className="border p-2 text-black">{registration.courseName}</td>
                    <td className="border p-2 text-black">{registration.courseFee}</td>
                    <td className="border p-2 text-black">
                      {registration.feeType === "Installment" ? "Installments" : "Single Payment"}
                    </td>
                    <td className="border p-2">
                      {registration.feeType === "Single Payment" && (
                        <button 
                          onClick={() => handleOnlinePayment(registration._id)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          Pay Now
                        </button>
                      )}
                    </td>
                  </tr>

                  {registration.feeType === "Installment" &&
                    registration.paymentsPlan.map((installment) => (
                      <tr key={installment._id} className="bg-gray-50">
                        <td colSpan="4" className="border p-2 text-right text-black">
                          Installment Due: {installment.amount}
                        </td>
                        <td className="border p-2">
                          {installment.status === "Paid" ? (
                            <span className="text-green-600 font-bold">Paid</span>
                          ) : (
                            <span className="text-blue-600 font-bold">Pending</span>
                          )}
                        </td>
                        <td className="border p-2">
                          {installment.status === "Paid" ? (
                            <button 
                              onClick={() => openReceiptModal(registration, installment)}
                              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                            >
                              View Receipt
                            </button>
                          ) : (
                            <button 
                              onClick={() => handleOnlinePayment(registration._id, installment._id, installment.amount)}
                              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            >
                              Pay Now
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Receipt Modal */}
      {isReceiptModalOpen && selectedReceipt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto text-black">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-black">Payment Receipt</h2>
                <button 
                  onClick={() => setIsReceiptModalOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  ✕
                </button>
              </div>

              <div 
                id="receipt-content" 
                className="p-6 bg-white border rounded-lg text-black"
              >
                <div className="flex justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-black">Payment Receipt</h3>
                    <p className="text-black">Registration ID: {selectedReceipt.registration.regid}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-black">Date: {new Date().toLocaleDateString()}</p>
                    <p className="text-black">Transaction ID: TXN{Date.now()}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-black">Personal Information</h4>
                    <p className="text-black">Name: {selectedReceipt.registration.fName} {selectedReceipt.registration.lName}</p>
                    <p className="text-black">Email: {selectedReceipt.registration.email}</p>
                    <p className="text-black">Phone: {selectedReceipt.registration.phone}</p>
                    <p className="text-black">Father's Name: {selectedReceipt.registration.fatherName}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-black">Payment Details</h4>
                    <p className="text-black">Course: {selectedReceipt.registration.courseName}</p>
                    <p className="text-black">Total Course Fee: {selectedReceipt.registration.courseFee}</p>
                    <p className="text-black">Payment Type: {selectedReceipt.registration.feeType}</p>
                    <p className="text-black">Installment Amount: {selectedReceipt.installment.amount}</p>
                    <p className="text-black">Payment Date: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p className="font-bold text-green-600">Payment Successful</p>
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-4">
                <button 
                  onClick={downloadReceipt}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Download Receipt
                </button>
                <button 
                  onClick={() => setIsReceiptModalOpen(false)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationList;
