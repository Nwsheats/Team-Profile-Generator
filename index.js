// different functions (array) for each role, because they have different questions
// different inquirer prompt for each one


// function for adding each class, building the team
// need to call functions again later in code, so it has a loop to it

const Employee = require('./lib/employee');
const inquirer = require('inquirer');
const fs = require("fs");

const employeeQuestions = [
    {
        type: 'input',
        message: 'Name: ',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Email Address: ',
        name: 'email',
    },
]

const managerQuestions = [
    {
        type: 'input',
        message: 'Team Manager Office Number: ',
        name: 'manager-officenum',
    },
    {
        type: 'list',
        message: 'Who else is on your team?',
        name: 'team-prompt',
        choices: ['Engineer', 'Intern', 'None (Finish Building Team)'],
    },
]


const engineerQuestions = [
    {
        type: 'input',
        message: 'Engineer GitHub Username: ',
        name: 'engineer-github',
    },
    {
        type: 'list',
        message: 'Who else is on your team?',
        name: 'team-prompt',
        choices: ['Engineer', 'Intern', 'None (Finish Building Team)'],
    },
]

const internQuestions = [
    {
        type: 'input',
        message: 'Intern School: ',
        name: 'intern-school',
    },
    {
        type: 'list',
        message: 'Who else is on your team?',
        name: 'team-prompt',
        choices: ['Engineer', 'Intern', 'None (Finish Building Team)'],
    },
]


function init() {
    inquirer.prompt(employeeQuestions, inquireManager())
    then((answers) => {
        fs.writeFile('index.html', generateHTML({...answers}), (err) =>
        err ? console.error(err) : console.log('Success!')
      );
    });
};



function inquireManager() {
    inquirer.prompt(managerQuestions)
    if (managerQuestions.choices === 'Engineer') {
        inquireEngineer
    } else if (managerQuestions.choices === 'Intern') {
        inquireIntern
    } else {
        return
    }
    then((answers) => {
        fs.writeFile('index.html', generateHTML({...answers}), (err) =>
        err ? console.error(err) : console.log('Success!')
      );
    });
};

function inquireEngineer() {
    inquirer.prompt(employeeQuestions, engineerQuestions)
    if (engineerQuestions.choices === 'Engineer') {
        inquireEngineer
    } else if (engineerQuestions.choices === 'Intern') {
        inquireIntern
    } else {
        return
    }
    then((answers) => {
        fs.writeFile('index.html', generateHTML({...answers}), (err) =>
        err ? console.error(err) : console.log('Success!')
      );
    });
};


function inquireIntern() {
    inquirer.prompt(employeeQuestions, internQuestions)
    if (internQuestions.choices === 'Engineer') {
        inquireEngineer
    } else if (internQuestions.choices === 'Intern') {
        inquireIntern
    } else {
        return
    }
    then((answers) => {
        fs.writeFile('index.html', generateHTML({...answers}), (err) =>
        err ? console.error(err) : console.log('Success!')
      );
    });
};


init();