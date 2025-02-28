import React, { useState } from "react";
import axios from "axios";
import "./Register.css"; // Import the CSS file

const Register = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegister ? "http://localhost:5000/register" : "http://localhost:5000/login";
    const data = isRegister ? { name, email, password, role } : { email, password };

    try {
      const res = await axios.post(url, data);
      setMessage(res.data.msg || "Login successful");
      if (!isRegister) localStorage.setItem("token", res.data.token);
    } catch (err) {
      setMessage(err.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <div className="container">
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
    </div>
  );
};

export default Register;
