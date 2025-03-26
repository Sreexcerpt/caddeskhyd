const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const multer = require("multer");
const app = express();
const path = require("path")
// Middleware
app.use(cors());
app.use(express.json());
const fs = require("fs");

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://excerpttech:excerpttech2021@cluster0.5vdeszu.mongodb.net/CADDESKCRM');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
const branchSchema = new mongoose.Schema({
    branchId: {
        type: String,
        required: true,
        unique: true
    },
    branchName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

 const Branch= mongoose.model('Branch', branchSchema);

 const subjectSchema = new mongoose.Schema({
  subjectCode: String,
  subjectName: String,
});

const Subject = mongoose.model("Subject", subjectSchema);

const courseSchema = new mongoose.Schema({
  courseCode: String,
  courseName: String,
  duration: String,
  subjects: [{ subjectCode: String, subjectName: String }],
  fee: Number,
  installment: Number,
});

const Course = mongoose.model("Course", courseSchema);

const batchSchema = new mongoose.Schema({
  branchId:String,
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
const PaymentPlanSchema = new mongoose.Schema({ 
  dueDate: String, 
  amount: Number, 
  status: { type: String, default: "Pending" }, 
  paidDate: String, 
  paidAmount: Number, 
  transactionId: String,
  receivedBy: String,
  receiptPath: String 
});
const RegistrationSchema = new mongoose.Schema({
  regid: { type: String, unique: true, required: true },
  fName: String,
  lName: String,
  fatherName: String,
  contactAddress: String,
  email: String,
  city: String,
  state: String,
  branchId: String,
  qualification: String,
  collegeName: String,
  phone: String,
  courseName: String,
  courseFee: String,
  joiningDate: String,
  aadhar: String,
  resume: String,
  role: { type: [String], default: ["Student"] },
  password: { type: String, required: true },
  feeType: { type: String, default: "Single" },
  installmentCount: { type: Number, default: 0 },
  formStatus: { type: String, default: "Pending" },
  regStatus: { type: String, default: "Pending" },
  paymentsPlan: [PaymentPlanSchema]
});

// Auto-generate `regid`
RegistrationSchema.pre("save", async function (next) {
  if (!this.regid) {
    const count = await Registration.countDocuments();
    this.regid = `cad${String(count + 1).padStart(2, "0")}`; // Example: cad01, cad02, cad03...
  }
  next();
});

const Registration = mongoose.model("Registration", RegistrationSchema);
// Create Batch
app.post("/api/batches", async (req, res) => {
  const { batchId,branchId, batchName, course, studentCount, startDate, status } = req.body;
  const batch = new Batch({ batchId,branchId, batchName, course, studentCount, startDate, status });
  await batch.save();
  res.json(batch);
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
  employeeId: String,
  subjects: [{ subjectCode: String, subjectName: String }],
  password:String,
  branchId:String,
  assignedEnquiries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Enquiry" }], 
  followUps: [
      {
          enquiryId: { type: mongoose.Schema.Types.ObjectId, ref: "Enquiry" },
          status: String, // Dropdown values
          followUpDate: String // Dynamic follow-up date
      }
  ]
});

const Faculty = mongoose.model("Faculty", facultySchema);


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
      employeeId: String, 
      firstName: String, 
      lastName: String 
  }
});

const Timetable = mongoose.model("Timetable", timetableSchema);

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


app.get('/api/branches', async (req, res) => {
    try {
        const branches = await Branch.find();
        res.status(200).json(branches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single branch
app.get('/api/branches/:id', async (req, res) => {
    try {
        const branch = await Branch.findById(req.params.id);
        if (!branch) {
            return res.status(404).json({ message: 'Branch not found' });
        }
        res.status(200).json(branch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new branch
app.post('/api/branches', async (req, res) => {
    try {
        // Check if branch with this ID already exists
        const existingBranch = await Branch.findOne({ branchId: req.body.branchId });
        if (existingBranch) {
            return res.status(400).json({ message: 'Branch with this ID already exists' });
        }

        const branch = new Branch({
            branchId: req.body.branchId,
            branchName: req.body.branchName,
            location: req.body.location
        });

        const newBranch = await branch.save();
        res.status(201).json(newBranch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a branch
app.put('/api/branches/:id', async (req, res) => {
    try {
        const updatedBranch = await Branch.findByIdAndUpdate(
            req.params.id,
            {
                branchName: req.body.branchName,
                location: req.body.location
            },
            { new: true }
        );
        
        if (!updatedBranch) {
            return res.status(404).json({ message: 'Branch not found' });
        }
        
        res.status(200).json(updatedBranch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a branch
app.delete('/api/branches/:id', async (req, res) => {
    try {
        const branch = await Branch.findByIdAndDelete(req.params.id);
        if (!branch) {
            return res.status(404).json({ message: 'Branch not found' });
        }
        res.status(200).json({ message: 'Branch deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
 
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
  

  
  // Create Batch
  
  
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

  app.post("/api/faculties", async (req, res) => {
    try {
      console.log("Received Faculty Data:", req.body);
  
      // Extract password from the request
      let {email, password,branches,employeeId,...otherData } = req.body;
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
  const branchId=branches;
  
      // Create new faculty with hashed password
      const faculty = new Faculty({ ...otherData,email, password,branchId,employeeId });
  
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
        const timetable = await Timetable.find({ 'faculty.employeeId': req.params.facultyId });
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
                "faculty.employeeId": faculty.employeeId,
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
              facultyId: entry.faculty.employeeId,
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
        const salaries = await Salary.find().populate("facultyId", "firstName lastName department employeeId");
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

//   console.log("🔹 Received Login Request:", { email, password });

//   try {
//     let user = await User.findOne({ email }).lean();
//     if (!user) {
//       user = await Faculty.findOne({ email }).lean();
//     }

//     if (!user) {
//       console.log("❌ User Not Found:", email);
//       return res.status(400).json({ msg: "Invalid Credentials (User Not Found)" });
//     }

//     console.log("✅ User Found:", { email: user.email, id: user._id });

//     if (!user.password) {
//       console.log("❌ No Password Found for User:", email);
//       return res.status(400).json({ msg: "Invalid Credentials (No Password)" });
//     }

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log("🔍 Password Match Result:", isMatch);

//     if (!isMatch) {
//       console.log("❌ Wrong Password for:", email);
//       return res.status(400).json({ msg: "Invalid Credentials (Wrong Password)" });
//     }

//     // Assign roles
//     const roles = Array.isArray(user.role) ? user.role : [user.role] || [];

//     // Prepare payload with user information
//     const payload = {
//       id: user._id,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       email: user.email,
//       phone: user.phone,
//       roles,
//       department: user.department,
//       qualification: user.qualification,
//       experience: user.experience,
//       gender: user.gender,
//       employmentType: user.employmentType,
//       status: user.status,
//       employeeId: user.employeeId,
//     };

//     // Generate JWT
//     const token = jwt.sign(payload, process.env.JWT_SECRET || "your_jwt_secret", { expiresIn: "1h" });

//     console.log("✅ Login Successful for:", email);
    
//     // Send token and full user data
//     res.json({ token, user: payload });

//   } catch (err) {
//     console.error("❌ Login Error:", err);
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
      user = await Registration.findOne({ email }).lean();

      // If user is from Registration schema, check regStatus
      if (user && user.regStatus !== "Approved") {
        console.log("❌ Registration Not Approved for:", email);
        return res.status(400).json({ msg: "Your registration is not approved yet." });
      }
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

    // Ensure role is always an array
    const roles = user.role ? (Array.isArray(user.role) ? user.role : [user.role]) : [];

    // Prepare payload with user information
    const payload = {
      _id: user._id, 
      firstName: user.firstName || user.fName,  // Check both fields
      lastName: user.lastName || user.lName,  
      email: user.email.toLowerCase(), // Convert email to lowercase
      phone: user.phone,
      roles, // Ensure roles is always an array
      department: user.department,
      qualification: user.qualification,
      experience: user.experience,
      gender: user.gender,
      employmentType: user.employmentType,
      status: user.status,
      employeeId: user.employeeId,
    };

    // Generate JWT
    const token = jwt.sign(payload, process.env.JWT_SECRET || "your_jwt_secret", { expiresIn: "1h" });

    console.log("✅ Login Successful for:", email);
    
    // Send token and full user data
    res.json({ token, user: payload });

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



// Enquiry Form For Student Create Karthik Schema//

// const enquirySchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   name: { type: String, required: true },
//   mobileNumber: { type: String, required: true },
//   location: { type: String, required: true },
//   qualification: { type: String, required: true },
//   courseType: { type: String, required: true },
//   yearOfPassout: { type: Number, required: true },
//   interestedCourses: { type: String, required: true },
//   CollegeName: { type: String, required: true },
//   HowDidYouCameToKnowAboutCADDESK: { type: String, required: true },
//   IfReferenceMentionTheName: { type: String },
//   Whenyouareplanningtojoincourses: { type: String, required: true },
// }, { timestamps: true });

// const Enquiry = mongoose.model("Enquiry", enquirySchema);
// app.post("/api/enquiry", async (req, res) => {
//   try {
//     const enquiry = new Enquiry(req.body);
//     await enquiry.save();
//     res.status(201).json({ message: "Enquiry data saved successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Error saving Enquiry data" });
//   }
// });

const enquirySchema = new mongoose.Schema({
  branchId:String,
  email: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  location: { type: String, required: true },
  qualification: { type: String, required: true },
  courseType: { type: String, required: true },
  yearOfPassout: { type: Number, required: true },
  interestedCourses: { type: String, required: true },
  CollegeName: { type: String, required: true },
  referralSource: { type: String, required: true },
  ReferenceneName: { type: String },
  joiningPlan: { type: String, required: true },
  status:{ type: String, default:'unassigned' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty" },
}, { timestamps: true });
const Enquiry = mongoose.model("Enquiry", enquirySchema);

app.post("/api/enquiry", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ message: "Enquiry data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving Enquiry data" });
  }
});


//   app.get("/api/enquiries", async (req, res) => {
//     try {
//       const enquiries = await Enquiry.find({ status: "unassigned" });
//       res.json(enquiries);
//     } catch (err) {
//       res.status(500).json({ error: "Server error fetching enquiries" });
//     }
//   });
app.get("/api/enquiries", async (req, res) => {
  try {
    const enquiries = await Enquiry.find(); // Ensure this returns an array
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


app.get("/api/telecallers/:branchId", async (req, res) => {
  try {
    const { branchId } = req.params;
    const telecallers = await Faculty.find({
      branchId,
      role: { $in: ["Telecaller"] },
    });
    res.json(telecallers);
  } catch (err) {
    res.status(500).json({ error: "Server error fetching telecallers" });
  }
});

app.post("/api/assign-enquiry", async (req, res) => {
  try {
    const { enquiryId, telecallerId } = req.body;

    // Update Enquiry
    const enquiry = await Enquiry.findByIdAndUpdate(enquiryId, {
      status: "assigned",
      assignedTo: telecallerId,
    });

    // Update Faculty (Optional: Add assigned enquiries to telecaller's record)
    await Faculty.findByIdAndUpdate(telecallerId, {
      $push: { assignedEnquiries: enquiryId },
    });

    res.json({ message: "Enquiry assigned successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error assigning enquiry" });
  }
});

app.get("/api/assigned-enquiries/:telecallerId", async (req, res) => {
  try {
    const { telecallerId } = req.params;
    const enquiries = await Enquiry.find({ assignedTo: telecallerId });
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ error: "Error fetching assigned enquiries" });
  }
});
app.post("/api/save-followup", async (req, res) => {
  const { enquiryId, userId, status, followUpDates } = req.body;

  try {
    const faculty = await Faculty.findById(userId);
    if (!faculty) return res.status(404).json({ message: "Faculty not found" });

    // Save follow-up details in the faculty schema
    faculty.followUps.push({
      enquiryId,
      status,
      followUpDate: followUpDates[followUpDates.length - 1], // Latest follow-up date
    });

    await faculty.save();
    res.status(200).json({ message: "Follow-up saved successfully" });

  } catch (error) {
    console.error("Error saving follow-up:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/followups/:enquiryId", async (req, res) => {
  try {
      const { enquiryId } = req.params;

      const faculty = await Faculty.findOne(
          { "followUps.enquiryId": enquiryId },
          { "followUps": 1, _id: 0 } // Fetch all follow-ups for this enquiryId
      );

      res.json({ followUps: faculty ? faculty.followUps : [] });
  } catch (error) {
      console.error("Error fetching follow-ups:", error);
      res.status(500).json({ message: "Server error" });
  }
});


app.get("/api/followups", async (req, res) => {
  try {
      const { branchId } = req.query; // Get branchId filter from request

      let filter = {}; // Default filter (fetch all)
      if (branchId) {
          filter = { branchId }; // Apply branch filter if provided
      }

      const followUps = await Faculty.find(filter)
          .populate({
              path: "followUps.enquiryId", 
              select: "firstname lastname mobileNumber interestedCourses branchId"
          })
          .select("followUps branchId"); // Fetch only required fields

      res.json({ followUps });
  } catch (error) {
      console.error("Error fetching follow-ups:", error);
      res.status(500).json({ message: "Server error" });
  }
});

// // Schema & Model
// const RegistrationSchema = new mongoose.Schema({
//   name: String,
//   fatherName: String,
//   contactAddress: String,
//   email: String,
//   qualification: String,
//   collegeName: String,
//   phone: String,
//   courseName: String,
//   courseFee: Number,
//   joiningDate: Date,
// });



// const NewRegistration = mongoose.model("Registration", RegistrationSchema);



// app.post("/api/newrestration", async (req, res) => {
//   try {
//     const newRegistration = new NewRegistration(req.body);
//     await newRegistration.save();
//     res.status(201).json({ message: "Student registered successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to register student" });
//   }
// });







// // Create (POST)
// app.post("/api/newregistration", upload.fields([{ name: "aadhar" }, { name: "resume" }]), async (req, res) => {
//   try {
//       const newRegistration = new Registration({
//           ...req.body,
//           aadhar: req.files["aadhar"] ? req.files["aadhar"][0].path : "",
//           resume: req.files["resume"] ? req.files["resume"][0].path : "",
//       });
//       await newRegistration.save();
//       res.json({ message: "Registration successful!" });
//   } catch (error) {
//       res.status(500).json({ message: "Error saving registration", error });
//   }
// });
app.post("/api/newregistration",
  upload.fields([{ name: "aadhar" }, { name: "resume" }]),
  async (req, res) => {
      try {
          console.log("Received Data:", req.body);
          console.log("Received Files:", req.files);

          // Hash the password before saving
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(req.body.password, salt);

          // Generate new regid using atomic increment
          const count = await Registration.countDocuments();
          const newRegId = `cad${String(count + 1).padStart(2, "0")}`;

          // Store full file paths (uploads\filename.png)
          const aadharPath = req.files?.["aadhar"]?.[0] ? `uploads\\${req.files["aadhar"][0].filename}` : "";
          const resumePath = req.files?.["resume"]?.[0] ? `uploads\\${req.files["resume"][0].filename}` : "";

           // Create new registration entry with formStatus & regStatus
           const newRegistration = new Registration({
            ...req.body,
            regid: newRegId,
            password: hashedPassword, // ✅ Store hashed password
            aadhar: aadharPath, // ✅ Store full file path
            resume: resumePath, // ✅ Store full file path
            formStatus: "Success", // ✅ Automatically set "Success" after form submission
            regStatus: "Pending"   // ✅ Default value "Pending"
        });

          await newRegistration.save();
          res.json({ message: "Registration successful!", regid: newRegId });
      } catch (error) {
          console.error("Error in /api/newregistration:", error);
          res.status(500).json({ message: "Internal Server Error", error: error.message });
      }
  }
);




// Read (GET)
app.get("/api/registrations", async (req, res) => {
  try {
      const registrations = await Registration.find();
      res.json(registrations);
  } catch (error) {
      res.status(500).json({ message: "Error fetching registrations", error });
  }
});

// Get individual registration by ID
app.get("/api/registration/:id", async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }
    res.json(registration);
  } catch (error) {
    res.status(500).json({ message: "Error fetching registration", error });
  }
});


// Update (PUT)
app.put("/api/registration/:id", async (req, res) => {
  console.log("userdata",req.body)
  try {
      let updateData = req.body ;
     
      
      await Registration.findByIdAndUpdate(req.params.id, updateData);
      res.json({ message: "Registration updated successfully!" });
  } catch (error) {
      res.status(500).json({ message: "Error updating registration", error });
  }
});

app.delete("/api/registration/:id", async (req, res) => {
  try {
      console.log("Request to delete registration with ID:", req.params.id);

      // Validate if ID is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
          console.log("Invalid ID format");
          return res.status(400).json({ message: "Invalid ID format" });
      }

      const registration = await Registration.findById(req.params.id);
      if (!registration) {
          console.log("Registration not found!");
          return res.status(404).json({ message: "Registration not found" });
      }

      // Check if files exist before trying to delete
      if (registration.aadhar) {
          const aadharPath = path.resolve(registration.aadhar);
          if (fs.existsSync(aadharPath)) {
              fs.unlinkSync(aadharPath);
              console.log("Deleted Aadhar file:", aadharPath);
          } else {
              console.log("Aadhar file not found, skipping:", aadharPath);
          }
      }

      if (registration.resume) {
          const resumePath = path.resolve(registration.resume);
          if (fs.existsSync(resumePath)) {
              fs.unlinkSync(resumePath);
              console.log("Deleted Resume file:", resumePath);
          } else {
              console.log("Resume file not found, skipping:", resumePath);
          }
      }

      await Registration.findByIdAndDelete(req.params.id);
      console.log("Successfully deleted registration!");
      res.json({ message: "Registration deleted successfully!" });

  } catch (error) {
      console.error("Error deleting registration:", error);
      res.status(500).json({ message: "Error deleting registration", error });
  }
});


// Read (GET)

app.get("/api/course-fee/:courseName", async (req, res) => {
  try {
      const { courseName } = req.params;
     
      const course = await Course.findOne({ courseName });

      if (!course) {
          return res.status(404).json({ error: "Course not found" });
      }
        
      res.json({ fee: course.fee ,Ifee: course.installment});
  } catch (error) {
      console.error("Error fetching course fee:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/timetable/:facultyId", async (req, res) => {
  try {
      const { facultyId } = req.params;

      if (!facultyId) {
          return res.status(400).json({ msg: "Faculty ID is required" });
      }

      // Get today's day (e.g., "Monday")
      const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

      // Fetch timetable entries where facultyId matches
      const timetable = await Timetable.find({ "faculty.employeeId": facultyId });

      // Filter schedules for today only
      const todayTimetable = timetable
          .map(entry => ({
              ...entry.toObject(),
              schedule: entry.schedule.filter(scheduleItem => scheduleItem.day === today)
          }))
          .filter(entry => entry.schedule.length > 0); // Remove empty schedules

      if (!todayTimetable.length) {
          return res.status(404).json({ msg: `No timetable found for today (${today})` });
      }

      res.json(todayTimetable);
  } catch (err) {
      console.error("Error fetching timetable:", err);
      res.status(500).json({ msg: "Internal Server Error" });
  }
});


app.get("/timetable/full/:facultyId", async (req, res) => {
  try {
      const { facultyId } = req.params;

      if (!facultyId) {
          return res.status(400).json({ msg: "Faculty ID is required" });
      }

      // Fetch timetable for the faculty
      const timetable = await Timetable.find({ "faculty.employeeId": facultyId });

      if (!timetable.length) {
          return res.status(404).json({ msg: "No timetable found for this faculty" });
      }

      // Fetch batch names based on batchId
      const batchIds = timetable.map(entry => entry.batchId);
      const batches = await Batch.find({ batchId: { $in: batchIds } }).select("batchId batchName");

      // Map batchId to batchName
      const batchMap = {};
      batches.forEach(batch => {
          batchMap[batch.batchId] = batch.batchName;
      });

      // Attach batch names to the timetable response
      const updatedTimetable = timetable.map(entry => ({
          ...entry.toObject(),
          batchName: batchMap[entry.batchId] || "Unknown Batch"
      }));

      res.json(updatedTimetable);
  } catch (err) {
      console.error("Error fetching full timetable:", err);
      res.status(500).json({ msg: "Internal Server Error" });
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
},{ timestamps: true });

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
app.get("/api/leave", async (req, res) => {
  try {
    const { employeeId } = req.query;
    const leaveRequests = await Leave.find({ employeeId }); // Fetch only for the logged-in user
    res.status(200).json(leaveRequests);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch leave requests" });
  }
});
app.put("/api/leave/:id", async (req, res) => {
  try {
    const { status } = req.body;
    await Leave.findByIdAndUpdate(req.params.id, { status });
    res.json({ message: "Leave status updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update leave status" });
  }
});
app.get("/api/leave/all", async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch leave requests" });
  }
});



const InvoiceSchema = new mongoose.Schema({
  invoiceNo: String,  // Ensure invoiceNo is included
  invoiceDate: String,
  // dueDate: String,
  amount: Number,
  // status: String,
  paymentDate: String,
  paymentMode: String,
  item:String,
  transactionId: String,
  remarks: String
});

const Invoice = mongoose.model('Invoice', InvoiceSchema);

// Generate a unique invoice number
const generateInvoiceNo = async () => {
  const lastInvoice = await Invoice.findOne().sort({ _id: -1 }); // Get the last invoice
  let newInvoiceNo = "CAD01"; // Default if no previous invoices

  if (lastInvoice && lastInvoice.invoiceNo) {
      const lastNumber = parseInt(lastInvoice.invoiceNo.replace("CAD", ""), 10);
      newInvoiceNo = `CAD${String(lastNumber + 1).padStart(2, '0')}`; // Increment and format
  }

  return newInvoiceNo;
};

// Fetch all invoices
app.get('/invoices', async (req, res) => {
  const invoices = await Invoice.find();
  res.json(invoices);
});

// Add a new invoice with auto-generated invoiceNo
app.post('/invoices', async (req, res) => {
  try {
      const invoiceNo = await generateInvoiceNo(); // Generate new invoice number
      const newInvoice = new Invoice({ ...req.body, invoiceNo }); // Assign it
      await newInvoice.save();
      res.json({ message: 'Invoice added', invoiceNo });
  } catch (error) {
      res.status(500).json({ message: 'Error adding invoice', error });
  }
});
app.get('/generate-invoice-no', async (req, res) => {
try {
    const lastInvoice = await Invoice.findOne().sort({ _id: -1 }); // Get last invoice
    let newNumber = "CAD01"; // Default for first invoice

    if (lastInvoice) {
        const lastNo = lastInvoice.invoiceNo.match(/\d+/g); // Extract the number part
        const nextNo = parseInt(lastNo) + 1; // Increment number
        newNumber = `CAD${String(nextNo).padStart(2, '0')}`; // Format like CAD01, CAD02...
    }

    res.json({ invoiceNo: newNumber }); // Send the new invoice number
} catch (error) {
    console.error("Error generating invoice number:", error);
    res.status(500).json({ error: "Server error" });
}
});


















app.get('/getFacultiesBySubjectAndBranch/:subjectCode/:branchId', async (req, res) => {
  const { subjectCode, branchId } = req.params;

  try {
      // Log incoming request parameters
      console.log('Received Request Parameters:', { subjectCode, branchId });

      // Validate input
      if (!subjectCode || !branchId) {
          return res.status(400).json({ 
              message: 'Subject Code and Branch ID are required' 
          });
      }

      // Detailed query with multiple checks
      const faculties = await Faculty.find({
          $and: [
              { 'branchId': branchId },  // Match branch
              { 'subjects': { $elemMatch: { subjectCode: subjectCode } } } // Match subject
          ]
      })
      .populate('branchId', 'branchName')  // Optional: populate branch details
      .populate('subjects', 'subjectName'); // Optional: populate subject details

      // Log found faculties
      console.log('Found Faculties:', faculties.length);

      // Check if any faculties found
      if (faculties.length === 0) {
          return res.status(404).json({ 
              message: 'No faculties found for this subject and branch',
              details: {
                  subjectCode,
                  branchId
              }
          });
      }

      // Transform faculty data if needed
      const facultyResponse = faculties.map(faculty => ({
          employeeId: faculty.employeeId,
          firstName: faculty.firstName,
          lastName: faculty.lastName,
          email: faculty.email,
          branch: faculty.branch?.branchName,
          subjects: faculty.subjects.map(s => s.subjectName)
      }));

      res.status(200).json(facultyResponse);

  } catch (error) {
      // Comprehensive error logging
      console.error('Faculty Retrieval Error:', {
          message: error.message,
          stack: error.stack,
          name: error.name
      });

      // Differentiate between different types of errors
      if (error.name === 'ValidationError') {
          return res.status(400).json({ 
              message: 'Validation Error', 
              errors: error.errors 
          });
      }

      // Database connection or query error
      res.status(500).json({ 
          message: 'Internal Server Error',
          error: 'Unable to retrieve faculties'
      });
  }
});

const storage1 = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload1 = multer({ storage: storage1 });

app.post('/api/record-payment/:id', upload1.single('receiptDocument'), async (req, res) => {
  try {
    const { id } = req.params;
    const { installmentIndex, paidAmount, paidDate, receivedBy, transactionId } = req.body;
    
    // Find the registration
    const registration = await Registration.findById(id);
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }
    
    // Ensure paymentsPlan array exists
    if (!registration.paymentsPlan) {
      registration.paymentsPlan = [];
    }
    
    // Get the payment plan for the specified index
    if (!registration.paymentsPlan[installmentIndex]) {
      return res.status(400).json({ message: 'Payment plan not found for this installment' });
    }
    
    // Update payment details
    registration.paymentsPlan[installmentIndex].status = 'Paid';
    registration.paymentsPlan[installmentIndex].paidDate = paidDate;
    registration.paymentsPlan[installmentIndex].paidAmount = paidAmount;
    registration.paymentsPlan[installmentIndex].receivedBy = receivedBy;
    registration.paymentsPlan[installmentIndex].transactionId = transactionId;
    
    // If receipt file was uploaded
    if (req.file) {
      registration.paymentsPlan[installmentIndex].receiptPath = req.file.path;
    }
    
    // Save the updated registration
    await registration.save();
    
    res.status(200).json(registration);
  } catch (error) {
    console.error('Error recording payment:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
app.get("/api/registration/:id", async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }
    res.json(registration);
  } catch (error) {
    res.status(500).json({ message: "Error fetching registration", error });
  }
});
app.get("/api/registrations/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const registrations = await Registration.find({ _id: userId }); // Assuming `_id` is the user ID
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching registrations", error });
  }
});

app.put("/api/update-installment/:registrationId/:installmentId", async (req, res) => {
  try {
    const { registrationId, installmentId } = req.params;
    
    const updatedRegistration = await Registration.findOneAndUpdate(
      { _id: registrationId, "paymentsPlan._id": installmentId },
      {
        $set: {
          "paymentsPlan.$.status": "Paid",
          "paymentsPlan.$.paidDate": new Date().toISOString(),
          "paymentsPlan.$.transactionId": req.body.transactionId || "TXN" + Date.now(),
          "paymentsPlan.$.paidAmount": req.body.amount,
        },
      },
      { new: true }
    );

    if (!updatedRegistration) {
      return res.status(404).json({ error: "Registration or Installment not found" });
    }

    res.json({ message: "Installment updated to Paid", updatedRegistration });
  } catch (error) {
    console.error("Error updating installment:", error);
    res.status(500).json({ error: "Server error" });
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





