import React,{useState,useEffect} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const EnquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
    const [loading, setLoading] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(""); // Track selected branch
  const [branches, setBranches] = useState([]);
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/enquiry",
        data
      );
      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
  useEffect(() => {
    const fetchBranches = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8080/api/branches'); // Adjust API if needed
            setBranches(response.data);
            setLoading(false);
        } catch (err) {
           
            setLoading(false);
        }
    };

    fetchBranches();
}, []);

  return (
    <div>
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-md-12">
              <div class="page-header">
                <div class="row align-items-center ">
                  <div class="col-md-4">
                    <h3>Enquiry Form</h3>
                  </div>
                  <div class="col-md-8 float-end ms-auto">
                    <div class="d-flex title-head">
                      <div class="daterange-picker d-flex align-items-center justify-content-center">
                        <div class="head-icons mb-0">
                          <a
                            href="project-dashboard.html"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Refresh"
                          >
                            <i class="ti ti-refresh-dot"></i>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Collapse"
                            id="collapse-header"
                          >
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

          <div class="row">
            <div class="col-md-12 d-flex">
              <div class="card w-100">
                <div class="card-header border-0 pb-0"></div>
                <div class="card-body">
                  {/* <form action="#">
                               
                                            <div >		
												<div class="col-lg-12">
													<div class="row">
														<div class="col-md-6">
                                                        <label class="col-lg-3 col-form-label">Email</label>
															<div class="mb-3">
																<input type="email" placeholder="Email"
																	class="form-control"/>
															</div>
														</div>
														<div class="col-md-6">
                                                        <label class="col-lg-3 col-form-label">Name</label>
															<div class="mb-3">
																<input type="text" placeholder="Name"
																	class="form-control"/>
															</div>
														</div>
													</div>
												</div>
                                        
											</div>

                                            <div >		
												<div class="col-lg-12">
													<div class="row">
														<div class="col-md-6">
                                                        <label class="col-lg-3 col-form-label">MobileNumber</label>
															<div class="mb-3">
																<input type="number" placeholder="MobileNumber"
																	class="form-control"/>
															</div>
														</div>
														<div class="col-md-6">
                                                        <label class="col-lg-3 col-form-label">Location</label>
															<div class="mb-3">
																<input type="text" placeholder="Location"
																	class="form-control"/>
															</div>
														</div>
													</div>
												</div>
											</div>
                                             
                                            <div >		
												<div class="col-lg-12">
													<div class="row">
														<div class="col-md-6">
                                                        <label class="col-lg-3 col-form-label">Qualification
                                                        </label>
															<div class="mb-3">
                                                            <select class="select">
																	<option>Choose</option>
																	<option value="1">Mechanical Engineering</option>
																	<option value="2">Civil Engineering</option>
																	<option value="3">Electrical Engineering</option>
																	<option value="4">Arichitecture & Interior</option>
                                                                    <option value="5">Others</option>
																</select>
															</div>
														</div>
														<div class="col-md-6">
                                                        <label class="col-form-label">Course Type</label>
															<div class="mb-3">
                                                            <select class="select">
																	<option>Choose</option>
																	<option value="1">Mechanical CAD</option>
																	<option value="2">Civil CAD</option>
																	<option value="3">Electrical CAD</option>
																	<option value="4">Arichitecture CAD</option>
                                                                    <option value="4">Interior Designing</option>
                                                                    <option value="5">BIM</option>
																</select>
															</div>
														</div>
													</div>
												</div>
											</div>

                                            <div >		
												<div class="col-lg-12">
													<div class="row">
														<div class="col-md-6">
                                                        <label class=" col-form-label">Year Of Passout</label>
															<div class="mb-3">
																<input type="number" placeholder="YearOfPassout"
																	class="form-control"/>
															</div>
														</div>
														<div class="col-md-6">
                                                        <label class="col-form-label">Intrested Courses</label>
															<div class="mb-3">
																<input type="text" placeholder="Intrested Courses"
																	class="form-control"/>
															</div>
														</div>
													</div>
												</div>
											</div>

                                            <div >		
												<div class="col-lg-12">
													<div class="row">
														<div class="col-md-6">
                                                        <label class="col-lg-3 col-form-label">College Name
                                                        </label>
															<div class="mb-3">
                                                            <input type="text" placeholder="College Name"
																	class="form-control"/>
															</div>
														</div>
														<div class="col-md-6">
                                                        <label class="col-form-label">How Did You Came To Know About CADDESK</label>
															<div class="mb-3">
                                                            <select class="select">
																	<option>Select</option>
																	<option value="1">Google</option>
																	<option value="2">Presentations</option>
																	<option value="3">Friends</option>
																	<option value="4">Tv/Banners</option>
                                                                    <option value="4">Exhibition</option>
                                                                    <option value="5">Reference</option>
                                                                    <option value="5">Social Media</option>
                                                                    <option value="5">Others</option>
																</select>
															</div>
														</div>
													</div>
												</div>
											</div>

                                            <div >		
												<div class="col-lg-12">
													<div class="row">
														<div class="col-md-6">
                                                        <label class=" col-form-label">If Reference Mention The Name...

                                                        </label>
															<div class="mb-3">
                                                            <input type="text" placeholder="If Reference Mention The Name...
"
																	class="form-control"/>
															</div>
														</div>
														<div class="col-md-6">
                                                        <label class="col-form-label">When you are planning to join courses</label>
															<div class="mb-3">
                                                            <select class="select">
																	<option>Choose</option>
																	<option value="1">With in a Day</option>
																	<option value="2">With in 3 Day</option>
                                                                    <option value="3">With in a week</option>
                                                                    <option value="4">With in 15days</option>
                                                                    <option value="5">With in a month</option>
																</select>
															</div>
														</div>
													</div>
												</div>
											</div>

                                            <div class="text-end col-lg-9">
										<button type="submit" class="btn btn-primary">Submit</button>
									</div>
                                    </form> */}

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-lg-12">
                      <div className="row">
                

                        <div className="col-md-6">
                          <label className="col-lg-3 col-form-label">
                            First Name
                          </label>
                          <div className="mb-3">
                            <input
                              type="text"
                              placeholder="Name"
                              className="form-control"
                              {...register("firstname", {
                                required: "Name is required",
                              })}
                            />
                            {errors.name && <span>{errors.name.message}</span>}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="col-lg-3 col-form-label">
                           Last Name
                          </label>
                          <div className="mb-3">
                            <input
                              type="text"
                              placeholder="Name"
                              className="form-control"
                              {...register("lastname", {
                                required: "Name is required",
                              })}
                            />
                            {errors.name && <span>{errors.name.message}</span>}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="col-lg-3 col-form-label">
                            Email
                          </label>
                          <div className="mb-3">
                            <input
                              type="email"
                              placeholder="Email"
                              className="form-control"
                              {...register("email", {
                                required: "Email is required",
                              })}
                            />
                            {errors.email && (
                              <span>{errors.email.message}</span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                        <label>Branch:</label>
            <select  className="form-control"
                              {...register("branchId", {
                                required: "Choose",
                              })}>
                <option value="">Select a Branch</option>
                {branches.map((branch) => (
                    <option key={branch._id} value={branch.branchId}>
                        {branch.location}
                    </option>
                ))}
                </select>
                         
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-md-6">
                          <label className="col-lg-3 col-form-label">
                            Mobile Number
                          </label>
                          <div className="mb-3">
                            <input
                              type="number"
                              placeholder="Mobile Number"
                              className="form-control"
                              {...register("mobileNumber", {
                                required: "Mobile number is required",
                              })}
                            />
                            {errors.mobileNumber && (
                              <span>{errors.mobileNumber.message}</span>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label className="col-lg-3 col-form-label">
                            Location
                          </label>
                          <div className="mb-3">
                            <input
                              type="text"
                              placeholder="Location"
                              className="form-control"
                              {...register("location", {
                                required: "Location is required",
                              })}
                            />
                            {errors.location && (
                              <span>{errors.location.message}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="row">
                        {/* Qualification Dropdown */}
                        <div className="col-md-6">
                          <label className="col-lg-3 col-form-label">
                            Qualification
                          </label>
                          <div className="mb-3">
                            <select
                              className="form-control"
                              {...register("qualification", {
                                required: "Choose",
                              })}
                            >
                              <option value="">Choose</option>
                              <option value="MechanicalEngineering">
                                Mechanical Engineering
                              </option>
                              <option value="CivilEngineering">
                                Civil Engineering
                              </option>
                              <option value="ElectricalEngineering">
                                Electrical Engineering
                              </option>
                              <option value="Arichitecture& Interior">
                                Arichitecture & Interior
                              </option>
                              <option value="Other">Other</option>
                            </select>
                            {errors.qualification && (
                              <span>{errors.qualification.message}</span>
                            )}
                          </div>
                        </div>

                        {/* Course Type Dropdown */}
                        <div className="col-md-6">
                          <label className="col-lg-3 col-form-label">
                            Course Type
                          </label>
                          <div className="mb-3">
                            <select
                              className="form-control"
                              {...register("courseType", {
                                required: "Choose",
                              })}
                            >
                              <option value="">Choose</option>
                              <option value="MechanicalCAD">
                                Mechanical CAD
                              </option>
                              <option value="CivilCAD">Civil CAD</option>
                              <option value="ElectricalCAD">
                                Electrical CAD
                              </option>
                              <option value="ArichitectureCAD">
                                Arichitecture CAD
                              </option>
                              <option value="InteriorDesigning">
                                Interior Designing
                              </option>
                              <option value="BIM">BIM</option>
                            </select>
                            {errors.courseType && (
                              <span>{errors.courseType.message}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="row">
                        {/* Year of Passout */}
                        <div className="col-md-6">
                          <label className="col-lg-3 col-form-label">
                            Year of Passout
                          </label>
                          <div className="mb-3">
                            <input
                              type="number"
                              placeholder="Year of Passout"
                              className="form-control"
                              {...register("yearOfPassout", {
                                required: "Year of Passout is required",
                              })}
                            />
                            {errors.yearOfPassout && (
                              <span>{errors.yearOfPassout.message}</span>
                            )}
                          </div>
                        </div>

                        {/* Interested Courses */}
                        <div className="col-md-6">
                          <label className="col-form-label">
                            Interested Courses
                          </label>
                          <div className="mb-3">
                            <input
                              type="text"
                              placeholder="Interested Courses"
                              className="form-control"
                              {...register("interestedCourses", {
                                required: "Enter interested courses",
                              })}
                            />
                            {errors.interestedCourses && (
                              <span>{errors.interestedCourses.message}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-md-6">
                          <label className="col-lg-3 col-form-label">
                            College Name
                          </label>
                          <div className="mb-3">
                            <input
                              type="text"
                              placeholder="College Name"
                              className="form-control"
                              {...register("CollegeName", {
                                required: "College Name is required",
                              })}
                            />
                            {errors.CollegeName && (
                              <span>{errors.CollegeName.message}</span>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label className="col-form-label">
                            How Did You Came To Know About CADDESK...
                          </label>
                          <div className="mb-3">
                            <select
                              className="form-control"
                              {...register("referralSource", {
                                required: "Choose",
                              })}
                            >
                              <option value="">Choose</option>
                              <option value="MechanicalEngineering">
                                Google
                              </option>
                              <option value="CivilEngineering">
                                TV/Banner
                              </option>
                              <option value="ElectricalEngineering">
                                Presentations
                              </option>
                              <option value="Arichitecture& Interior">
                                Friend
                              </option>

                              <option value="CivilEngineering">
                                Exhibition
                              </option>
                              <option value="ElectricalEngineering">
                                Reference
                              </option>
                              <option value="Arichitecture& Interior">
                                Social Media
                              </option>
                              <option value="Other">Other</option>
                            </select>
                            {errors.HowDidYouCameToKnowAboutCADDESK && (
                              <span>
                                {errors.HowDidYouCameToKnowAboutCADDESK.message}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-md-6">
                          <label className="col-form-label">
                            If Reference Mention The Name...
                          </label>
                          <div className="mb-3">
                            <input
                              type="text"
                              placeholder="If Reference Mention The Name...
"
                              className="form-control"
                              {...register("ReferenceneName", {
                                required: "If Reference Mention The Name...",
                              })}
                            />
                            {errors.IfReferenceMentionTheName && (
                              <span>
                                {errors.IfReferenceMentionTheName.message}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label className="col-form-label">
                            When you are planning to join courses
                          </label>
                          <div className="mb-3">
                            <select
                              className="form-control"
                              {...register("joiningPlan", {
                                required: "Choose",
                              })}
                            >
                              <option value="">Choose</option>
                              <option value="MechanicalEngineering">
                                with a day
                              </option>
                              <option value="CivilEngineering">
                                with in 3 days
                              </option>
                              <option value="ElectricalEngineering">
                                with in a week
                              </option>
                              <option value="Arichitecture& Interior">
                                with in a 15days
                              </option>
                              <option value="CivilEngineering">
                                with in a month
                              </option>
                            </select>
                            {errors.Whenyouareplanningtojoincourses && (
                              <span>
                                {errors.Whenyouareplanningtojoincourses.message}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-end col-lg-12">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
