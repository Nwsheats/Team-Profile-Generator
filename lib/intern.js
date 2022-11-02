const Employee = require('./employee');

class Intern extends Employee {
    constructor(school){
      super(name, id, email, school)
      this.school = school;
  
    }

getSchool() {};

getRole() {
    return 'Intern'
}

}