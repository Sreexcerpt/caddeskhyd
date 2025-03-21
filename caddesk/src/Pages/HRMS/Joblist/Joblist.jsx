import React from 'react';


const jobOpenings = [
    { id: 1, title: 'Software Engineer', location: 'New York, NY', description: 'Develop and maintain web applications.' },
    { id: 2, title: 'Product Manager', location: 'San Francisco, CA', description: 'Lead product development teams.' },
    { id: 3, title: 'UX Designer', location: 'Austin, TX', description: 'Design user interfaces and experiences.' },
];

const Joblist = () => {
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
                                            <h3 >Job Openings</h3>
                                        </div>
                                        <div class="col-md-8 float-end ms-auto">
                                            <div class="d-flex title-head">
                                                <div class="daterange-picker d-flex align-items-center justify-content-center">

                                                    <div class="head-icons mb-0">
                                                        <a href="/joblist" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
                                                        <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i class="ti ti-chevrons-up"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="joblist-container">

                                <ul className="row">
                                    {jobOpenings.map(job => (
                                        <div className='col-xl-4'>
                                        <li key={job.id} className="card">
                                            <h2 className='card-header'>{job.title}</h2>
                                            <div className='card-body'>
                                                <p>{job.location}</p>
                                                <p>{job.description}</p>
                                                <a className='btn btn-success' >Apply</a>
                                            </div>
                                        </li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Joblist;
