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

test('getRole returns Manager role', () => {
    const manager = new Manager ('Muaiz', 1, 'muiaz@hotmail.com', '1');

    except(manager.getRole()).toBe("Manager");
});

test('setting up officeNumeber', () => {
    const manager = new Manager ('Muaiz', 1, 'muiaz@hotmail.com', '1');

    except(manager.officeNumber).toBe("1");
});
