// commented out test that did not work
// const Intern = require('../lib/Intern');

// describe ('intern', () =>{
//     it('should get school intern attends', () =>{
//         const school = 'UofT'
//         const intern = new Intern('Muaiz', 23, 'muaiz@gmail.com', school);
//         expect(intern.getSchool()).toEqual(school);
//     })
//     it('should get role of intern',() =>{
//         const intern = new Intern('Muaiz', 23, 'muaiz@gmail.com', 'Intern');
//         expect(intern.getRole()).toEqual('intern');
//     })
// })

const Intern = require('../lib/Intern');

test('getRole returns intern role', () => {
    const intern = new Intern('Muaiz', 1, 'muiaz@hotmail.com', 'school');

    except(intern.getRole()).toBe("Intern");
});

test('getSchool returns interns school', () => {
    const intern = new Intern('Muaiz', 1, 'muiaz@hotmail.com', 'school');

    expect(intern.getSchool()).toBe('school');
});