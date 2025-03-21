// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Database Connection
// mongoose.connect("mongodb+srv://excerpttech:excerpttech2021@cluster0.5vdeszu.mongodb.net/CADDESKCRM", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

// // User Model
// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: { type: String,  default: "user" }
// });
// const User = mongoose.model("User", UserSchema);

// // Register Route
// app.post("/register", async (req, res) => {
//   const { name, email, password, role } = req.body;
  
//   try {
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ msg: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     user = new User({ name, email, password: hashedPassword, role });
//     await user.save();

//     res.status(201).json({ msg: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// });

// // Login Route
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
  
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

//     const token = jwt.sign({ id: user._id, role: user.role }, "your_jwt_secret", { expiresIn: "1h" });

//     res.json({ token, role: user.role });
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// });

// // Middleware for Protected Routes
// const authMiddleware = (req, res, next) => {
//   const token = req.header("x-auth-token");
//   if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

//   try {
//     const decoded = jwt.verify(token, "your_jwt_secret");
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: "Token is not valid" });
//   }
// };


// const FacultyStaffSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, unique: true, required: true },
//   phone: { type: String, required: true },
//   role: { type: String, enum: ["faculty", "staff"], required: true },
//   department: { type: String, required: true },
//   qualification: { type: String, required: true },
//   experience: { type: Number, required: true },
//   dob: { type: Date, required: true },
//   joinDate: { type: Date, required: true },
//   address: { type: String, required: true },
//   gender: { type: String, required: true },
//   employmentType: { type: String, required: true },
//   salary: { type: Number, required: true },
//   staffOrFacultyId: { type: String, unique: true, required: true }, // Ensure unique & required

// });

// const Faculty = mongoose.model("FacultyStaff", FacultyStaffSchema);

// app.post("/api/faculty", async (req, res) => {
//   console.log("Received Faculty Data:", req.body); // Debugging log

//   const { staffOrFacultyId } = req.body;

//   if (!staffOrFacultyId) {
//     console.error("Missing Faculty ID in request");
//     return res.status(400).json({ msg: "Faculty ID is missing" });
//   }

//   try {
//     const newFaculty = new Faculty({
//       ...req.body, 
//       staffOrFacultyId // Ensure correct field mapping
//     });

//     await newFaculty.save();
//     res.status(201).json({ msg: "Faculty added successfully!" });

//   } catch (error) {
//     console.error("Error saving faculty:", error);
//     if (error.code === 11000) {
//       return res.status(400).json({ msg: "Duplicate Faculty ID: Faculty ID must be unique." });
//     }
//     res.status(500).json({ msg: error.message });
//   }
// });




// app.get("/api/faculties", async (req, res) => {
//   try {
//     const faculties = await Faculty.find();
//     res.json(faculties);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });


// // Update faculty/staff
// app.put("/api/faculty/:id", async (req, res) => {
//   try {
//     const { name, email, phone, role, department, qualification, experience, dob, joinDate, address, gender, employmentType, status, salary } = req.body;
//     const facultyId = req.params.id;
    
//     // Check if faculty/staff exists
//     const faculty = await Faculty.findById(facultyId);
//     if (!faculty) {
//       return res.status(404).json({ msg: "Faculty/Staff not found" });
//     }
    
//     // Check if email is being changed and if it already exists
//     if (email !== faculty.email) {
//       const emailExists = await Faculty.findOne({ email, _id: { $ne: facultyId } });
//       if (emailExists) {
//         return res.status(400).json({ msg: "Email already in use by another faculty/staff member" });
//       }
//     }
    
//     // Update faculty/staff record
//     const updatedFaculty = await Faculty.findByIdAndUpdate(
//       facultyId,
//       { name, email, phone, role, department, qualification, experience, dob, joinDate, address, gender, employmentType, status, salary },
//       { new: true }
//     );
    
//     res.json({ msg: "Faculty/Staff updated successfully!", faculty: updatedFaculty });
//   } catch (error) {
//     console.error("Update error:", error);
//     res.status(500).json({ msg: error.message });
//   }
// });

