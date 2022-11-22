// test commented out because it doesn't work

// const Engineer = require('../lib/Engineer');

// describe('engineer', () =>{
//     const gituhb = 'Muaizkh';
//     it ('should get github of engineer role', ()=>{
//         const engineer = new Engineer('Muaiz', 21, 'muaiz@gmail.com', gituhb);
//         expect(engineer.getGithub()).toEqual(gituhb);
//     })
//     it('should get role of engineer ', ()=>{
//         const employee = new Engineer ('Muaiz', 21, 'muaiz@gmail.com', gituhb);
//         expect(engineer.getRole ()).toEqual('Engineer');
//     })
// })

const Engineer = require('../lib/Engineer');

test('getRole returns engineer role', () => {
    const engineer = new Engineer("Muaiz", 1, 'muiaz@hotmail.com', 'muiaz');

    expect(engineer.getRole()).toBe("Engineer");
});

// this returns the "extras" that are attached to each individual role
test('getGithub returns github username', () => {
    const engineer = new Engineer("Muaiz", 1, 'muiaz@hotmail.com', 'muiaz');

    expect(engineer.getGithub()).toBe("bob289");
});