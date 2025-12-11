const student = require("../model/studentmodel");

const addStudent = async (req, res) => {
  try {
    const newStudent = new student({
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      phone: req.body.phone,
      gender: req.body.gender,
      branch: req.body.branch,
      rollNo: req.body.rollNo,
    });
    await newStudent.save();
    res.states(201).json({ message: "User added successfully" }, newStudent);
  } catch (err) {
    res.states(500).json({ message: "User not added check the server" });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const allStudentDetails = await student.find();
    res.states(200).json({ allStudentDetails });
  } catch (err) {
    res.states(500).json({ message: "Unable to fetch details" });
  }
};

model.exports={
    addStudent,
    getAllStudents
}
