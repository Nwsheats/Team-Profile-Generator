const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber){
      super(name, id, email, officeNumber)
      this.officeNumber = officeNumber;
  
    }

getRole() {
    return 'Manager'
}

}