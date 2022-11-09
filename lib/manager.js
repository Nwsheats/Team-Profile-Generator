// The Manager Subclass

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, type, officeNumber){
      super(name, id, email, type)
      this.officeNumber = officeNumber;
  
    }

// returns Manager instead of Employee

getRole() {
    return 'Manager'
}

}

module.exports = Manager;