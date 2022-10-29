const mChoices = [
    {
      type: 'input',
      name: 'name',
      message: 'Manager name:'
    },
    {
      type: 'input',
      name: 'id',
      message: "Manager's ID:"
    },
    {
      type: 'input',
      name: 'email',
      message: "Manager's email:"
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Office number of your manager:'
    }
  ]
  
  const eChoices = [
    {
      type: 'list',
      name: 'role',
      message: "Employee's role",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: 'Employee name:'
    },
    {
      type: 'input',
      name: 'id',
      message: "Employee ID:"
    },
    {
      type: 'input',
      name: 'email',
      message: "Employee Email:"
    },
    {
      type: 'input',
      name: 'github',
      message: "Employee Github:",
      when: input => input.role === 'Engineer'
    },
    {
      type: 'input',
      name: 'school',
      message: "Intern's School:",
      when: input => input.role === 'Intern'
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Add another team member?',
      default: false
    }
  ]
  
  module.exports = { mChoices, eChoices }