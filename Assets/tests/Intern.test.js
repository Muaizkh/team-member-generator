const Intern = require('../lib/Intern');

describe ('intern', () =>{
    it('should get school intern attends', () =>{
        const school = 'UofT'
        const intern = new Intern('Muaiz', 23, 'muaiz@gmail.com', school);
        expect(intern.getSchool()).toEqual(school);
    })
    it('should get role of intern',() =>{
        const intern = new Intern('Muaiz', 23, 'muaiz@gmail.com', 'Intern');
        expect(intern.getRole()).toEqual('intern');
    })
})