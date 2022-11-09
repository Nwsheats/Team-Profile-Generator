const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, type, officeNumber){
      super(name, id, email, type)
      this.officeNumber = officeNumber;
  
    }

getRole() {
    return 'Manager'
}

}

module.exports = Manager;