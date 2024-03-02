const Student = require("../models/student-models");

const getHomePage = (req, res, next) => {
  Student.fetchAll()
    .then(([row1, row2]) => {
      //   console.log(row1);
      res.render("home", { pageTitle: "Home Page", student: row1 });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAddStudentPage = (req, res, next) => {
  res.render("add-student", { pageTitle: "Add Student" });
};
const postAddProduct = (req, res, next) => {
  const eno = parseInt(req.body.eno);
  const name = req.body.name;
  const course = req.body.course;
  const fee = parseInt(req.body.fee);

  const student = new Student(eno, name, course, fee);
  student
    .save()
    .then((data) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(req.body);
};

const getDeleteStudent = (req, res, next) => {
  //   console.log(req.query.eno);
  const eno = req.query.eno;
  Student.deleteStudent(eno)
    .then((data) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUpdateStudent = (req, res, next) => {
  const eno = req.query.eno;
  // console.log(eno);
  Student.getDataByEno(eno)
    .then((data) => {
      // console.log(data);
      res.render("update", { pageTitle: "Update Student", student: data[0] });
    })
    .catch((err) => {
      console.log(err);
    });
};

const postUpdateStudent = (req, res, next) => {
  // console.log(req.body);
  const eno = parseInt(req.body.eno);
  const name = req.body.name;
  const course = req.body.course;
  const fee = parseInt(req.body.fee);
  Student.updateStudent(eno, name, course, fee)
    .then((data) => {
      // console.log(data)
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getHomePage,
  getAddStudentPage,
  postAddProduct,
  getDeleteStudent,
  getUpdateStudent,
  postUpdateStudent,
};
