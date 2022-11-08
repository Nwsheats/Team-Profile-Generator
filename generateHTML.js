const Employee = require("./lib/employee");

function generateHTML(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="./src/bootstrap.min.css">
        <title>Team Dashboard</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-info d-flex">
            <div class="row w-100 justify-content-center">
            <h1 class="text-center text-white">My Team</h1>
            </div>
          </nav>
        <main class="d-flex">
        <section class="w-100 column">
            <section class="w-100 h-100 my-4 column">
                <div class="container h-100">
                    <div class="row h-50">
                    ${answers.map((answer)=> {
                        console.log(answer)
                        // if (Employee.type === 'Manager') {
                            return generateManager(answer), generateEngineer(answer), generateIntern(answer)
                        // // }
                        // // if (Employee.type === 'Engineer') {
                        //     return generateEngineer(answer)
                        // // }
                        // if (Employee.type === 'Intern') {
                        //     return generateIntern(answer)
                        // } else {
                        //     return
                        // }
                    }
                        )}
                    </div>
                </div>
            </section>
        </main>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="script.js"></script>
    </html>`;
}




function generateManager(Manager) {
    return `<div class="col-3 m-3 bg-primary border text-dark">
    <p>${Manager.name}</p>
    <p>${Manager.id}</p>
    <p>${Manager.email}</p>
    <p>${Manager.officeNumber}</p>
    </div>
    `
}


function generateEngineer(Engineer) {
    return `<div class="col-3 m-3 bg-primary border text-dark">
    <p>${Engineer.name}</p>
    <p>${Engineer.id}</p>
    <p>${Engineer.email}</p>
    <p>${Engineer.gitHub}</p>
    </div>
    `
}


function generateIntern(Intern) {
    return `<div class="col-3 m-3 bg-primary border text-dark">
    <p>${Intern.name}</p>
    <p>${Intern.id}</p>
    <p>${Intern.email}</p>
    <p>${Intern.school}</p>
    </div>
    `
}


//create a for loop to work through all of the data

module.exports = generateHTML;


{/* <div class="col-3 m-3 bg-primary border text-dark">
</div>
<div class="col-3 m-3 bg-primary border text-dark">
</div>
<div class="col-3 m-3 bg-primary border text-dark">
</div>
<div class="col-3 m-3 bg-primary border text-dark">
</div>
<div class="col-3 m-3 bg-primary border text-dark">
</div> */}