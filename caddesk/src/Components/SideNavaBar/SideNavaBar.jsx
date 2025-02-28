import React from 'react'

const SideNavaBar = () => {
  return (
    <div>
        {/* <!-- Sidebar --> */}
        <div className="sidebar" id="sidebar">
            <div className="modern-profile p-3 pb-0">

                <div className="sidebar-nav mb-3">
                    <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified bg-transparent" role="tablist">
                        <li className="nav-item"><a className="nav-link active border-0" href="#">Menu</a></li>
                        <li className="nav-item"><a className="nav-link border-0" href="chat.html">Chats</a></li>
                        <li className="nav-item"><a className="nav-link border-0" href="email.html">Inbox</a></li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-header p-3 pb-0 pt-2">

                <div className="d-flex align-items-center justify-content-between menu-item mb-3">
                    <div className="me-3">
                        <a href="calendar.html" className="btn btn-icon border btn-menubar">
							<i className="ti ti-layout-grid-remove"></i>
						</a>
                    </div>
                    <div className="me-3">
                        <a href="chat.html" className="btn btn-icon border btn-menubar position-relative">
							<i className="ti ti-brand-hipchat"></i>
						</a>
                    </div>
                    <div className="me-3 notification-item">
                        <a href="activities.html" className="btn btn-icon border btn-menubar position-relative me-1">
							<i className="ti ti-bell"></i>
							<span className="notification-status-dot"></span>
						</a>
                    </div>
                    <div className="me-0">
                        <a href="email.html" className="btn btn-icon border btn-menubar">
							<i className="ti ti-message"></i>
						</a>
                    </div>
                </div>
            </div>
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="clinicdropdown">
                            <a href="profile.html">
								<img src="./src/assets/assets/img/profiles/avatar-14.jpg" className="img-fluid" alt="Profile"/>
								<div className="user-names">
									<h5>Adrian Davies</h5>
									<h6>Tech Lead</h6>
								</div>
							</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h6 className="submenu-hdr">Main Menu</h6>
                            <ul>
                                <li className="submenu">
                                    <a href="javascript:void(0);" className="subdrop active">
                                   
										<i className="ti ti-layout-2"></i><span>Dashboard</span>
                                        {/* <span className="menu-arrow"></span> */}
									</a>
                                    {/* <ul>
                                        <li><a href="index.html" className="active">Deals Dashboard</a></li>
                                        <li><a href="leads-dashboard.html">Leads Dashboard</a></li>
                                        <li><a href="project-dashboard.html">Project Dashboard</a></li>
                                    </ul> */}
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);"><i className="ti ti-brand-airtable"></i><span>FacultyManagemnet</span><span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="/AddFaculty">AddFaculty</a></li>
                                        {/* <li className="submenu submenu-two">
                                            <a href="javascript:void(0);">Call<span className="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><a href="video-call.html">Video Call</a></li>
                                                <li><a href="audio-call.html">Audio Call</a></li>
                                                <li><a href="call-history.html">Call History</a></li>
                                            </ul>
                                        </li> */}
                                        <li><a href="/AttendanceTracker">AttendanceTracker</a></li>
                                        <li><a href="/FacultyList">FacultyList</a></li>
                                        <li><a href="/LeaveRequests">LeaveRequests</a></li>
                                        <li><a href="/LeaveRequestForm">LeaveRequestForm</a></li>
                                        <li><a href="/WorkloadDistribution">WorkloadDistribution</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#">
										<i className="ti ti-user-star"></i><span>Super Admin</span>
										<span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="dashboard.html">Dashboard</a></li>
                                        <li><a href="company.html">Companies</a></li>
                                        <li><a href="subscription.html">Subscriptions</a></li>
                                        <li><a href="packages.html">Packages</a></li>
                                        <li><a href="domain.html">Domain</a></li>
                                        <li><a href="purchase-transaction.html">Purchase Transaction</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="submenu-hdr">Layout</h6>
                            <ul>
                                <li>
                                    <a href="layout-mini.html">
										<i className="ti ti-layout-navbar"></i><span>Mini</span>
									</a>
                                </li>
                                <li>
                                    <a href="layout-horizontal-single.html">
										<i className="ti ti-layout-navbar-inactive"></i><span>Horizontal Single</span>
									</a>
                                </li>
                                <li>
                                    <a href="layout-without-header.html">
										<i className="ti ti-layout-sidebar"></i><span>Without Header</span>
									</a>
                                </li>
                                <li>
                                    <a href="layout-rtl.html">
										<i className="ti ti-text-direction-rtl"></i><span>RTL</span>
									</a>
                                </li>
                                <li>
                                    <a href="layout-detached.html">
										<i className="ti ti-details"></i><span>Detached</span>
									</a>
                                </li>
                                <li>
                                    <a href="layout-dark.html">
										<i className="ti ti-details"></i><span>Dark</span>
									</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="submenu-hdr">CRM</h6>
                            <ul>
                                <li>
                                    <a href="contacts.html"><i className="ti ti-user-up"></i><span>Contacts</span></a>
                                </li>
                                <li>
                                    <a href="companies.html"><i className="ti ti-building-community"></i><span>Companies</span></a>
                                </li>
                                <li>
                                    <a href="deals.html"><i className="ti ti-medal"></i><span>Deals</span></a>
                                </li>
                                <li>
                                    <a href="leads.html"><i className="ti ti-chart-arcs"></i><span>Leads</span></a>
                                </li>
                                <li>
                                    <a href="pipeline.html"><i className="ti ti-timeline-event-exclamation"></i><span>Pipeline</span></a>
                                </li>
                                <li>
                                    <a href="campaign.html"><i className="ti ti-brand-campaignmonitor"></i><span>Campaign</span></a>
                                </li>
                                <li>
                                    <a href="projects.html"><i className="ti ti-atom-2"></i><span>Projects</span></a>
                                </li>
                                <li>
                                    <a href="tasks.html"><i className="ti ti-list-check"></i><span>Tasks</span></a>
                                </li>
                                <li>
                                    <a href="proposals.html"><i className="ti ti-file-star"></i><span>Proposals</span></a>
                                </li>
                                <li>
                                    <a href="contracts.html"><i className="ti ti-file-check"></i><span>Contracts</span></a>
                                </li>
                                <li>
                                    <a href="estimations.html"><i className="ti ti-file-report"></i><span>Estimations</span></a>
                                </li>
                                <li>
                                    <a href="invoices.html"><i className="ti ti-file-invoice"></i><span>Invoices</span></a>
                                </li>
                                <li>
                                    <a href="payments.html"><i className="ti ti-report-money"></i><span>Payments</span></a>
                                </li>
                                <li>
                                    <a href="analytics.html"><i className="ti ti-chart-bar"></i><span>Analytics</span></a>
                                </li>
                                <li>
                                    <a href="activities.html"><i className="ti ti-bounce-right"></i><span>Activities</span></a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="submenu-hdr">Reports</h6>
                            <ul>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-file-invoice"></i><span>Reports</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="lead-reports.html">Lead Reports</a></li>
                                        <li><a href="deal-reports.html">Deal Reports</a></li>
                                        <li><a href="contact-reports.html">Contact Reports</a></li>
                                        <li><a href="company-reports.html">Company Reports</a></li>
                                        <li><a href="project-reports.html">Project Reports</a></li>
                                        <li><a href="task-reports.html">Task Reports</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="submenu-hdr">CRM Settings</h6>
                            <ul>
                                <li><a href="sources.html"><i className="ti ti-artboard"></i><span>Sources</span></a></li>
                                <li><a href="lost-reason.html"><i className="ti ti-message-exclamation"></i><span>Lost Reason</span></a></li>
                                <li><a href="contact-stage.html"><i className="ti ti-steam"></i><span>Contact Stage</span></a></li>
                                <li><a href="industry.html"><i className="ti ti-building-factory"></i><span>Industry</span></a></li>
                                <li><a href="calls.html"><i className="ti ti-phone-check"></i><span>Calls</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="submenu-hdr">User Management</h6>
                            <ul>
                                <li><a href="manage-users.html"><i className="ti ti-users"></i><span>Manage Users</span></a></li>
                                <li><a href="roles-permissions.html"><i className="ti ti-navigation-cog"></i><span>Roles & Permissions</span></a></li>
                                <li><a href="delete-request.html"><i className="ti ti-flag-question"></i><span>Delete Request</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="submenu-hdr">Membership</h6>
                            <ul>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-file-invoice"></i><span>Membership</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="membership-plans.html">Membership Plans</a></li>
                                        <li><a href="membership-addons.html">Membership Addons</a></li>
                                        <li><a href="membership-transactions.html">Transactions</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="submenu-hdr">Content</h6>
                            <ul>
                                <li><a href="pages.html"><i className="ti ti-page-break"></i><span>Pages</span></a></li>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-map-pin-pin"></i><span>Location</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="countries.html">Countries</a></li>
                                        <li><a href="states.html">States</a></li>
                                        <li><a href="cities.html">Cities</a></li>
                                    </ul>
                                </li>
                                <li><a href="testimonials.html"><i className="ti ti-quote"></i><span>Testimonials</span></a></li>
                                <li><a href="faq.html"><i className="ti ti-question-mark"></i><span>FAQ</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="submenu-hdr">Support</h6>
                            <ul>
                                <li><a href="contact-messages.html"><i className="ti ti-page-break"></i><span>Contact Messages</span></a></li>
                                <li><a href="tickets.html"><i className="ti ti-ticket"></i><span>Tickets</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="submenu-hdr">Settings</h6>
                            <ul>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-settings-cog"></i><span>General Settings</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="profile.html">Profile</a></li>
                                        <li><a href="security.html">Security</a></li>
                                        <li><a href="notifications.html">Notifications</a></li>
                                        <li><a href="connected-apps.html">Connected Apps</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-world-cog"></i><span>Website Settings</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="company-settings.html">Company Settings</a></li>
                                        <li><a href="localization.html">Localization</a></li>
                                        <li><a href="prefixes.html">Prefixes</a></li>
                                        <li><a href="preference.html">Preference</a></li>
                                        <li><a href="appearance.html">Appearance</a></li>
                                        <li><a href="language.html">Language</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-apps"></i><span>App Settings</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="invoice-settings.html">Invoice Settings</a></li>
                                        <li><a href="printers.html">Printers</a></li>
                                        <li><a href="custom-fields.html">Custom Fields</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-device-laptop"></i><span>System Settings</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="email-settings.html">Email Settings</a></li>
                                        <li><a href="sms-gateways.html">SMS Gateways</a></li>
                                        <li><a href="gdpr-cookies.html">GDPR Cookies</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-moneybag"></i><span>Financial Settings</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="payment-gateways.html">Payment Gateways</a></li>
                                        <li><a href="bank-accounts.html">Bank Accounts</a></li>
                                        <li><a href="tax-rates.html">Tax Rates</a></li>
                                        <li><a href="currencies.html">Currencies</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-flag-cog"></i><span>Other Settings</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="storage.html">Storage</a></li>
                                        <li><a href="ban-ip-address.html">Ban IP Address</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="submenu-hdr">Pages</h6>
                            <ul>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-lock-square-rounded"></i><span>Authentication</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="register.html">Register</a></li>
                                        <li><a href="forgot-password.html">Forgot Password</a></li>
                                        <li><a href="reset-password.html">Reset Password</a></li>
                                        <li><a href="email-verification.html">Email Verification</a></li>
                                        <li><a href="two-step-verification.html">2 Step Verification</a></li>
                                        <li><a href="lock-screen.html">Lock Screen</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-error-404"></i><span>Error Pages</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="error-404.html">404 Error</a></li>
                                        <li><a href="error-500.html">500 Error</a></li>
                                    </ul>
                                </li>
                                <li><a href="blank-page.html"><i className="ti ti-apps"></i><span>Blank Page</span></a></li>
                                <li><a href="coming-soon.html"><i className="ti ti-device-laptop"></i><span>Coming Soon</span></a></li>
                                <li><a href="under-maintenance.html"><i className="ti ti-moneybag"></i><span>Under Maintenance</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="submenu-hdr">UI Interface</h6>
                            <ul>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-adjustments-check"></i><span>Base UI</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="ui-alerts.html">Alerts</a></li>
                                        <li><a href="ui-accordion.html">Accordion</a></li>
                                        <li><a href="ui-avatar.html">Avatar</a></li>
                                        <li><a href="ui-badges.html">Badges</a></li>
                                        <li><a href="ui-borders.html">Border</a></li>
                                        <li><a href="ui-buttons.html">Buttons</a></li>
                                        <li><a href="ui-buttons-group.html">Button Group</a></li>
                                        <li><a href="ui-breadcrumb.html">Breadcrumb</a></li>
                                        <li><a href="ui-cards.html">Card</a></li>
                                        <li><a href="ui-carousel.html">Carousel</a></li>
                                        <li><a href="ui-colors.html">Colors</a></li>
                                        <li><a href="ui-dropdowns.html">Dropdowns</a></li>
                                        <li><a href="ui-grid.html">Grid</a></li>
                                        <li><a href="ui-images.html">Images</a></li>
                                        <li><a href="ui-lightbox.html">Lightbox</a></li>
                                        <li><a href="ui-media.html">Media</a></li>
                                        <li><a href="ui-modals.html">Modals</a></li>
                                        <li><a href="ui-offcanvas.html">Offcanvas</a></li>
                                        <li><a href="ui-pagination.html">Pagination</a></li>
                                        <li><a href="ui-popovers.html">Popovers</a></li>
                                        <li><a href="ui-progress.html">Progress</a></li>
                                        <li><a href="ui-placeholders.html">Placeholders</a></li>
                                        <li><a href="ui-rangeslider.html">Range Slider</a></li>
                                        <li><a href="ui-spinner.html">Spinner</a></li>
                                        <li><a href="ui-sweetalerts.html">Sweet Alerts</a></li>
                                        <li><a href="ui-nav-tabs.html">Tabs</a></li>
                                        <li><a href="ui-toasts.html">Toasts</a></li>
                                        <li><a href="ui-tooltips.html">Tooltips</a></li>
                                        <li><a href="ui-typography.html">Typography</a></li>
                                        <li><a href="ui-video.html">Video</a></li>
                                        <li><a href="ui-sortable.html">Sortable</a></li>
                                        <li><a href="ui-swiperjs.html">Swiperjs</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-box-align-bottom"></i><span>Advanced UI</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="ui-ribbon.html">Ribbon</a></li>
                                        <li><a href="ui-clipboard.html">Clipboard</a></li>
                                        <li><a href="ui-drag-drop.html">Drag & Drop</a></li>
                                        <li><a href="ui-rangeslider.html">Range Slider</a></li>
                                        <li><a href="ui-rating.html">Rating</a></li>
                                        <li><a href="ui-text-editor.html">Text Editor</a></li>
                                        <li><a href="ui-counter.html">Counter</a></li>
                                        <li><a href="ui-scrollbar.html">Scrollbar</a></li>
                                        <li><a href="ui-stickynote.html">Sticky Note</a></li>
                                        <li><a href="ui-timeline.html">Timeline</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);"><i className="ti ti-chart-donut-2"></i>
										<span>Charts</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="chart-apex.html">Apex Charts</a></li>
                                        <li><a href="chart-c3.html">Chart C3</a></li>
                                        <li><a href="chart-js.html">Chart Js</a></li>
                                        <li><a href="chart-morris.html">Morris Charts</a></li>
                                        <li><a href="chart-flot.html">Flot Charts</a></li>
                                        <li><a href="chart-peity.html">Peity Charts</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);"><i className="ti ti-icons"></i>
										<span>Icons</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                                        <li><a href="icon-feather.html">Feather Icons</a></li>
                                        <li><a href="icon-ionic.html">Ionic Icons</a></li>
                                        <li><a href="icon-material.html">Material Icons</a></li>
                                        <li><a href="icon-pe7.html">Pe7 Icons</a></li>
                                        <li><a href="icon-simpleline.html">Simpleline Icons</a></li>
                                        <li><a href="icon-themify.html">Themify Icons</a></li>
                                        <li><a href="icon-weather.html">Weather Icons</a></li>
                                        <li><a href="icon-typicon.html">Typicon Icons</a></li>
                                        <li><a href="icon-flag.html">Flag Icons</a></li>
                                        <li><a href="icon-tabler.html">Tabler Icons</a></li>
                                        <li><a href="icon-bootstrap.html">Bootstrap Icons</a></li>
                                        <li><a href="icon-remix.html">Remix Icons</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);">
										<i className="ti ti-forms"></i><span>Forms</span><span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li className="submenu submenu-two">
                                            <a href="javascript:void(0);">Form Elements<span className="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><a href="form-basic-inputs.html">Basic Inputs</a></li>
                                                <li><a href="form-checkbox-radios.html">Checkbox & Radios</a></li>
                                                <li><a href="form-input-groups.html">Input Groups</a></li>
                                                <li><a href="form-grid-gutters.html">Grid & Gutters</a></li>
                                                <li><a href="form-select.html">Form Select</a></li>
                                                <li><a href="form-mask.html">Input Masks</a></li>
                                                <li><a href="form-fileupload.html">File Uploads</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu submenu-two">
                                            <a href="javascript:void(0);">Layouts<span className="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><a href="form-horizontal.html">Horizontal Form</a></li>
                                                <li><a href="form-vertical.html">Vertical Form</a></li>
                                                <li><a href="form-floating-labels.html">Floating Labels</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="form-validation.html">Form Validation</a></li>
                                        <li><a href="form-select2.html">Select2</a></li>
                                        <li><a href="form-wizard.html">Form Wizard</a></li>
                                        <li><a href="form-pickers.html">Form Picker</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);"><i className="ti ti-table"></i><span>Tables</span><span
											className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="tables-basic.html">Basic Tables </a></li>
                                        <li><a href="data-tables.html">Data Table </a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="javascript:void(0);"><i className="ti ti-map"></i><span>Maps</span>
										<span className="menu-arrow"></span>
									</a>
                                    <ul>
                                        <li>
                                            <a href="maps-vector.html">Vector</a>
                                        </li>
                                        <li>
                                            <a href="maps-leaflet.html">Leaflet</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="submenu-hdr">Help</h6>
                            <ul>
                                <li><a href="javascript:void(0);"><i className="ti ti-file-type-doc"></i><span>Documentation</span></a></li>
                                <li><a href="javascript:void(0);"><i className="ti ti-arrow-capsule"></i><span>Changelog v2.2.2</span></a></li>
                                <li className="submenu">
                                    <a href="javascript:void(0);"><i className="ti ti-brand-databricks"></i><span>Multi Level</span><span className="menu-arrow"></span></a>
                                    <ul>
                                        <li><a href="javascript:void(0);">Level 1.1</a></li>
                                        <li className="submenu submenu-two"><a href="javascript:void(0);">Level 1.2<span className="menu-arrow inside-submenu"></span></a>
                                            <ul>
                                                <li><a href="javascript:void(0);">Level 2.1</a></li>
                                                <li className="submenu submenu-two submenu-three"><a href="javascript:void(0);">Level 2.2<span className="menu-arrow inside-submenu inside-submenu-two"></span></a>
                                                    <ul>
                                                        <li><a href="javascript:void(0);">Level 3.1</a></li>
                                                        <li><a href="javascript:void(0);">Level 3.2</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- /Sidebar --> */}
    </div>
  )
}

export default SideNavaBar
