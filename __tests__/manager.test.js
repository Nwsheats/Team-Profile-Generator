const Manager = require('../lib/manager');

describe("getRole method", () => {
        it("returns a string of a role", () => {
            const testManager = new Manager("Heather", 2, "heather@email.com", 44);
            const getRoleTest = testManager.getRole();
              expect(getRoleTest).toBe('Manager');
            });
        });