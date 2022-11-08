function generateHTML(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="./bootstrap.min.css">
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
                        <div class="col-3 m-3 bg-primary border text-dark">
                        </div>
                        <div class="col-3 m-3 bg-primary border text-dark">
                        </div>
                        <div class="col-3 m-3 bg-primary border text-dark">
                        </div>
                        <div class="col-3 m-3 bg-primary border text-dark">
                        </div>
                        <div class="col-3 m-3 bg-primary border text-dark">
                        </div>
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

module.exports = generateHTML;
