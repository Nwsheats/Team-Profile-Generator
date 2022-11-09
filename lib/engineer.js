const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, type, gitHub){
      super(name, id, email, type)
      this.gitHub = gitHub;
  
    }

getGitHub() {
    return this.gitHub
};

getRole() {
    return 'Engineer'
}

}

module.exports = Engineer;