// // Delete faculty/staff
// app.delete("/api/faculty/:id", async (req, res) => {
//   try {
//     const facultyId = req.params.id;
    
//     // Check if faculty/staff exists
//     const faculty = await Faculty.findById(facultyId);
//     if (!faculty) {
//       return res.status(404).json({ msg: "Faculty/Staff not found" });
//     }
    
//     // Delete faculty/staff record
//     await Faculty.findByIdAndDelete(facultyId);
    
//     res.json({ msg: "Faculty/Staff deleted successfully!" });
//   } catch (error) {
//     console.error("Delete error:", error);
//     res.status(500).json({ msg: error.message });
//   }
// });

// const leaveSchema = new mongoose.Schema({
//   employeeName: String,
//   employeeId: String,
//   leaveType: String,
//   fromDate: Date,
//   toDate: Date,
//   reason: String,
//   status: { type: String, default: "Pending" }, // Default status
// });

// const Leave = mongoose.model("Leave", leaveSchema);

// // API to Submit Leave Request
// app.post("/api/leave", async (req, res) => {
//   try {
//     const newLeave = new Leave(req.body);
//     await newLeave.save();
//     res.status(201).json({ message: "Leave request submitted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to submit leave request" });
//   }
// });

// // API to Get All Leave Requests
// app.get("/api/leave", async (req, res) => {
//   try {
//     const leaves = await Leave.find();
//     res.json(leaves);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch leave requests" });
//   }
// });


// // API to Update Leave Request Status (Approve/Reject)
// app.put("/api/leave/:id", async (req, res) => {
//   try {
//     const { status } = req.body; // Get status from frontend (Approved/Rejected)
//     const updatedLeave = await Leave.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!updatedLeave) {
//       return res.status(404).json({ error: "Leave request not found" });
//     }

//     res.json({ message: `Leave request ${status.toLowerCase()}`, updatedLeave });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update leave request" });
//   }
// });




// const subjectSchema = new mongoose.Schema({
//   subjectCode: { type: String, required: true, unique: true },
//   subjectName: { type: String, required: true },
// });

// const Subject= mongoose.model("Subject", subjectSchema);


// // ✅ Add a Subject
// app.post("/api/add-subject", async (req, res) => {
//   try {
//     const { subjectCode, subjectName } = req.body;
//     const newSubject = new Subject({ subjectCode, subjectName });
//     await newSubject.save();
//     res.status(201).json({ message: "Subject added successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // ✅ Get All Subjects
// app.get("/api/get-subjects", async (req, res) => {
//   try {
//     const subjects = await Subject.find({});
//     res.json(subjects);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });



// const courseSchema = new mongoose.Schema({
//   courseCode: { type: String, required: true, unique: true },
//   courseName: { type: String, required: true },
//   description: { type: String },
//   duration: { type: String }, // Example: "4 Years"
//   subjects: [{ type: String }] // Storing Subject IDs
// });

// const Course=  mongoose.model("Course", courseSchema);


// app.post("/api/add-course", async (req, res) => {
//   try {
//     const { courseCode, courseName, description, duration, subjects } = req.body;
//     const newCourse = new Course({ courseCode, courseName, description, duration, subjects });
//     await newCourse.save();
//     res.status(201).json({ message: "Course added successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // Define Student Schema
// const studentSchema = new mongoose.Schema({
//   studentId: String,
//   firstName: String,
//   lastName: String,
//   middleName: String,
//   dob: String,
//   gender: String,
//   nationality: String,
//   aadharNumber: String,
//   bloodGroup: String,
//   emergencyContact: String,
//   address: String,
//   phoneNumber: String,
//   email: String,
//   guardianName: String,
//   guardianPhone: String,
//   guardianEmail: String,
//   previousSchool: String,
//   previousQualification: String,
//   courseEnrolled: String,
//   batchAssigned: String,
//   grades: String,
//   testScores: String,
//   extracurricularActivities: String,
//   disciplinaryRecords: String
// });

// const Student = mongoose.model("Student", studentSchema);

// // API Routes

