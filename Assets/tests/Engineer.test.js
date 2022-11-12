const Engineer = require('../lib/Engineer');

describe('engineer', () =>{
    const gituhb = 'Muaizkh';
    it ('should get github of engineer role', ()=>{
        const engineer = new Engineer('Muaiz', 21, 'muaiz@gmail.com', gituhb);
        expect(engineer.getGithub()).toEqual(gituhb);
    })
    it('should get role of engineer ', ()=>{
        const employee = new Engineer ('Muaiz', 21, 'muaiz@gmail.com', gituhb);
        expect(engineer.getRole ()).toEqual('Engineer');
    })
})