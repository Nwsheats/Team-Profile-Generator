const Employee = require('./employee');

class Engineer extends Employee {
    constructor(gitHub){
      super(name, id, email, gitHub)
      this.gitHub = gitHub;
  
    }

getGitHub() {};

getRole() {
    return 'Engineer'
}

}