// The Intern Subclass

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, type, school){
      super(name, id, email, type)
      this.school = school;
  
    }

getSchool() {
    return this.school
};

// returns Intern instead of Employee

getRole() {
    return 'Intern'
}

}

module.exports = Intern;