// // Create a new student
// app.post("/register1", async (req, res) => {
//   try {
//     const newStudent = new Student(req.body);
//     await newStudent.save();
//     res.status(201).json({ message: "Student registered successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get all students
// app.get("/students", async (req, res) => {
//   try {
//     const students = await Student.find();
//     res.status(200).json(students);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get a student by ID
// app.get("/students/:id", async (req, res) => {
//   try {
//     const student = await Student.findById(req.params.id);
//     if (!student) return res.status(404).json({ message: "Student not found" });
//     res.status(200).json(student);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update student details
// app.put("/students/:id", async (req, res) => {
//   try {
//     const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedStudent) return res.status(404).json({ message: "Student not found" });
//     res.status(200).json({ message: "Student updated successfully", updatedStudent });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Delete a student
// app.delete("/students/:id", async (req, res) => {
//   try {
//     const deletedStudent = await Student.findByIdAndDelete(req.params.id);
//     if (!deletedStudent) return res.status(404).json({ message: "Student not found" });
//     res.status(200).json({ message: "Student deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });




// // Start Server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));















// Required dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const app = express();
const path = require("path")
// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://excerpttech:excerpttech2021@cluster0.5vdeszu.mongodb.net/CADDESKCRM');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Student Schema
const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
        trim: true
    },
    mobileNumber: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    qualification: {
        type: String,
        required: true,
        trim: true
    },
    otherQualification: {
        type: String,
        trim: true
    },
    yearOfPassing: {
        type: Number,
        required: true
    },
    occupation: {
        type: String,
        required: true,
        enum: ['student', 'fresher', 'professional', 'other']
    },
    instituteName: {
        type: String,
        required: true,
        trim: true
    },
    selectedCourse: {
        type: String,
        required: true,
        trim: true
    },
    otherCourse: {
        type: String,
        trim: true
    },
    learningMode: {
        type: String,
        required: true,
        enum: ['online', 'offline']
    },
    startDate: {
        type: Date,
        required: true
    },
    reference: {
        type: String,
        required: true,
        trim: true
    },
    friendName: {
        type: String,
        trim: true
    },
    submissionDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'approved', 'rejected']
    }
});

const Student = mongoose.model('Studentwalkin', studentSchema);

// Validation Middleware
const validateStudent = (req, res, next) => {
    const { 
        email, 
        mobileNumber, 
        qualification, 
        selectedCourse, 
        reference 
    } = req.body;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    // Mobile number validation (assuming Indian format)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobileNumber)) {
        return res.status(400).json({ error: 'Invalid mobile number format' });
    }

    // Other qualification validation
    if (qualification === 'other' && !req.body.otherQualification) {
        return res.status(400).json({ error: 'Other qualification is required' });
    }

    // Other course validation
    if (selectedCourse === 'other' && !req.body.otherCourse) {
        return res.status(400).json({ error: 'Other course is required' });
    }

    // Friend name validation
    if (reference === 'friends' && !req.body.friendName) {
        return res.status(400).json({ error: 'Friend name is required for referral' });
    }

    next();
};

// Routes
// POST - Create new student registration
app.post('/api/submit-form', validateStudent, async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({
            message: 'Registration successful',
            studentId: student._id
        });
    } catch (error) {
        res.status(400).json({
            error: 'Registration failed',
            details: error.message
        });
    }
});

// GET - Fetch all students (with pagination)
app.get('/api/students', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const students = await Student.find()
            .sort({ submissionDate: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Student.countDocuments();

        res.json({
            students,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalStudents: total
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error fetching students',
            details: error.message
        });
    }
});

// GET - Fetch specific student by ID
app.get('/api/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({
            error: 'Error fetching student',
            details: error.message
        });
    }
});

// PUT - Update student status
app.put('/api/students/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json({
            message: 'Status updated successfully',
            student
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error updating status',
            details: error.message
        });
    }
});

// Search endpoint
app.get('/api/students/search', async (req, res) => {
    try {
        const { query } = req.query;
        const students = await Student.find({
            $or: [
                { studentName: new RegExp(query, 'i') },
                { email: new RegExp(query, 'i') },
                { mobileNumber: new RegExp(query, 'i') },
                { instituteName: new RegExp(query, 'i') }
            ]
        }).limit(10);

        res.json(students);
    } catch (error) {
        res.status(500).json({
            error: 'Error searching students',
            details: error.message
        });
    }
});

