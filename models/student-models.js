const db = require("../util/database");
module.exports = class Student {
  constructor(eno, name, course, fee) {
    this.eno = eno;
    this.name = name;
    this.course = course;
    this.fee = fee;
  }
  save() {
    return db.execute(
      "INSERT INTO data (eno,name,course,fee) value (?,?,?,?)",
      [this.eno, this.name, this.course, this.fee]
    );
  }
  static deleteStudent(eno) {
    return db.execute(`DELETE FROM data WHERE eno=${eno} `);
  }

  static getDataByEno(eno) {
    return db.execute("SELECT * FROM data WHERE eno=?", [eno]);
  }

  static updateStudent(seno, sname, scourse, sfee) {
    return db.execute('UPDATE data SET name=?,course=?,fee=? WHERE eno=?',[sname,scourse,sfee,seno])
  }

  static fetchAll() {
    return db.execute("SELECT * from data");
  }
};
