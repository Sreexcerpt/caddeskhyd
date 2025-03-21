import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
const StudentCourseDetails = () => {
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.post("/get-video-link", {
                    videoPath: "/study.mp4", // Path in Dropbox
                });

                setVideoUrl(response.data.videoUrl);
            } catch (error) {
                console.error("Error fetching video:", error);
            }
        };

        fetchVideo();
    }, []);
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
                                            <h3 >Course Detail</h3>
                                        </div>
                                        <div class="col-md-8 float-end ms-auto">
                                            <div class="d-flex title-head">
                                                <div class="daterange-picker d-flex align-items-center justify-content-center">

                                                    <div class="head-icons mb-0">
                                                        <a href="/Courseview" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i class="ti ti-refresh-dot"></i></a>
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
                            <div className='col-xl-8'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h5>Overview</h5>
                                    </div>
                                    <div className='card-body'>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h5>Course Content</h5>
                                </div>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-xl-9'>
                                            <div className='card custom-card'>
                                                <div class="card-header justify-content-between">
                                                    <div class="card-title">
                                                    </div>
                                                    <a href="#" data-bs-toggle="card-fullscreen">
                                                        <i data-feather="maximize" class="feather-zap"></i>
                                                    </a>

                                                </div>
                                                <div className='card-body'>
                                                    {videoUrl ? (
                                                        <div>
                                                        <video width="100%" controls controlsList="nodownload">
                                                            <source src={videoUrl} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                        
                                                        </div>
                                                    ) : (
                                                        <p>Loading video...</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-xl-3'>
                                            <ul>
                                                <li className="submenu">
                                                    <div className='card'>
                                                        <div className='card-body'>
                                                            <a href='#'>video1</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="submenu">
                                                    <div className='card'>
                                                        <div className='card-body'>
                                                            <a href='#'>video1</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="submenu">
                                                    <div className='card'>
                                                        <div className='card-body'>
                                                            <a href='#'>video1</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="submenu">
                                                    <div className='card'>
                                                        <div className='card-body'>
                                                            <a href='#'>video1</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="submenu">
                                                    <div className='card'>
                                                        <div className='card-body'>
                                                            <a href='#'>video1</a>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
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

export default StudentCourseDetails;