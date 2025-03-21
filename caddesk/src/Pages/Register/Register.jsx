// import React, { useState } from "react";
// import axios from "axios";
// import "./Register.css"; // Import the CSS file

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url =  "/login";
//     const data = { email, password };

//     try {
//       const res = await axios.post(url, data);
//       setMessage(res.data.msg || "Login successful");
//     } catch (err) {
//       setMessage(err.response?.data?.msg || "An error occurred");
//     }
//   };

//   return (
//     <>
//       {/* <div className="container">
//         <div className="form-box">
//           <h2>{isRegister ? "Register" : "Login"}</h2>
//           <form onSubmit={handleSubmit}>
//             {isRegister && (
//               <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
//             )}
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//             {isRegister && (
//               <select value={role} onChange={(e) => setRole(e.target.value)}>
//                 <option value="student">Student</option>
//                 <option value="faculty">Faculty</option>
//                 <option value="admin">Admin</option>
//               </select>
//             )}
//             <button type="submit">{isRegister ? "Register" : "Login"}</button>
//           </form> 
//           {message && <p className="message">{message}</p>}
//           <button className="toggle-btn" onClick={() => setIsRegister(!isRegister)}>
//             {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
//           </button>
//         </div>
//       </div> */}
//       <div class="main-wrapper">
//         <div class="account-content">
//           <div class="d-flex flex-wrap w-100 vh-100 overflow-hidden account-bg-01">
//             <div
//               class="d-flex align-items-center justify-content-center flex-wrap vh-100 overflow-auto p-4 w-50 bg-backdrop">
//               <form onSubmit={handleSubmit} class="flex-fill">
//                 <div class="mx-auto mw-450">
//                   <div class="text-center mb-4">
//                     <img src="/assets/img/cad2.png" class="img-fluid loginimg" alt="Logo" />
//                   </div>
//                   <div class="mb-4">
//                     <h4 class="mb-2 fs-20">Sign In</h4>
//                     <p>Access the CRMS panel using your email and passcode.</p>
//                   </div>
//                   <div class="mb-3">
//                     <label class="col-form-label">Email Address</label>
//                     <div class="position-relative">
//                       <span class="input-icon-addon">
//                         <i class="ti ti-mail"></i>
//                       </span>
//                       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required class="form-control" />
//                     </div>
//                   </div>
//                   <div className="mb-3">
//                     <label className="col-form-label">Password</label>
//                     <div className="pass-group">
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password"
//                         required
//                         className="pass-input form-control"
//                       />
//                       <span
//                         className={`toggle-password ti ${showPassword ? "ti-eye" : "ti-eye-off"}`}
//                         onClick={() => setShowPassword(!showPassword)}
//                         style={{ cursor: "pointer" }}
//                       ></span>
//                     </div>
//                   </div>

//                   <div class="mb-3">
//                     <button type="submit" class="btn btn-primary w-100">Sign In</button>
//                   </div>



//                   <div class="text-center">
//                     <p class="fw-medium text-gray">Copyright &copy; 2024 - CRMS</p>
//                   </div>
//                 </div>
//               </form>
             
//             </div>
//             <div className="loginbg"></div>
//           </div>
//         </div>

//       </div>


//     </>
//   );
// };

// export default Register;



import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; // Import the CSS file
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url =  "http://localhost:8080/login";
//     const data = { email, password };

//     try {
//       const res = await axios.post(url, data);
//       setMessage(res.data.msg || "Login successful");
// navigate('/')
//     } catch (err) {
//       setMessage(err.response?.data?.msg || "An error occurred");
//     }
//   };
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const url = "http://localhost:8080/login";
//   const data = { email, password };

//   try {
//     const res = await axios.post(url, data);
    
//     // Extract token and role from the response
//     const { token, role } = res.data;

//     // Save token and role in localStorage
//     localStorage.setItem("token", token);
//     localStorage.setItem("role", role);

//     setMessage("Login successful");
    
//     // Navigate based on role (Optional)
//     if (role === "Admin") {
//       navigate("/admin-dashboard");
//     } else {
//       navigate("/");
//     }
//   } catch (err) {
//     setMessage(err.response?.data?.msg || "An error occurred");
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();
  const url = "http://localhost:8080/login";
  const data = { email, password };

  try {
    const res = await axios.post(url, data);
    
    // Extract token and roles (as an array) from response
    const { token, roles } = res.data;

    // Save token and roles as JSON in localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("roles", JSON.stringify(roles));

    setMessage("Login successful");
    setTimeout(() => {
      window.location.reload(); // Force UI refresh
  }, 3);

    // Navigate based on roles
    if (roles.includes("Admin")) {
      navigate("/admin-dashboard");
    } else {
      navigate("/");
    }
  } catch (err) {
    setMessage(err.response?.data?.msg || "An error occurred");
  }
};

  return (
    <>
      {/* <div className="container">
        <div className="form-box">
          <h2>{isRegister ? "Register" : "Login"}</h2>
          <form onSubmit={handleSubmit}>
            {isRegister && (
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
            )}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            {isRegister && (
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="admin">Admin</option>
              </select>
            )}
            <button type="submit">{isRegister ? "Register" : "Login"}</button>
          </form> 
          {message && <p className="message">{message}</p>}
          <button className="toggle-btn" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
          </button>
        </div>
      </div> */}
      <div class="main-wrapper">
        <div class="account-content">
          <div class="d-flex flex-wrap w-100 vh-100 overflow-hidden account-bg-01">
            <div
              class="d-flex align-items-center justify-content-center flex-wrap vh-100 overflow-auto p-4 w-50 bg-backdrop">
              <form onSubmit={handleSubmit} class="flex-fill">
                <div class="mx-auto mw-450">
                  <div class="text-center mb-4">
                    <img src="./src/assets/assets/img/cad2.png" class="img-fluid loginimg" alt="Logo" />
                  </div>
                  <div class="mb-4">
                    <h4 class="mb-2 fs-20">Sign In</h4>
                    <p>Access the CRMS panel using your email and passcode.</p>
                  </div>
                  <div class="mb-3">
                    <label class="col-form-label">Email Address</label>
                    <div class="position-relative">
                      <span class="input-icon-addon">
                        <i class="ti ti-mail"></i>
                      </span>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required class="form-control" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">Password</label>
                    <div className="pass-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="pass-input form-control"
                      />
                      <span
                        className={`toggle-password ti ${showPassword ? "ti-eye" : "ti-eye-off"}`}
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: "pointer" }}
                      ></span>
                    </div>
                  </div>

                  <div class="mb-3">
                    <button type="submit" class="btn btn-primary w-100">Sign In</button>
                  </div>



                  <div class="text-center">
                    <p class="fw-medium text-gray">Copyright &copy; 2024 - CRMS</p>
                  </div>
                </div>
              </form>
             
            </div>
            <div className="loginbg"></div>
          </div>
        </div>

      </div>


    </>
  );
};

export default Register;


