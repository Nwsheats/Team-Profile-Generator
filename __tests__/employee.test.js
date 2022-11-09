const Employee = require('../lib/employee');

describe("Employee class", () => {
    describe("getName method", () => {
        it("returns a name", () => {
            const testEmployee = new Employee([
                { name: "Fred", id: 3, email: "fred@email.com" }
              ]);
              testEmployee.getName();
              expect(testEmployee.name).toBe("Fred");
            });
            });
    describe("getID method", () => {
        it("returns an id number", () => {
            const testEmployee = new Employee([
                { name: "Fred", id: 3, email: "fred@email.com" }
            ]);
            testEmployee.getId();
            expect(testEmployee.id).toBe(3);
            });
            });
    describe("getEmail method", () => {
                it("returns an email address", () => {
                    const testEmployee = new Employee("Fred", 3, "fred@email.com");
                    const getEmailTest = testEmployee.getEmail();
                    expect(getEmailTest).toBe("fred@email.com");
          });
          });
    describe("getRole method", () => {
        it("returns a string of a role", () => {
            const testEmployee = new Employee([
                { name: "Fred", id: 3, email: "fred@email.com" }
            ]);
            const getRoleTest = testEmployee.getRole();
            expect(getRoleTest).toBe('Employee');
        });
    });
});