// commented out test that did not work and tried to rewrite it
// const Employee = require("../lib/Employee");

// test ("employee", () => {
//         it('should return name', () => {
//             const name = 'Muaiz';
//             const employeeLogin = new Employee(name);
//             expect(employeeLogin.name).toBe(name); 
//         })
//         it("throw back employee id", () => {
//             let number = 0;
//             const employee =new Employee ('Muaiz number', 'muaiz@gmail.com');
//             expect(employee.getId ()).toEqual(number);
//         })
//         it ('should return employee email', () => {
//             const email = 'muaiz@gmail.com';
//             const employee = new Employee ('Muaiz', 22, email);
//             expect(employee.getEmail()).toEqual(email);
//         })
//         it('capture role of the employee', () =>{
//             const employee = new Employee('Muaiz', 22, 'muaiz@gmail.com');
//             expect(employee.getRole()).toEqual('Employee');
//         })

//         });


const Employee = require("../lib/Employee");

// spacing test and actually using keywords to keep code clean and clear and repeating the tests for different areas (ID, name, email)
test(' getName returns employee name', () => {
    const employee = new Employee("Muaiz", 1, 'muiaz@hotmail.com');

    except (employee.getName()).toBe('Muaiz');
});

test('getId returns employee id', () => {
    const employee = new Employee("Muaiz", 1, 'muiaz@hotmail.com');

    except (employee.getId()).toBe('1');
});

test('getEmail returns employee email', () => {
    const employee = new Employee("Muaiz", 1, 'muiaz@hotmail.com');

    except (employee.getEmail()).toBe('muiaz@hotmail.com');
});

test('getRole returns employee role', () => {
    const employee = new Employee("Muaiz", 1, 'muiaz@hotmail.com');

    except (employee.getRole()).toBe('Employee');
});