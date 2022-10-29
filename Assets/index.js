const HTML = require('./html.js')

const fs = require ('fs');
const inquirer = require ('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { eChoices, mChoices } = require('./lib/choices');
// team array
const tArray = [];
// prompts for the manager
const addManager = () => {
    return inquirer.createPromptModule(mChoices).then(managerInput => {const {name, id, email, officeNumber} = managerInput;
const manager = new Manager(name, id, email, officeNumber);
tArray.push(manager);
})
};
// prompts for the employee
const addEmployee = () => {
    return inquirer.createPromptModule(eChoices).then(employeeInfo => {
        let {name, id, email, role, github, school, employeeAdd} = employeeInfo
        let employee = 

        role === 'Engineer'
        ? new Engineer (name, id, email, github)
        : new Intern (name, id, email, school);
        tArray.push(employee);

        if (employeeAdd) {
            return addEmployee();
        }
        return tArray
        const writeFile = data => {
            fs.writeFile('./dist/index.html', data, err => {
              if (err) {
                console.log(err)
                return;
              } else {
                console.log(
                  'Success! Your team has been generated and updated!'
                );
              }
            })
          };
          
          addManager()
            .then(addEmployee)
            .then(teamArray => HTML(tArray))
            .then(pageHTML => writeFile(pageHTML))
            .catch(err => console.log(err));
})
};