// import React from 'react'

// const Header = () => {
//   return (
//     <div>
//       <div className="header">
//         {/* <!-- Logo --> */}
//         <div className="header-left active">
//           <a href="/" className="logo logo-normal">
//             <img src="/assets/img/cad.png" alt="Logo" />
//             <img
//               src="/assets/img/cad.png"
//               className="white-logo"
//               alt="Logo"
//             />
//           </a>
//           <a href="/" className="logo-small">
//             <img src="/assets/img/cad.png" alt="Logo" />
//           </a>
//           <a id="toggle_btn" href="javascript:void(0);">
//             <i className="ti ti-arrow-bar-to-left"></i>
//           </a>
//         </div>
//         {/* <!-- /Logo --> */}

//         <a id="mobile_btn" className="mobile_btn" href="#sidebar">
//           <span className="bar-icon">
//             <span></span>
//             <span></span>
//             <span></span>
//           </span>
//         </a>

//         <div className="header-user">
//           <ul className="nav user-menu">
//             {/* <!-- Search --> */}
//             <li className="nav-item nav-search-inputs me-auto">
//               <div className="top-nav-search">
//                 <a href="" className="responsive-search">
//                   <i className="fa fa-search"></i>
//                 </a>
//                 <form action="#" className="dropdown">
//                   <div className="searchinputs" id="dropdownMenuClickable">
//                     <input type="text" placeholder="Search" />
//                     <div className="search-addon">
//                       <button type="submit">
                       
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </li>
//             {/* <!-- /Search --> */}

//             {/* <!-- Horizontal Single --> */}
          
//             {/* <!-- /Horizontal Single --> */}

//             {/* <!-- Nav List --> */}
//             <li className="nav-item nav-list">
//               <ul className="nav">
//                 <li>
//                   <div>
//                     <a
//                       href="#"
//                       className="btn btn-icon border btn-menubar btnFullscreen"
//                     >
//                       <i className="ti ti-maximize"></i>
//                     </a>
//                   </div>
//                 </li>
//                 <li className="dark-mode-list">
//                   <a
//                     href="javascript:void(0);"
//                     id="dark-mode-toggle"
//                     className="dark-mode-toggle"
//                   >
//                     <i className="ti ti-sun light-mode active"></i>
//                     <i className="ti ti-moon dark-mode"></i>
//                   </a>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <a
//                     href="javascript:void(0);"
//                     className="btn btn-header-list"
//                     data-bs-toggle="dropdown"
//                   >
//                     <i className="ti ti-layout-grid-add"></i>
//                   </a>
//                   <div className="dropdown-menu dropdown-menu-end menus-info">
//                     <div className="row">
//                       <div className="col-md-6">
//                         <ul className="menu-list">
//                           <li>
//                             <a href="contacts.html">
//                               <div className="menu-details">
//                                 <span className="menu-list-icon bg-violet">
//                                   <i className="ti ti-user-up"></i>
//                                 </span>
//                                 <div className="menu-details-content">
//                                   <p>Contacts</p>
//                                   <span>Add New Contact</span>
//                                 </div>
//                               </div>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="pipeline.html">
//                               <div className="menu-details">
//                                 <span className="menu-list-icon bg-green">
//                                   <i className="ti ti-timeline-event-exclamation"></i>
//                                 </span>
//                                 <div className="menu-details-content">
//                                   <p>Pipline</p>
//                                   <span>Add New Pipline</span>
//                                 </div>
//                               </div>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="activities.html">
//                               <div className="menu-details">
//                                 <span className="menu-list-icon bg-pink">
//                                   <i className="ti ti-bounce-right"></i>
//                                 </span>
//                                 <div className="menu-details-content">
//                                   <p>Activities</p>
//                                   <span>Add New Activity</span>
//                                 </div>
//                               </div>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="analytics.html">
//                               <div className="menu-details">
//                                 <span className="menu-list-icon bg-info">
//                                   <i className="ti ti-analyze"></i>
//                                 </span>
//                                 <div className="menu-details-content">
//                                   <p>Analytics</p>
//                                   <span>Shows All Information</span>
//                                 </div>
//                               </div>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="projects.html">
//                               <div className="menu-details">
//                                 <span className="menu-list-icon bg-danger">
//                                   <i className="ti ti-atom-2"></i>
//                                 </span>
//                                 <div className="menu-details-content">
//                                   <p>Projects</p>
//                                   <span>Add New Project</span>
//                                 </div>
//                               </div>
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="col-md-6">
//                         <ul className="menu-list">
//                           <li>
//                             <a href="deals.html">
//                               <div className="menu-details">
//                                 <span className="menu-list-icon bg-info">
//                                   <i className="ti ti-medal"></i>
//                                 </span>
//                                 <div className="menu-details-content">
//                                   <p>Deals</p>
//                                   <span>Add New Deals</span>
//                                 </div>
//                               </div>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="leads.html">
//                               <div className="menu-details">
//                                 <span className="menu-list-icon bg-secondary">
//                                   <i className="ti ti-chart-arcs"></i>
//                                 </span>
//                                 <div className="menu-details-content">
//                                   <p>Leads</p>
//                                   <span>Add New Leads</span>
//                                 </div>
//                               </div>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="companies.html">
//                               <div className="menu-details">
//                                 <span className="menu-list-icon bg-tertiary">
//                                   <i className="ti ti-building-community"></i>
//                                 </span>
//                                 <div className="menu-details-content">
//                                   <p>Company</p>
//                                   <span>Add New Company</span>
//                                 </div>
//                               </div>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="tasks.html">
//                               <div className="menu-details">
//                                 <span className="menu-list-icon bg-success">
//                                   <i className="ti ti-list-check"></i>
//                                 </span>
//                                 <div className="menu-details-content">
//                                   <p>Tasks</p>
//                                   <span>Add New Task</span>
//                                 </div>
//                               </div>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="campaign.html">
//                               <div className="menu-details">
//                                 <span className="menu-list-icon bg-purple">
//                                   <i className="ti ti-brand-campaignmonitor"></i>
//                                 </span>
//                                 <div className="menu-details-content">
//                                   <p>Campaign</p>
//                                   <span>Add New Campaign</span>
//                                 </div>
//                               </div>
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//                 <li className="nav-item">
//                   <a href="faq.html" className="btn btn-help">
//                     <i className="ti ti-help-hexagon"></i>
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="lead-reports.html" className="btn btn-chart-pie">
//                     <i className="ti ti-chart-pie"></i>
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             {/* <!-- /Nav List --> */}

