const express = require("express");
const router = express.Router();
const student_controllers = require("../controllers/student-controller");

router.get("/", student_controllers.getHomePage);
router.get("/add-student", student_controllers.getAddStudentPage);
router.post("/add-student",student_controllers.postAddProduct)
router.get('/delete',student_controllers.getDeleteStudent)
router.get('/update',student_controllers.getUpdateStudent)
router.post('/update-student',student_controllers.postUpdateStudent)
module.exports = router;
