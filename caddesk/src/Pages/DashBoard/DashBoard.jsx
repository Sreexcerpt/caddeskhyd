import React from 'react'
import BarChart from '../../Components/Chat/BarChart'
import GoalBarChart from '../../Components/Chat/GoalBarChart'
import GoalBarChartGreen from '../../Components/Chat/GoalBarChart'
import StockChart from '../../Components/Chat/StockChart'

const DashBoard = () => {
  return (
    <div>
         {/* <!-- Page Wrapper --> */}
        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-header">
                            <div className="row align-items-center ">
                                <div className="col-md-4">
                                    <h3 className="page-title">Dashboard</h3>
                                </div>
                                <div className="col-md-8 float-end ms-auto">
                                    <div className="d-flex title-head">
                                        <div className="daterange-picker d-flex align-items-center justify-content-center">
                                            <div className="form-sort me-2">
                                                <i className="ti ti-calendar"></i>
                                                <input type="text" className="form-control  date-range bookingrange"/>
                                            </div>
                                            <div className="head-icons mb-0">
                                                <a href="index.html" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i className="ti ti-refresh-dot"></i></a>
                                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i className="ti ti-chevrons-up"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header border-0 pb-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                    <h4><i className="ti ti-grip-vertical me-1"></i>Student 
                                    Registration</h4>
                                    <div className="dropdown">
                                        <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
											<i className="ti ti-calendar-check me-2"></i>Last 30 days
										</a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="javascript:void(0);" className="dropdown-item">
												Last 15 days
											</a>
                                            <a href="javascript:void(0);" className="dropdown-item">
												Last 30 days
											</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-body">
                                <div className="table-responsive custom-table">
                                    <table className="table dataTable" id="deals-project">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Name</th>
                                                <th>Stage</th>
                                                <th>Amount</th>
                                                <th>Probability</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header border-0 pb-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                    <h4><i className="ti ti-grip-vertical me-1"></i>Deals By Stage</h4>
                                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                                        <div className="dropdown me-2">
                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
												Sales Pipeline
											</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a href="javascript:void(0);" className="dropdown-item">
													Marketing Pipeline
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Sales Pipeline
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Email
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Chats
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Operational
												</a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
												Last 30 Days
											</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a href="javascript:void(0);" className="dropdown-item">
													Last 30 Days
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Last 15 Days
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Last 7 Days
												</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="deals-chart">
                                    <BarChart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header border-0 pb-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                    <h4><i className="ti ti-grip-vertical me-1"></i>Faculty By Stage</h4>
                                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                                        
                                        <div className="dropdown">
                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
												Last 3 months
											</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a href="javascript:void(0);" className="dropdown-item">
													Last 3 months
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Last 6 months
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Last 12 months
												</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="last-chart">
                                    <GoalBarChart/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header border-0 pb-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                    <h4><i className="ti ti-grip-vertical me-1"></i>Faculty on Class</h4>
                                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                                        
                                        <div className="dropdown">
                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
												Last 3 months
											</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a href="javascript:void(0);" className="dropdown-item">
													Last 3 months
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Last 6 months
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Last 12 months
												</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="won-chart">
                                <GoalBarChart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex">
                        <div className="card w-100">
                            <div className="card-header border-0 pb-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                                    <h4><i className="ti ti-grip-vertical me-1"></i>Growth Of Year</h4>
                                    <div className="d-flex align-items-center flex-wrap row-gap-2">
                                        <div className="dropdown me-2">
                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
												Sales Pipeline
											</a>
                                            <div className="dropdown-menu dropdown-menu-end">

                                                <a href="javascript:void(0);" className="dropdown-item">
													Marketing Pipeline
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Sales Pipeline
												</a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a className="dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);">
												Last 3 months
											</a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a href="javascript:void(0);" className="dropdown-item">
													Last 3 months
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Last 6 months
												</a>
                                                <a href="javascript:void(0);" className="dropdown-item">
													Last 12 months
												</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div id="deals-year">
                                    <StockChart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- /Page Wrapper --> */}
    </div>
  )
}

export default DashBoard
