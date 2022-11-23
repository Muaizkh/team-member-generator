const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const { url } = require('inspector');

const dir = './dist';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

// questions given to engineers
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your given employee ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your github username?"
    }];

    // questions given to interns 
    const internQuestions = [
      {
          type: 'input',
          name: 'name',
          message: "What is your name?",
      },
      {
          type: 'input',
          name: 'id',
          message: "What is your given employee ID?"
      },
      {
          type: 'input',
          name: 'email',
          message: "What is your email?"
      },
      {
          type: 'input',
          name: 'school',
          message: "What school do you attend?"
      }];

      // question given to manager's

      const managerQuestions = 
      [
        {
            type: 'input',
            name: 'name',
            message: "What is your name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your given employee ID?",
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "What is your email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your office number?",
        }];
// question for adding employees through the backend
        const addingEmployees = [
          {
              type: 'list',
              name: 'role',
              message: 'What is the role of the employee that you are adding? Select cancel option to quit out of this menu',
              choices: [
                  {
                      value: 'engineer',
                  },
                  {
                      value: 'intern',
                  },
                  {
                      value: 'cancel',
                  },
              ]
          },
      ];

      async function createTeams() {
        let managerAnswers = await inquirer.prompt(managerQuestions);
        const manager = new Manager(managerAnswers.name, managerAnswers.id,
            managerAnswers.emailAddress, managerAnswers.officeNumber);
        const employeeArray = [manager];
    
        let employeeSelection = await inquirer.prompt(addingEmployees);
        while (employeeSelection.roleType !== "cancel") {
            if (employeeSelection.roleType == "engineer") {
                let engineerSelection = await inquirer.prompt(engineerQuestions);
                const engineer = new Engineer(engineerSelection.name, engineerSelection.id,
                    engineerSelection.email, engineerSelection.github);
                employeeArray.push(engineer);
    
            }
            else if (employeeSelection.roleType == "intern") {
                let internSelection = await inquirer.prompt(internQuestions);
                const intern = new Intern(internSelection.name, internSelection.id,
                    internSelection.email, internSelection.school);
                employeeArray.push(intern);
            }
    
            employeeSelection = await inquirer.prompt(addingEmployees);
        }
        writeToFile(generateHTML(employeeArray)); }

        function writeToFile(data) {
          fs.writeFile("./dist/sample.html", data, (err) =>
              err ? console.log(err) : console.log(`Successfully created sample.html`)
      
          );
      }
// finishes the creation of the team on the backend and creates and HTML file that appends information gathered to the front end 
      createTeams()
    .then(() => {
        console.log("Created team");
    })
    .catch(err => console.log(err));
// added link reference and outline of how the HTML should look while also adding information gathered in the backend and pushing it to the front
const generateHTML = (employeeArray) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <style>
            .navbar-custom {
                background-color: rgb(250, 75, 125);
            }
    
            .navbar-brand {
                color: blue;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <nav class="navbar navbar-custom ">
                <div class="container-fluid justify-content-center">
                    <a class="navbar-brand" href="#">The Team</a>
                </div>
            </nav>
        </div>
        <div class="card-deck row row-cols-1 row-cols-md-2">
        ${createCards(employeeArray)}
     </div>
 </body>
 
 </html>`;
}

// creates an employee card which shows the information that is required (role, email, ID) and then appends it into the HTML gengerated previously 
function createCards(employeeArray) {
  let cardstring = "";
  for (let i = 0; i < employeeArray.length; i++) {
      const card = `<div class="card  col mb-4">
          <div class="card-body">
              <h4>Name: ${employeeArray[i].getName()}</h4>
              <h5 class="card-title">Role: ${employeeArray[i].getRole()}</h5>
              <p class="card-text">Id: ${employeeArray[i].getId()}</p>
              <p> Email:<a href="mailto:${employeeArray[i].getEmail()}">${employeeArray[i].getEmail()}</a></p>
              ${employeeExtras(employeeArray[i])}
          </div>
      </div>`;
      cardstring = cardstring + card;
  }
//  Employee extras is the extra infomration that may be added such as Github, School, and Office Number that is specific for each different role. 
  return cardstring; }
  function employeeExtras(employeeItem) {
    if (employeeItem.getRole() == "Engineer") {
        return `<p> Github:<a target="_blank" href="https://github.com/${employeeDetails.getGithub()}">${employeeItem.getGithub()}</a></p>`
    }

    else if (employeeItem.getRole() == "Intern") {
        return `<p> School: ${employeeItem.getSchool()} </p>`;

    }

    else if (employeeItem.getRole() == "Manager") {
        return `<p> Office Number: ${employeeItem.officeNumber}</p>`
    }

}
