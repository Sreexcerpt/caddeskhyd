require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect("mongodb+srv://excerpttech:excerpttech2021@cluster0.5vdeszu.mongodb.net/CADDESKCRM", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// User Model
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String,  default: "user" }
});
const User = mongoose.model("User", UserSchema);

// Register Route
app.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, "your_jwt_secret", { expiresIn: "1h" });

    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Middleware for Protected Routes
const authMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, "your_jwt_secret");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};


const FacultyStaffSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ["faculty", "staff"], required: true },
  department: { type: String, required: true },
  qualification: { type: String, required: true },
  experience: { type: Number, required: true },
  dob: { type: Date, required: true },
  joinDate: { type: Date, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  employmentType: { type: String, required: true },
  salary: { type: Number, required: true },
  staffOrFacultyId: { type: String, unique: true, required: true }, // Ensure unique & required

});

const Faculty = mongoose.model("FacultyStaff", FacultyStaffSchema);

app.post("/api/faculty", async (req, res) => {
  console.log("Received Faculty Data:", req.body); // Debugging log

  const { staffOrFacultyId } = req.body;

  if (!staffOrFacultyId) {
    console.error("Missing Faculty ID in request");
    return res.status(400).json({ msg: "Faculty ID is missing" });
  }

  try {
    const newFaculty = new Faculty({
      ...req.body, 
      staffOrFacultyId // Ensure correct field mapping
    });

    await newFaculty.save();
    res.status(201).json({ msg: "Faculty added successfully!" });

  } catch (error) {
    console.error("Error saving faculty:", error);
    if (error.code === 11000) {
      return res.status(400).json({ msg: "Duplicate Faculty ID: Faculty ID must be unique." });
    }
    res.status(500).json({ msg: error.message });
  }
});




app.get("/api/faculties", async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.json(faculties);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


// Update faculty/staff
app.put("/api/faculty/:id", async (req, res) => {
  try {
    const { name, email, phone, role, department, qualification, experience, dob, joinDate, address, gender, employmentType, status, salary } = req.body;
    const facultyId = req.params.id;
    
    // Check if faculty/staff exists
    const faculty = await Faculty.findById(facultyId);
    if (!faculty) {
      return res.status(404).json({ msg: "Faculty/Staff not found" });
    }
    
    // Check if email is being changed and if it already exists
    if (email !== faculty.email) {
      const emailExists = await Faculty.findOne({ email, _id: { $ne: facultyId } });
      if (emailExists) {
        return res.status(400).json({ msg: "Email already in use by another faculty/staff member" });
      }
    }
    
    // Update faculty/staff record
    const updatedFaculty = await Faculty.findByIdAndUpdate(
      facultyId,
      { name, email, phone, role, department, qualification, experience, dob, joinDate, address, gender, employmentType, status, salary },
      { new: true }
    );
    
    res.json({ msg: "Faculty/Staff updated successfully!", faculty: updatedFaculty });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ msg: error.message });
  }
});

// Delete faculty/staff
app.delete("/api/faculty/:id", async (req, res) => {
  try {
    const facultyId = req.params.id;
    
    // Check if faculty/staff exists
    const faculty = await Faculty.findById(facultyId);
    if (!faculty) {
      return res.status(404).json({ msg: "Faculty/Staff not found" });
    }
    
    // Delete faculty/staff record
    await Faculty.findByIdAndDelete(facultyId);
    
    res.json({ msg: "Faculty/Staff deleted successfully!" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ msg: error.message });
  }
});

const leaveSchema = new mongoose.Schema({
  employeeName: String,
  employeeId: String,
  leaveType: String,
  fromDate: Date,
  toDate: Date,
  reason: String,
  status: { type: String, default: "Pending" }, // Default status
});

const Leave = mongoose.model("Leave", leaveSchema);

// API to Submit Leave Request
app.post("/api/leave", async (req, res) => {
  try {
    const newLeave = new Leave(req.body);
    await newLeave.save();
    res.status(201).json({ message: "Leave request submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit leave request" });
  }
});

// API to Get All Leave Requests
app.get("/api/leave", async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch leave requests" });
  }
});


// API to Update Leave Request Status (Approve/Reject)
app.put("/api/leave/:id", async (req, res) => {
  try {
    const { status } = req.body; // Get status from frontend (Approved/Rejected)
    const updatedLeave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedLeave) {
      return res.status(404).json({ error: "Leave request not found" });
    }

    res.json({ message: `Leave request ${status.toLowerCase()}`, updatedLeave });
  } catch (error) {
    res.status(500).json({ error: "Failed to update leave request" });
  }
});




const subjectSchema = new mongoose.Schema({
  subjectCode: { type: String, required: true, unique: true },
  subjectName: { type: String, required: true },
});

const Subject= mongoose.model("Subject", subjectSchema);


// ✅ Add a Subject
app.post("/api/add-subject", async (req, res) => {
  try {
    const { subjectCode, subjectName } = req.body;
    const newSubject = new Subject({ subjectCode, subjectName });
    await newSubject.save();
    res.status(201).json({ message: "Subject added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get All Subjects
app.get("/api/get-subjects", async (req, res) => {
  try {
    const subjects = await Subject.find({});
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



const courseSchema = new mongoose.Schema({
  courseCode: { type: String, required: true, unique: true },
  courseName: { type: String, required: true },
  description: { type: String },
  duration: { type: String }, // Example: "4 Years"
  subjects: [{ type: String }] // Storing Subject IDs
});

const Course=  mongoose.model("Course", courseSchema);


app.post("/api/add-course", async (req, res) => {
  try {
    const { courseCode, courseName, description, duration, subjects } = req.body;
    const newCourse = new Course({ courseCode, courseName, description, duration, subjects });
    await newCourse.save();
    res.status(201).json({ message: "Course added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Define Student Schema
const studentSchema = new mongoose.Schema({
  studentId: String,
  firstName: String,
  lastName: String,
  middleName: String,
  dob: String,
  gender: String,
  nationality: String,
  aadharNumber: String,
  bloodGroup: String,
  emergencyContact: String,
  address: String,
  phoneNumber: String,
  email: String,
  guardianName: String,
  guardianPhone: String,
  guardianEmail: String,
  previousSchool: String,
  previousQualification: String,
  courseEnrolled: String,
  batchAssigned: String,
  grades: String,
  testScores: String,
  extracurricularActivities: String,
  disciplinaryRecords: String
});

const Student = mongoose.model("Student", studentSchema);

// API Routes

// Create a new student
app.post("/register1", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({ message: "Student registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a student by ID
app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update student details
app.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStudent) return res.status(404).json({ message: "Student not found" });
    res.status(200).json({ message: "Student updated successfully", updatedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a student
app.delete("/students/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ message: "Student not found" });
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
