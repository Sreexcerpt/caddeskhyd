import React from 'react'
import Chart from 'react-apexcharts';

const FacultyDashboard = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 650,
      stacked: true,
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    dataLabels: {
      formatter: (val) => val / 1000 + 'K'
    },
    plotOptions: {
      bar: {
        horizontal: false
      }
    },

    fill: {
      opacity: 1
    },
    colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
    yaxis: {
      labels: {
        formatter: (val) => val / 1000 + 'K'
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    }
  };

  const series = [
    {

      group: 'budget',
      data: [44000, 55000, 41000]
    },
    {

      group: 'actual',
      data: [48000, 50000, 40000]
    },
    {
   
      group: 'budget',
      data: [13000, 36000, 20000]
    },
    {
   
      group: 'actual',
      data: [20000, 40000, 25000]
    }
  ];

  return (
    <div>

		<div class="page-wrapper">
			<div class="content">

				<div class="row">
					<div class="col-md-12">
						<div class="page-header">
							<div class="row align-items-center ">
								<div class="col-md-4">
									<h3 class="page-title">Dashboard</h3>
								</div>
								<div class="col-md-8 float-end ms-auto">
									<div class="d-flex title-head">
										<div class="daterange-picker d-flex align-items-center justify-content-center">
											<div class="form-sort me-2">
												<i class="ti ti-calendar"></i>
												<input type="text" class="form-control  date-range bookingrange"/>
											</div>
											<div class="head-icons mb-0">
												<a href="" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh">
													<i class="ti ti-refresh-dot"></i>
												</a>
												<a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header">
													<i class="ti ti-chevrons-up"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

        {/* <!-- Welcome Wrap --> */}
				<div class="welcome-wrap mb-4">
					<div class=" d-flex align-items-center justify-content-between flex-wrap">
						<div class="mb-3">
							<h2 class="mb-1 text-white">Vijay Kumar</h2>
							<p class="text-light">You have 27 student added your domain. please reacch out to the header teachers if you want them excluded from your domain</p>
						</div>
						<div class="d-flex align-items-center flex-wrap mb-1">
							<a href="" class="btn btn-light btn-md mb-2">All Batches</a>
						</div>
					</div>
				</div>	
				{/* <!-- /Welcome Wrap --> */}

        <div class="row">
       
      
					<div class="col-xxl-4 col-xl-6 d-flex">
						<div class="card flex-fill">
							<div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
								<h5 class="mb-2">Student Batch</h5>
							</div>
							<div class="card-body pb-2">
              <div class="card border border-info" >
							<div class="card-body">
								<div class="d-flex align-items-center w-100">
								
									<div class="">
										<div class="fs-15 fw-semibold">Class-A</div>
										<p class="mb-0 text-fixed-black op-7 fs-12 ">2016-2017</p>
									</div>
									<div class="ms-auto">
                
                  <div class="d-flex flex-wrap gap-2 mb-4">
									<span class="badge bg-danger-transparent">Solid Works</span>
									<span class="badge bg-info-transparent">AutoCad</span>
									<span class="badge bg-success-transparent">NxPro</span>
								</div>
												
									</div>
								</div>
							</div>
						</div>

            <div class="card border border-info" >
							<div class="card-body">
								<div class="d-flex align-items-center w-100">
								
									<div class="">
										<div class="fs-15 fw-semibold">Class-B</div>
										<p class="mb-0 text-fixed-black op-7 fs-12 ">2017-2018 Finished by today</p>
									</div>
									<div class="ms-auto">
                  <div class="d-flex flex-wrap gap-2 mb-4">
									<span class="badge bg-warning-transparent">Solid Works</span>
								</div>				
									</div>
								</div>
							</div>
						</div>

            <div class="card border border-info" >
							<div class="card-body">
								<div class="d-flex align-items-center w-100">
								
									<div class="">
										<div class="fs-15 fw-semibold">Class-C</div>
										<p class="mb-0 text-fixed-black op-7 fs-12 ">2020-2021</p>
									</div>
									<div class="ms-auto">
                
                  <div class="d-flex flex-wrap gap-2 mb-4">
									<span class="badge bg-info-transparent">Solid Works</span>
									<span class="badge bg-success-transparent">NxPro</span>
								</div>
												
									</div>
								</div>
							</div>
						</div>

            <div class="card border border-info" >
							<div class="card-body">
								<div class="d-flex align-items-center w-100">
								
									<div class="">
										<div class="fs-15 fw-semibold">Class-D</div>
										<p class="mb-0 text-fixed-black op-7 fs-12 ">Finished by today</p>
									</div>
									<div class="ms-auto">
                
                  <div class="d-flex flex-wrap gap-2 mb-4">
									<span class="badge bg-info-transparent">AutoCad</span>
									<span class="badge bg-success-transparent">NxPro</span>
								</div>
									</div>
								</div>
							</div>
						</div>
								
							</div>
						</div>
					</div>

          <div class="col-xxl-4 col-xl-6 d-flex">
						<div class="card flex-fill">
            <div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
								<h5 class="mb-2">Documents</h5>
							</div>
                            <div class="card  m-2" style={{backgroundColor:"#3C2371"}}>
							<div class="card-body">
								<div class="d-flex align-items-center w-100">
									<div class="me-2">
										<span class="card-bg-primary text-white rounded-circle p-2">
											<i class="fa-solid fa-file-pdf"></i>
										</span>
									</div>
									<div class="">
										<div class="fs-15 fw-semibold text-fixed-white">Class-A Result</div>
										<p class="mb-0 text-fixed-white op-7 fs-12">2 May 2024 (2016-2017)</p>
									</div>
									<div class="ms-auto">
										<a href="javascript:void(0);" class="text-fixed-white"><i
												class="fa-solid fa-ellipsis-vertical"></i></a>
									</div>
								</div>
							</div>
							
						</div>

						<div class="card  m-2" style={{backgroundColor:"#3C2371"}}>
							<div class="card-body">
								<div class="d-flex align-items-center w-100">
									<div class="me-2">
										<span class="card-bg-primary text-white rounded-circle p-2">
											<i class="fa-solid fa-file-pdf"></i>
										</span>
									</div>
									<div class="">
										<div class="fs-15 fw-semibold text-fixed-white">Class-A Result</div>
										<p class="mb-0 text-fixed-white op-7 fs-12">2 May 2024 (2016-2017)</p>
									</div>
									<div class="ms-auto">
										<a href="javascript:void(0);" class="text-fixed-white"><i
												class="fa-solid fa-ellipsis-vertical"></i></a>
									</div>
								</div>
							</div>
							
						</div>

						<div class="card  m-2" style={{backgroundColor:"#3C2371"}}>
							<div class="card-body">
								<div class="d-flex align-items-center w-100">
									<div class="me-2">
										<span class="card-bg-primary text-white rounded-circle p-2">
											<i class="fa-solid fa-file-pdf"></i>
										</span>
									</div>
									<div class="">
										<div class="fs-15 fw-semibold text-fixed-white">Class-A Result</div>
										<p class="mb-0 text-fixed-white op-7 fs-12">2 May 2024 (2016-2017)</p>
									</div>
									<div class="ms-auto">
										<a href="javascript:void(0);" class="text-fixed-white"><i
												class="fa-solid fa-ellipsis-vertical"></i></a>
									</div>
								</div>
							</div>
							
						</div>

						<div class="card  m-2" style={{backgroundColor:"#3C2371"}}>
							<div class="card-body">
								<div class="d-flex align-items-center w-100">
									<div class="me-2">
										<span class="card-bg-primary text-white rounded-circle p-2">
											<i class="fa-solid fa-file-pdf"></i>
										</span>
									</div>
									<div class="">
										<div class="fs-15 fw-semibold text-fixed-white">Class-A Result</div>
										<p class="mb-0 text-fixed-white op-7 fs-12">2 May 2024 (2016-2017)</p>
									</div>
									<div class="ms-auto">
										<a href="javascript:void(0);" class="text-fixed-white"><i
												class="fa-solid fa-ellipsis-vertical"></i></a>
									</div>
								</div>
							</div>
							
						</div>
						</div>
					</div>
					

          <div class="col-xxl-4 col-xl-6 d-flex">
						<div class="card flex-fill">
							<div class="card-header pb-2 d-flex align-items-center justify-content-between flex-wrap">
								<h5 class="mb-2">Upcoming Activities</h5>
							</div>
							<div class="card-body pb-2">
              <div class="card border border-info" >
							<div class="card-body">
								<div class="d-flex align-items-center w-100">
								
									<div class="">
										<div class="fs-15 fw-semibold">Staff Metting</div>
										<p class="mb-0 text-fixed-black op-7 fs-12 "><i class="ti ti-calendar"></i>10:00Am To 11:00Am</p>
									</div>
									<div class="ms-auto">
                
                  <div class="d-flex flex-column flex-wrap gap-2 mb-4">
									<span class="badge bg-danger-transparent"><i class="ti ti-calendar"></i>12-3-2013</span>
                  <p class="mb-0 text-fixed-black op-7 fs-12 "><i class="ti ti-phone-check"></i> Google Meeting</p>
								</div>
												
									</div>
								</div>
							</div>
						</div>

            <div class="card border border-info" >
							<div class="card-body">
								<div class="d-flex align-items-center w-100">
								
									<div class="">
										<div class="fs-15 fw-semibold">Parents Meeting</div>
										<p class="mb-0 text-fixed-black op-7 fs-12 "><i class="ti ti-calendar"></i>10:00Am To 11:00Am</p>
									</div>
									<div class="ms-auto">
                
                  <div class="d-flex flex-column flex-wrap gap-2 mb-4">
									<span class="badge bg-danger-transparent"><i class="ti ti-calendar"></i>12-3-2013</span>
                  <p class="mb-0 text-fixed-black op-7 fs-12 "><i class="ti ti-phone-check"></i> Offline</p>
								</div>
												
									</div>
								</div>
							</div>
						</div>

            <div class="card border border-info" >
							<div class="card-body">
								<div class="d-flex align-items-center w-100">
								
									<div class="">
										<div class="fs-15 fw-semibold">Course Meeting</div>
										<p class="mb-0 text-fixed-black op-7 fs-12 ">10:00Am To 11:00Am</p>
									</div>
									<div class="ms-auto">
                
                  <div class="d-flex flex-column flex-wrap gap-2 mb-4">
									<span class="badge bg-danger-transparent"><i class="ti ti-calendar"></i>12-3-2013</span>
                  <p class="mb-0 text-fixed-black op-7 fs-12 "><i class="ti ti-phone-check"></i> Function Hall</p>
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


    </div>
  )
}

export default FacultyDashboard