//             {/* <!-- Chat --> */}
//             <li className="nav-item nav-item-email nav-item-box">
//               <a href="chat.html">
//                 <i className="ti ti-message-circle-exclamation"></i>
//                 <span className="badge rounded-pill">14</span>
//               </a>
//             </li>
//             {/* <!-- /Chat --> */}

//             {/* <!-- Notifications --> */}
//             <li className="nav-item dropdown nav-item-box">
//               <a
//                 href="javascript:void(0);"
//                 className="nav-link"
//                 data-bs-toggle="dropdown"
//               >
//                 <i className="ti ti-bell"></i>
//                 <span className="badge rounded-pill">13</span>
//               </a>
//               <div className="dropdown-menu dropdown-menu-end notification-dropdown">
//                 <div className="topnav-dropdown-header">
//                   <h4 className="notification-title">Notifications</h4>
//                 </div>
//                 <div className="noti-content">
//                   <ul className="notification-list">
//                     <li className="notification-message">
//                       <a href="activities.html">
//                         <div className="media d-flex">
//                           <span className="avatar flex-shrink-0">
//                             <img
//                               src="assets/img/profiles/avatar-02.jpg"
//                               alt="Profile"
//                             />
//                             <span className="badge badge-info rounded-pill"></span>
//                           </span>
//                           <div className="media-body flex-grow-1">
//                             <p className="noti-details">
//                               Ray Arnold left 6 comments on Isla Nublar SOC2
//                               compliance report
//                             </p>
//                             <p className="noti-time">Last Wednesday at 9:42 am</p>
//                           </div>
//                         </div>
//                       </a>
//                     </li>
//                     <li className="notification-message">
//                       <a href="activities.html">
//                         <div className="media d-flex">
//                           <span className="avatar flex-shrink-0">
//                             <img
//                               src="assets/img/profiles/avatar-03.jpg"
//                               alt="Profile"
//                             />
//                           </span>
//                           <div className="media-body flex-grow-1">
//                             <p className="noti-details">
//                               Denise Nedry replied to Anna Srzand
//                             </p>
//                             <p className="noti-sub-details">
//                               “Oh, I finished de-bugging the phones, but the
//                               system's compiling for eighteen minutes, or
//                               twenty. So, some minor systems may go on and off
//                               for a while.”
//                             </p>
//                             <p className="noti-time">Last Wednesday at 9:42 am</p>
//                           </div>
//                         </div>
//                       </a>
//                     </li>
//                     <li className="notification-message">
//                       <a href="activities.html">
//                         <div className="media d-flex">
//                           <span className="avatar flex-shrink-0">
//                             <img
//                               alt=""
//                               src="assets/img/profiles/avatar-06.jpg"
//                             />
//                           </span>
//                           <div className="media-body flex-grow-1">
//                             <p className="noti-details">
//                               John Hammond attached a file to Isla Nublar SOC2
//                               compliance report
//                             </p>
//                             <div className="noti-pdf">
//                               <div className="noti-pdf-icon">
//                                 <span>
//                                   <i className="ti ti-chart-pie"></i>
//                                 </span>
//                               </div>
//                               <div className="noti-pdf-text">
//                                 <p>EY_review.pdf</p>
//                                 <span>2mb</span>
//                               </div>
//                             </div>
//                             <p className="noti-time">Last Wednesday at 9:42 am</p>
//                           </div>
//                         </div>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="topnav-dropdown-footer">
//                   <a href="activities.html" className="view-link">
//                     View all
//                   </a>
//                   <a href="javascript:void(0);" className="clear-link">
//                     Clear all
//                   </a>
//                 </div>
//               </div>
//             </li>
//             {/* <!-- /Notifications --> */}

