// different functions (array) for each role, because they have different questions
// different inquirer prompt for each one


// function for adding each class, building the team
// need to call functions again later in code, so it has a loop to it

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require("fs");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const generateHTML = require('./generateHTML');

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


async function init() {
    let employeeAnswers = {}
    let otherAnswers = {}
    await inquirer.prompt(employeeQuestions).then(data => {employeeAnswers = data});
    await inquirer.prompt(otherQuestions).then(data => {otherAnswers = data});
    console.log(employeeAnswers, otherAnswers);
    const newManager = new Manager(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, 'Manager', employeeAnswers.officeNum);
    const employeeList = []
    employeeList.push(newManager);
    otherAnswers.newEmployee.forEach(e => {
        if (e.team === 'Engineer') {
        const newEngineer = new Engineer(e.name, e.id, e.email, 'Engineer', e.gitHub);
        employeeList.push(newEngineer)
        console.log(employeeList)
        } else {
            const newIntern = new Intern(e.name, e.id, e.email, 'Intern', e.school)
            employeeList.push(newIntern)
            console.log(employeeList)
        }
    })
    fs.writeFile('index.html', generateHTML(employeeList), (err) =>
        err ? console.error(err) : console.log('Success!')
    )};


init();