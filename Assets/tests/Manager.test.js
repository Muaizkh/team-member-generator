// commented out tests that did not work
// const Manager = require('../lib/Manager');

// describe ('manager', () =>{
//     it('should create an officeNumber', ()=>{
//         let number = 1;
//         const manager = new Manager('Muaiz', 24, 'muaiz@gmail.com', number);
//         expect(manager.officeNumber)
// .toEqual(number);
//     })
//     it('should get role of employee', ()=>{
//         const manager = new Manager('Muaiz', 24, 'muaiz@gmail.com', 1);
//         expect(manager.getRole()).toEqual('Manager');
//     })
// })

const Manager = require('../lib/Manager');

test('getRole returns manager role', () => {
    const manager = new Manager("muaiz", 12, "muiaz@gmail.com", 123);

    expect(manager.getRole()).toBe("Manager");
});

test('officeNumber is set', () => {
    const manager = new Manager("muaiz", 123, "muiaz@gmail.com", 123);

    expect(manager.officeNumber).toBe(123);
});
