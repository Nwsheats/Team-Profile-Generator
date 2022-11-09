const Engineer = require('../lib/engineer');

describe("Engineer class", () => {
    describe("getGitHub method", () => {
        it("returns a GitHub username", () => {
            const testEngineer = new Engineer("Todd", 5, "todd@email.com", "toddno5")
            const getGitHubTest = testEngineer.getGitHub("toddno5");
              expect(getGitHubTest).toBe("toddno5");
            });
            });
    describe("getRole method", () => {
        it("returns a string of a role", () => {
            const testEmployee = new Employee("Todd", 5, "todd@email.com", "toddno5");
            const getRoleTest = testEmployee.getRole();
            expect(getRoleTest).toBe('Engineer');
            });
        });
    });