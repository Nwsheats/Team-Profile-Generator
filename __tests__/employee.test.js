const Employee = require('../lib/employee');

describe("Employee class", () => {
    describe("getName method", () => {
        it("returns a name", () => {
            const testEmployee = new Employee([
                { name: "Fred", id: 3, email: "fred@email.com" }
              ]);
              testEmployee.getName("Fred");
              expect(testEmployee.name).toBe("Fred");
            });
            });
    describe("getID method", () => {
        it("returns an id number", () => {
            const testEmployee = new Employee([
                { name: "Fred", id: 3, email: "fred@email.com" }
            ]);
            testEmployee.getId(3);
            expect(testEmployee.id).toBe(3);
            });
            });
    describe("getEmail method", () => {
                it("returns an email address", () => {
                    const testEmployee = new Employee([
                        { name: "Fred", id: 3, email: "fred@email.com" }
                    ]);
                    testEmployee.getEmail("fred@email.com");
                    expect(testEmployee.id).toBe("fred@email.com");
          });
          });
    describe("getRole method", () => {
        it("returns a string of a role", () => {
            const testEmployee = new Employee([
                { name: "Fred", id: 3, email: "fred@email.com" }
            ]);
            testEmployee.getRole(Employee);
            expect(testEmployee).toReturn('Employee');
        });
    });
});