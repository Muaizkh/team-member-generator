const Manager = require('../lib/Manager');

describe ('manager', () =>{
    it('should create an officeNumber', ()=>{
        let number = 1;
        const manager = new Manager('Muaiz', 24, 'muaiz@gmail.com', number);
        expect(manager.officeNumber)
.toEqual(number);
    })
    it('should get role of employee', ()=>{
        const manager = new Manager('Muaiz', 24, 'muaiz@gmail.com', 1);
        expect(manager.getRole()).toEqual('Manager');
    })
})