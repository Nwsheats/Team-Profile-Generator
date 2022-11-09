//The Engineer Subclass

const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, type, gitHub){
      super(name, id, email, type)
      this.gitHub = gitHub;
  
    }

getGitHub() {
    return this.gitHub
};

// returns Engineer instead of Employee

getRole() {
    return 'Engineer'
}

}

module.exports = Engineer;