//             {/* <!-- Profile Dropdown --> */}
//             <li className="nav-item dropdown has-arrow main-drop">
//               <a
//                 href="javascript:void(0);"
//                 className="nav-link userset"
//                 data-bs-toggle="dropdown"
//               >
//                 <span className="user-info">
//                   <span className="user-letter">
//                     <img
//                       src="/assets/img/profiles/avatar-20.jpg"
//                       alt="Profile"
//                     />
//                   </span>
//                   <span className="badge badge-success rounded-pill"></span>
//                 </span>
//               </a>
//               <div className="dropdown-menu menu-drop-user">
//                 <div className="profilename">
//                   <a className="dropdown-item" href="index.html">
//                     <i className="ti ti-layout-2"></i> Dashboard
//                   </a>
//                   <a className="dropdown-item" href="profile.html">
//                     <i className="ti ti-user-pin"></i> My Profile
//                   </a>
//                   <a className="dropdown-item" href="/login">
//                     <i className="ti ti-lock"></i> Logout
//                   </a>
//                 </div>
//               </div>
//             </li>
//             {/* <!-- /Profile Dropdown --> */}
//           </ul>
//         </div>

//         {/* <!-- Mobile Menu --> */}
//         <div className="dropdown mobile-user-menu">
//           <a
//             href="javascript:void(0);"
//             className="nav-link dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             <i className="fa fa-ellipsis-v"></i>
//           </a>
//           <div className="dropdown-menu">
//             <a className="dropdown-item" href="index.html">
//               <i className="ti ti-layout-2"></i> Dashboard
//             </a>
//             <a className="dropdown-item" href="profile.html">
//               <i className="ti ti-user-pin"></i> My Profile
//             </a>
//             <a className="dropdown-item" href="login.html">
//               <i className="ti ti-lock"></i> Logout
//             </a>
//           </div>
//         </div>
//         {/* <!-- /Mobile Menu --> */}
//       </div>
//     </div>
//   )
// }

