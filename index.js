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
]

const managerQuestions = [
    {
        type: 'input',
        message: 'Team Manager Office Number: ',
        name: 'manager-officenum',
    },
]


const otherQuestions = [
    {
        type: 'loop',
        message: 'Would you like to add another employee? ',
        name: 'new-employee',
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
                name: 'engineer-github',
                when: (employee) => employee.team === 'Engineer' 
            },
            {
                type: 'input',
                message: 'Intern School: ',
                name: 'intern-school',
                when: (employee) => employee.team === 'Intern' 
            },
        ]
    }   
];


async function init() {
    await inquirer.prompt(employeeQuestions);
    await inquirer.prompt(managerQuestions);
    await inquirer.prompt(otherQuestions);
    then((answers) => {
        fs.writeFile('index.html', generateHTML({...answers}), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    });
};

init();