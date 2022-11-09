// defining consts with requirements to import other elements into this file

// inquirer loop is an npm package that adds functionality to inquirer by allowing for a question or series of questions to loop endlessly.
// inquirer loop: https://www.npmjs.com/package/inquirer-loop

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require("fs");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const generateHTML = require('./generateHTML');


// employeeQuestions array, which is basically the first four questions that apply to the Team Manager

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
    {
        type: 'input',
        message: 'Team Manager Office Number: ',
        name: 'officeNum',
    },
]


// the otherQuestions array, which contains the loop, which verifies if a new Employee is added
// After that, there is an Engineer or Intern selection
// The first three questions are the same
// The last two questions use WHEN in order to only show up when either Engineer or Intern are selected.

const otherQuestions = [
    {
        type: 'loop',
        message: 'Would you like to add another employee? ',
        name: 'newEmployee',
        questions: [
            {
                type: 'list',
                message: 'Who else is on your team?',
                name: 'team',
                choices: ['Engineer', 'Intern'],
            },
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
            {
                type: 'input',
                message: 'Engineer GitHub Username: ',
                name: 'gitHub',
                when: (employee) => employee.team === 'Engineer' 
            },
            {
                type: 'input',
                message: 'Intern School: ',
                name: 'school',
                when: (employee) => employee.team === 'Intern' 
            },
        ]
    }   
];


// async function with await on inquirer prompts so that the prompts don't act at the same time.

// creates consts for a New Manager initially and pushes that data to the EmployeeList array.

// uses a ForEach statement to work through the otherAnswers for each newEmployee selected and either creating and pushing a new Engineer or a new Intern

// writeFile sends the employeeList to the generateHTML function on the generateHTML.js document.

async function init() {
    let employeeAnswers = {}
    let otherAnswers = {}
    await inquirer.prompt(employeeQuestions).then(data => {employeeAnswers = data});
    await inquirer.prompt(otherQuestions).then(data => {otherAnswers = data});
    const newManager = new Manager(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, 'Manager', employeeAnswers.officeNum);
    const employeeList = []
    employeeList.push(newManager);
    otherAnswers.newEmployee.forEach(e => {
        if (e.team === 'Engineer') {
        const newEngineer = new Engineer(e.name, e.id, e.email, 'Engineer', e.gitHub);
        employeeList.push(newEngineer)
        } else {
            const newIntern = new Intern(e.name, e.id, e.email, 'Intern', e.school)
            employeeList.push(newIntern)
        }
    })
    fs.writeFile('index.html', generateHTML(employeeList), (err) =>
        err ? console.error(err) : console.log('Success!')
    )};


init();