// export default Header
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ roles, activeRole, onRoleChange }) => {
const navigate=useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token");  // Remove token
    localStorage.removeItem("roles");  // Remove roles
    localStorage.removeItem("activeRole"); // Remove active role

    navigate("/login");  // Redirect to login page
    setTimeout(() => {
      window.location.reload(); // Force UI refresh
  }, 3);
};



  return (
    <div>
      <div className="header">
        {/* <!-- Logo --> */}
        <div className="header-left active">
          <a href="/" className="logo logo-normal">
            <img src="/assets/img/cad.png" alt="Logo" />
            <img
              src="/assets/img/cad.png"
              className="white-logo"
              alt="Logo"
            />
            
          </a>
          <a href="/" className="logo-small">
            <img src="/assets/img/cad.png" alt="Logo" />
          </a>
          <a id="toggle_btn" href="javascript:void(0);">
            <i className="ti ti-arrow-bar-to-left"></i>
          </a>
        </div>
        {/* <!-- /Logo --> */}

        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>

        <div className="header-user">
          <ul className="nav user-menu">
            {/* <!-- Search --> */}
            <li className="nav-item nav-search-inputs me-auto">
              <div className="top-nav-search">
                <a href="" className="responsive-search">
                  <i className="fa fa-search"></i>
                </a>
                <form action="#" className="dropdown">
                  <div className="searchinputs" id="dropdownMenuClickable">
                    <input type="text" placeholder="Search" />
                    <div className="search-addon">
                      <button type="submit">
                       
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            {/* <!-- /Search --> */}

            {/* <!-- Horizontal Single --> */}
          
            {/* <!-- /Horizontal Single --> */}

            {/* <!-- Nav List --> */}
            <li className="nav-item nav-list">
              <ul className="nav">
                <li>
                  <div>
                    <a
                      href="#"
                      className="btn btn-icon border btn-menubar btnFullscreen"
                    >
                      <i className="ti ti-maximize"></i>
                    </a>
                  </div>
                </li>
                <li className="dark-mode-list">
                  <a
                    href="javascript:void(0);"
                    id="dark-mode-toggle"
                    className="dark-mode-toggle"
                  >
                    <i className="ti ti-sun light-mode active"></i>
                    <i className="ti ti-moon dark-mode"></i>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-header-list"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-layout-grid-add"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end menus-info">
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="menu-list">
                          <li>
                            <a href="contacts.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-violet">
                                  <i className="ti ti-user-up"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Contacts</p>
                                  <span>Add New Contact</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="pipeline.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-green">
                                  <i className="ti ti-timeline-event-exclamation"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Pipline</p>
                                  <span>Add New Pipline</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="activities.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-pink">
                                  <i className="ti ti-bounce-right"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Activities</p>
                                  <span>Add New Activity</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="analytics.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-info">
                                  <i className="ti ti-analyze"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Analytics</p>
                                  <span>Shows All Information</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="projects.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-danger">
                                  <i className="ti ti-atom-2"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Projects</p>
                                  <span>Add New Project</span>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="menu-list">
                          <li>
                            <a href="deals.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-info">
                                  <i className="ti ti-medal"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Deals</p>
                                  <span>Add New Deals</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="leads.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-secondary">
                                  <i className="ti ti-chart-arcs"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Leads</p>
                                  <span>Add New Leads</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="companies.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-tertiary">
                                  <i className="ti ti-building-community"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Company</p>
                                  <span>Add New Company</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="tasks.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-success">
                                  <i className="ti ti-list-check"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Tasks</p>
                                  <span>Add New Task</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="campaign.html">
                              <div className="menu-details">
                                <span className="menu-list-icon bg-purple">
                                  <i className="ti ti-brand-campaignmonitor"></i>
                                </span>
                                <div className="menu-details-content">
                                  <p>Campaign</p>
                                  <span>Add New Campaign</span>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="faq.html" className="btn btn-help">
                    <i className="ti ti-help-hexagon"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="lead-reports.html" className="btn btn-chart-pie">
                    <i className="ti ti-chart-pie"></i>
                  </a>
                </li>
              </ul>
            </li>
            {/* <!-- /Nav List --> */}

            {/* <!-- Chat --> */}
            <li className="nav-item nav-item-email nav-item-box">
              <a href="chat.html">
                <i className="ti ti-message-circle-exclamation"></i>
                <span className="badge rounded-pill">14</span>
              </a>
            </li>
            {/* <!-- /Chat --> */}

            {/* <!-- Notifications --> */}
            <li className="nav-item dropdown nav-item-box">
              <a
                href="javascript:void(0);"
                className="nav-link"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-bell"></i>
                <span className="badge rounded-pill">13</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end notification-dropdown">
                <div className="topnav-dropdown-header">
                  <h4 className="notification-title">Notifications</h4>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-02.jpg"
                              alt="Profile"
                            />
                            <span className="badge badge-info rounded-pill"></span>
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              Ray Arnold left 6 comments on Isla Nublar SOC2
                              compliance report
                            </p>
                            <p className="noti-time">Last Wednesday at 9:42 am</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-03.jpg"
                              alt="Profile"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              Denise Nedry replied to Anna Srzand
                            </p>
                            <p className="noti-sub-details">
                              “Oh, I finished de-bugging the phones, but the
                              system's compiling for eighteen minutes, or
                              twenty. So, some minor systems may go on and off
                              for a while.”
                            </p>
                            <p className="noti-time">Last Wednesday at 9:42 am</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              alt=""
                              src="assets/img/profiles/avatar-06.jpg"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              John Hammond attached a file to Isla Nublar SOC2
                              compliance report
                            </p>
                            <div className="noti-pdf">
                              <div className="noti-pdf-icon">
                                <span>
                                  <i className="ti ti-chart-pie"></i>
                                </span>
                              </div>
                              <div className="noti-pdf-text">
                                <p>EY_review.pdf</p>
                                <span>2mb</span>
                              </div>
                            </div>
                            <p className="noti-time">Last Wednesday at 9:42 am</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="activities.html" className="view-link">
                    View all
                  </a>
                  <a href="javascript:void(0);" className="clear-link">
                    Clear all
                  </a>
                </div>
              </div>
            </li>
            {/* <!-- /Notifications --> */}

            {/* <!-- Profile Dropdown --> */}
            <li className="nav-item dropdown has-arrow main-drop">
              <a
                href="javascript:void(0);"
                className="nav-link userset"
                data-bs-toggle="dropdown"
              >
                <span className="user-info">
                  <span className="user-letter">
                    <img
                      src="/assets/img/profiles/avatar-20.jpg"
                      alt="Profile"
                    />
                  </span>
                  <span className="badge badge-success rounded-pill"></span>
                </span>
              </a>
              <div className="dropdown-menu menu-drop-user">
                <div className="profilename">
                  <a className="dropdown-item" href="index.html">
                    <i className="ti ti-layout-2"></i> Dashboard
                  </a>
                  <a className="dropdown-item" href="profile.html">
                    <i className="ti ti-user-pin"></i> My Profile
                  </a>
                  <h5 className="dropdown-item" style={{color:'red'}}>Select Role:</h5>
            <select value={activeRole} onChange={(e) => onRoleChange(e.target.value)} className="dropdown-item">
                {roles.map((role, index) => (
                    <option key={index} value={role}>
                        {role}
                    </option>
                ))}
            </select>
                  {/* <a className="dropdown-item" href="/login">
                    <i className="ti ti-lock"></i> Logout
                  </a> */}
                  <button onClick={handleLogout} className="logout-btn">
    Logout
</button>

                </div>
              </div>
            </li>
            {/* <!-- /Profile Dropdown --> */}
          </ul>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div className="dropdown mobile-user-menu">
          <a
            href="javascript:void(0);"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v"></i>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="index.html">
              <i className="ti ti-layout-2"></i> Dashboard
            </a>
            <a className="dropdown-item" href="profile.html">
              <i className="ti ti-user-pin"></i> My Profile
            </a>

            <h5 className="dropdown-item" style={{color:'red'}}>Select Role:</h5>
            <select value={activeRole} onChange={(e) => onRoleChange(e.target.value)} className="dropdown-item">
                {roles.map((role, index) => (
                    <option key={index} value={role}>
                        {role} Default ✅
                    </option>
                ))}
            </select>
            <a className="dropdown-item" href="/login">
              <i className="ti ti-lock"></i> Logout
            </a>
          </div>
        </div>
        {/* <!-- /Mobile Menu --> */}
      </div>
    </div>
  )
}

export default Header