const express = require("express");
const router = express.Router();
const {
  addStudent,
  getAllStudents,
} = require("../controller/StudentController");


router.post("/addstudent", addStudent);
router.get("/getallstudents", getAllStudents)



model.exports=router;