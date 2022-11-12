const Employee = require("../lib/Employee");

describe("employee", () => {
        it('should return name', () => {
            const name = 'Muaiz';
            const employeeLogin = new Employee(name);
            expect(employeeLogin.name).toBe(name); 
        })
        it("throw back employee id", () => {
            let number = 0;
            const employee =new Employee ('Muaiz number', 'muaiz@gmail.com');
            expect(employee.getId ()).toEqual(number);
        })
        it ('should return employee email', () => {
            const email = 'muaiz@gmail.com';
            const employee = new Employee ('Muaiz', 22, email);
            expect(employee.getEmail()).toEqual(email);
        })
        it('capture role of the employee', () =>{
            const employee = new Employee('Muaiz', 22, 'muaiz@gmail.com');
            expect(employee.getRole()).toEqual('Employee');
        })

        });