const subjectSchema = new mongoose.Schema({
    subjectCode: String,
    subjectName: String,
  });
  
  const Subject = mongoose.model("Subject", subjectSchema);
  
  // Create Subject
  app.post("/api/subjects", async (req, res) => {
    const { subjectCode, subjectName } = req.body;
    const subject = new Subject({ subjectCode, subjectName });
    await subject.save();
    res.json(subject);
  });
  
  // Get all Subjects
  app.get("/api/subjects", async (req, res) => {
    const subjects = await Subject.find();
    res.json(subjects);
  });
  
  // Update Subject
  app.put("/api/subjects/:id", async (req, res) => {
    const { subjectCode, subjectName } = req.body;
    const subject = await Subject.findByIdAndUpdate(
      req.params.id,
      { subjectCode, subjectName },
      { new: true }
    );
    res.json(subject);
  });
  
  // Delete Subject
  app.delete("/api/subjects/:id", async (req, res) => {
    await Subject.findByIdAndDelete(req.params.id);
    res.json({ message: "Subject deleted" });
  });
  
  const courseSchema = new mongoose.Schema({
    courseCode: String,
    courseName: String,
    duration: String,
    subjects: [{ subjectCode: String, subjectName: String }],
    fee: Number,
    installment: Number,
  });
  
  const Course = mongoose.model("Course", courseSchema);
  
  // Create Course
  app.post("/api/courses", async (req, res) => {
    const { courseCode, courseName, duration, subjects, fee, installment } = req.body;
    const course = new Course({ courseCode, courseName, duration, subjects, fee, installment });
    await course.save();
    res.json(course);
  });
  
  // Get all Courses
  app.get("/api/courses", async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
  });
  
  // Update Course
  app.put("/api/courses/:id", async (req, res) => {
    const { courseCode, courseName, duration, subjects, fee, installment } = req.body;
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { courseCode, courseName, duration, subjects, fee, installment },
      { new: true }
    );
    res.json(course);
  });
  
  // Delete Course
  app.delete("/api/courses/:id", async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted" });
  });
  
  const batchSchema = new mongoose.Schema({
    batchId: String,
    batchName: String,
    course: String,
    studentCount: Number,
    startDate: String,
    status: String,
    day: String, // Example: "Monday"
    timeSlot: String, // Example: "9-10"
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty" },
  });
  
  const Batch = mongoose.model("Batch", batchSchema);
  
  // Create Batch
  app.post("/api/batches", async (req, res) => {
    const { batchId, batchName, course, studentCount, startDate, status } = req.body;
    const batch = new Batch({ batchId, batchName, course, studentCount, startDate, status });
    await batch.save();
    res.json(batch);
  });
  
  // Get all Batches
  app.get("/api/batches", async (req, res) => {
    const batches = await Batch.find();
    res.json(batches);
  });
  
  // Update Batch
  app.put("/api/batches/:id", async (req, res) => {
    const { batchId, batchName, course, studentCount, startDate, status } = req.body;
    const batch = await Batch.findByIdAndUpdate(
      req.params.id,
      { batchId, batchName, course, studentCount, startDate, status },
      { new: true }
    );
    res.json(batch);
  });
  
  // Delete Batch
  app.delete("/api/batches/:id", async (req, res) => {
    await Batch.findByIdAndDelete(req.params.id);
    res.json({ message: "Batch deleted" });
  });
  const facultySchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    role: [],
    department: String,
    qualification: String,
    experience: Number,
    dob: String,
    joinDate: String,
    address: String,
    gender: String,
    employmentType: String,
    status: String,
    salary: String,
    staffOrFacultyId: String,
    subjects: [{ subjectCode: String, subjectName: String }],
  });
  
  const Faculty = mongoose.model("Faculty", facultySchema);
  
  app.post("/api/faculties", async (req, res) => {
    try {
      console.log("Received Faculty Data:", req.body);
  
      // Extract password from the request
      let {email, password, ...otherData } = req.body;
      const existingFaculty = await Faculty.findOne({ email });
  
      if (existingFaculty) {
        return res.status(400).json({ message: "Email already exists" });
      }
      // Hash the password before saving
      if (password) {
        const saltRounds = 10; // Number of salt rounds (higher = more secure)
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        password = hashedPassword;
      }
  
      // Create new faculty with hashed password
      const faculty = new Faculty({ ...otherData, password });
  
      // Save to database
      await faculty.save();
  
      res.status(201).json({ message: "Faculty added successfully", faculty });
    } catch (error) {
      console.error("Error saving faculty:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  
  app.get("/api/faculties", async (req, res) => {
    const faculties = await Faculty.find();
    res.json(faculties);
  });
  
  app.put("/api/faculties/:id", async (req, res) => {
    const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(faculty);
  });
  
  app.delete("/api/faculties/:id", async (req, res) => {
    await Faculty.findByIdAndDelete(req.params.id);
    res.json({ message: "Faculty deleted" });
  });



app.get("/api/faculty-by-subject/:subjectCode", async (req, res) => {
    try {
      const { subjectCode } = req.params;
      const facultyList = await Faculty.find({ "subjects.subjectCode": subjectCode });
      res.json(facultyList);
    } catch (error) {
      res.status(500).json({ message: "Error fetching faculty", error });
    }
  });
  
  // Get Scheduled Assignments
app.get("/api/schedule", async (req, res) => {
    try {
      const schedule = await BatchSchedule.find().populate("faculty").populate("subject");
      res.json(schedule);
    } catch (error) {
      res.status(500).json({ message: "Error fetching schedule", error });
    }
  });
  
  // Assign Faculty
app.post("/api/assign-faculty", async (req, res) => {
    try {
      const { batchId, day, timeSlot, subject, faculty } = req.body;
  
      // Check if faculty is already assigned at the same time
      const conflict = await BatchSchedule.findOne({ day, timeSlot, faculty });
  
      if (conflict) {
        return res.status(400).json({ message: "Faculty is already assigned at this time slot." });
      }
  
      const newAssignment = new BatchSchedule({ batchId, day, timeSlot, subject, faculty });
      await newAssignment.save();
  
      res.status(201).json({ message: "Faculty assigned successfully", data: newAssignment });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });
const timetableSchema = new mongoose.Schema({
    batchId: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    schedule: [{
        day: { type: String, required: true }, // Monday, Tuesday, etc.
        timeSlot: { type: String, required: true } // "08:00-09:00", etc.
    }],
    subject: { 
        subjectCode: String, 
        subjectName: String 
    },
    faculty: { 
        staffOrFacultyId: String, 
        firstName: String, 
        lastName: String 
    }
});

const Timetable = mongoose.model("Timetable", timetableSchema);


/**
 * API: Fetch all batches
 */

app.get("/getCourses", async (req, res) => {
  try {
      const courses = await Course.find();
      res.json(courses);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});
// ✅ API: Fetch batches
// app.get("/getBatches", async (req, res) => {
//   const batches = await Batch.find();
//   res.json(batches);
// });





app.get("/getBatches", async (req, res) => {
  const batches = await Batch.find();
  res.json(batches);
});
   

app.get("/getSubjectsByBatch/:batchId", async (req, res) => {
  const batch = await Batch.findOne({ batchId: req.params.batchId });
  if (!batch) return res.status(404).json({ message: "Batch not found" });

  const course = await Course.findOne({ courseCode: batch.course });
  res.json(course ? course.subjects : []);
});

app.get('/api/timetable/batch/:batchId', async (req, res) => {
    try {
        const timetable = await Timetable.find({ batchId: req.params.batchId });
        res.json(timetable);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/getFaculties/:subjectCode", async (req, res) => {
  const faculties = await Faculty.find({ "subjects.subjectCode": req.params.subjectCode });
  res.json(faculties);
});

app.get('/api/timetable/faculty/:facultyId', async (req, res) => {
    try {
        const timetable = await Timetable.find({ 'faculty.staffOrFacultyId': req.params.facultyId });
        res.json(timetable);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/timetable/batch/:batchId', async (req, res) => {
    try {
        const timetable = await Timetable.find({ batchId: req.params.batchId });
        res.json(timetable);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.get('/api/timetable/batch/:batchId', async (req, res) => {
    try {
        const timetable = await Timetable.find({ batchId: req.params.batchId });
        res.json(timetable);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/addTimetable", async (req, res) => {
    try {
        let { batchId, schedule, subject, faculty } = req.body;
        
        // Remove empty schedules (if timeSlot is empty, ignore it)
        schedule = schedule.filter(entry => entry.timeSlot);
        
        // If all schedules are empty, reject request
        if (schedule.length === 0) {
            return res.status(400).json({ message: "At least one schedule entry must have a time slot!" });
        }
        
        // Check for batch schedule conflicts (same batch, same day, same time)
        for (let entry of schedule) {
            const existingBatchEntry = await Timetable.findOne({
                batchId: batchId,
                "schedule": {
                    $elemMatch: {
                        day: entry.day,
                        timeSlot: entry.timeSlot
                    }
                }
            });
            
            if (existingBatchEntry) {
                return res.status(400).json({ 
                    message: `Schedule conflict: The batch already has a class on ${entry.day} at ${entry.timeSlot}!`,
                    conflictDetails: {
                        subject: existingBatchEntry.subject,
                        faculty: existingBatchEntry.faculty,
                        day: entry.day,
                        timeSlot: entry.timeSlot
                    }
                });
            }
        }
        
        // Check for faculty schedule conflicts (same faculty, same day, same time)
        for (let entry of schedule) {
            const existingFacultyEntry = await Timetable.findOne({
                "faculty.staffOrFacultyId": faculty.staffOrFacultyId,
                "schedule": {
                    $elemMatch: {
                        day: entry.day,
                        timeSlot: entry.timeSlot
                    }
                }
            });
            
            if (existingFacultyEntry) {
                return res.status(400).json({ 
                    message: `Faculty schedule conflict: ${faculty.firstName} ${faculty.lastName} is already assigned on ${entry.day} at ${entry.timeSlot}!`,
                    conflictDetails: {
                        batchId: existingFacultyEntry.batchId,
                        subject: existingFacultyEntry.subject,
                        day: entry.day,
                        timeSlot: entry.timeSlot
                    }
                });
            }
        }
        
        // Save the new timetable entry
        const newTimetable = new Timetable({ batchId, schedule, subject, faculty });
        await newTimetable.save();
        
        res.status(201).json({ message: "Timetable entry added successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




// // Get booked schedules for a batch


app.get("/getFacultyAssignments/:subjectCode", async (req, res) => {
  try {
      const assignments = await Timetable.find({ "subject.subjectCode": req.params.subjectCode });

      let assignedFaculties = [];

      assignments.forEach(entry => {
          assignedFaculties.push({
              facultyId: entry.faculty.staffOrFacultyId,
              facultyName: `${entry.faculty.firstName} ${entry.faculty.lastName}`, // Include Faculty Name
              schedule: entry.schedule
          });
      });

      res.json(assignedFaculties);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.get("/getAssignedSchedules/:batchId", async (req, res) => {
  try {
      const schedules = await Timetable.find({ batchId: req.params.batchId });

      let bookedSlots = [];

      schedules.forEach(entry => {
          entry.schedule.forEach(slot => {
              bookedSlots.push({
                  date: slot.date,
                  timeSlot: slot.timeSlot,
                  subjectName: entry.subject.subjectName,  // Include Subject Name
                  facultyName: `${entry.faculty.firstName} ${entry.faculty.lastName}` // Include Faculty Name
              });
          });
      });

      res.json(bookedSlots);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});


app.put('/api/timetable/:id', async (req, res) => {
  try {
    const timetableId = req.params.id;
    const { subject, faculty } = req.body;
    
    const updatedTimetable = await Timetable.findByIdAndUpdate(
      timetableId,
      { $set: { subject, faculty } },
      { new: true }
    );
    
    if (!updatedTimetable) {
      return res.status(404).json({ message: 'Timetable entry not found' });
    }
    
    res.status(200).json(updatedTimetable);
  } catch (err) {
    console.error('Error updating timetable:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// DELETE endpoint to remove timetable entry
app.delete('/api/timetable/:id', async (req, res) => {
  try {
    const timetableId = req.params.id;
    
    const deletedTimetable = await Timetable.findByIdAndDelete(timetableId);
    
    if (!deletedTimetable) {
      return res.status(404).json({ message: 'Timetable entry not found' });
    }
    
    res.status(200).json({ message: 'Timetable entry deleted successfully' });
  } catch (err) {
    console.error('Error deleting timetable:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ✅ API: Fetch timetable for a batch
app.get("/getTimetable/:batchId", async (req, res) => {
    const timetable = await Timetable.find({ batchId: req.params.batchId });
    res.json(timetable);
});

const DROPBOX_ACCESS_TOKEN = process.env.DROPBOX_ACCESS_TOKEN;

// app.post("/get-video-link", async (req, res) => {
//   const { videoPath } = req.body;

//   try {
//     const response = await axios.post(
//       "https://api.dropboxapi.com/2/files/get_temporary_link",
//       { path: videoPath },
//       {
//         headers: {
//           Authorization: `Bearer ${DROPBOX_ACCESS_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     res.json({ videoUrl: response.data.link });
//   } catch (error) {
//     console.error("Error fetching video:", error);
//     res.status(500).json({ error: "Failed to fetch video link" });
//   }
// });
app.post("/get-video-link", async (req, res) => {
  const { videoPath } = req.body;

  // Ensure videoPath is provided
  if (!videoPath) {
    return res.status(400).json({ error: "Missing videoPath in request body" });
  }

  console.log("Requested video path:", videoPath);

  try {
    const response = await axios.post(
      "https://api.dropboxapi.com/2/files/get_temporary_link",
      { path: videoPath },
      {
        headers: {
          Authorization: `Bearer ${DROPBOX_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

  

    res.json({ videoUrl: response.data.link });
  } catch (error) {
    console.error("Error fetching video:", error.response?.data || error.message);

    // Handle different Dropbox errors
    if (error.response) {
      const { status, data } = error.response;
      return res.status(status).json({ error: data?.error_summary || "Dropbox API error" });
    }

    res.status(500).json({ error: "Failed to fetch video link" });
  }
});

const SalarySchema = new mongoose.Schema({
    facultyId: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty", required: true },
    date: { type: String, required: true },
    basicPay: { type: Number, required: true },
    salary: { type: Number, required: true },
    travelAllowance: { type: Number, default: 0 },
    medicalAllowance: { type: Number, default: 0 },
    washingAllowance: { type: Number, default: 0 },
    da: { type: Number, default: 0 }, // % of salary
    hr: { type: Number, default: 0 }, // % of salary
  });
  
const Salary = mongoose.model("Salary", SalarySchema);
app.post("/api/save-salary", async (req, res) => {
    try {
      const { facultyId, date } = req.body;
  
      // Extract Year & Month from date
      const [year, month] = date.split("-");
  
      // Check if salary already exists for the same faculty in the same month
      const existingSalary = await Salary.findOne({
        facultyId,
        date: { $regex: `^${year}-${month}` }, // Match the same year-month
      });
  
      if (existingSalary) {
        return res.status(400).json({ error: "Salary already recorded for this month" });
      }
  
      const salary = new Salary(req.body);
      await salary.save();
      res.status(201).json({ message: "Salary saved successfully", salary });
    } catch (error) {
      res.status(500).json({ error: "Error saving salary" });
    }
  });
  
app.get("/api/salary-records", async (req, res) => {
    try {
        const salaries = await Salary.find().populate("facultyId", "firstName lastName department staffOrFacultyId");
        res.json(salaries);
    } catch (error) {
        console.error("Error fetching salary records:", error);
        res.status(500).json({ message: "Server error" });
    }
});




const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String,  default: "user" }
});
const User = mongoose.model("User", UserSchema);

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   console.log("Login Request:", req.body);

//   try {
//     let user = await User.findOne({ email });

//     if (!user) {
//       user = await Faculty.findOne({ email }); // Check in Faculty collection
//     }

//     console.log("User Found:", user); // Debugging

//     if (!user) {
//       return res.status(400).json({ msg: "Invalid Credentials (User Not Found)" });
//     }

//     if (!user.password) {
//       return res.status(400).json({ msg: "Invalid Credentials (No Password)" });
//     }

//     // const isMatch = await bcrypt.compare(password, user.password);
//     // console.log("Password Match:", isMatch);  
//     // if (!isMatch) {
//     //   return res.status(400).json({ msg: "Invalid Credentials (Wrong Password)" });
//     // }
//     try {
//       console.log("Checking Password...");
//       console.log("Entered Password:", password);
//       console.log("Stored Hashed Password:", user.password);
    
//       const isMatch = await bcrypt.compare(password, user.password);
//       console.log("Password Match Result:", isMatch);  // This should print true or false
      
//       if (!isMatch) {
//         console.log("Invalid Password!");
//         return res.status(400).json({ msg: "Invalid Credentials (Wrong Password)" });
//       }
//     } catch (err) {
//       console.error("bcrypt.compare() Error:", err);
//       return res.status(500).json({ msg: "Error during password verification" });
//     }
    
    
//     // Ensure role is always an array
//     const roles = Array.isArray(user.role) ? user.role : [user.role];

//     const token = jwt.sign({ id: user._id, roles }, "your_jwt_secret", { expiresIn: "1h" });

//     res.json({ token, roles });
//   } catch (err) {
//     console.error("Login Error:", err);
//     res.status(500).json({ msg: "Internal Server Error" });
//   }
// });


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("🔹 Received Login Request:", { email, password });

  try {
    let user = await User.findOne({ email }).lean();
    if (!user) {
      user = await Faculty.findOne({ email }).lean();
    }

    if (!user) {
      console.log("❌ User Not Found:", email);
      return res.status(400).json({ msg: "Invalid Credentials (User Not Found)" });
    }

    console.log("✅ User Found:", { email: user.email, id: user._id });

    if (!user.password) {
      console.log("❌ No Password Found for User:", email);
      return res.status(400).json({ msg: "Invalid Credentials (No Password)" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔍 Password Match Result:", isMatch);

    if (!isMatch) {
      console.log("❌ Wrong Password for:", email);
      return res.status(400).json({ msg: "Invalid Credentials (Wrong Password)" });
    }

    // Assign role
    const roles = Array.isArray(user.role) ? user.role : [user.role] || [];

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, roles },
      process.env.JWT_SECRET || "your_jwt_secret",
      { expiresIn: "1h" }
    );

    console.log("✅ Login Successful for:", email);
    res.json({ token, roles });

  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});



const RoleSchema = new mongoose.Schema({
  roleId: String,
  roleName: String,
  permissions: [String],
});

const Role = mongoose.model("Role", RoleSchema);

// Get all roles
app.get("/api/roles", async (req, res) => {
  const roles = await Role.find();
  res.json(roles);
});

// Add new role
app.post("/api/roles", async (req, res) => {
  const role = new Role(req.body);
  await role.save();
  res.json(role);
});

// Update role
app.put("/api/roles/:id", async (req, res) => {
  await Role.findByIdAndUpdate(req.params.id, req.body);
  res.send("Role Updated");
});

// Delete role
app.delete("/api/roles/:id", async (req, res) => {
  await Role.findByIdAndDelete(req.params.id);
  res.send("Role Deleted");
});

app.get('/api/permissions/:roleName', async (req, res) => {
  try {
    const { roleName } = req.params;
    
    // Find the role in the database
    const roleData = await Role.findOne({ roleName });
    
    if (!roleData) {
      return res.status(404).json({ 
        success: false, 
        message: 'Role not found' 
      });
    }
    
    // Return permissions for the role
    return res.status(200).json({
      success: true,
      data: roleData.permissions
    });
    
  } catch (error) {
    console.error('Error fetching permissions:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

app.use(express.static(path.join(__dirname, 'dist')));

// Route all other requests to serve 'index.html' for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});