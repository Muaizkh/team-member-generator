const Employee = require('../lib/Employee');

test('getName returns employee name', () => {
    const employee = new Employee("muaiz", 12, "muaiz@gmail.com");

    expect(employee.getName()).toBe("muaiz");
});

test('getId returns employee id', () => {
    const employee = new Employee("muaiz", 12, "muaiz@gmail.com");

    expect(employee.getId()).toBe(12);
});

test('getEmail returns employee email', () => {
    const employee = new Employee("muaiz", 12, "muaiz@gmail.com");

    expect(employee.getEmail()).toBe("muiaz@gmail.com");
});
test('getRole returns employee role', () => {
    const employee = new Employee("muiaz", 12, "muaiz@gmail.com");

    expect(employee.getRole()).toBe("Employee");
});
