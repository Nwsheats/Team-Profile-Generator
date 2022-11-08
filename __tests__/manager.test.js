const Manager = require('../lib/manager');

describe("getRole method", () => {
        it("returns a string of a role", () => {
            const testManager = new Manager([
                { name: "Heather", id: 2, email: "heather@email.com", officeNumber: 44 }
              ]);
              testManager.getRole(Manager);
              expect(testManager).toReturn('Manager');
            });
        });