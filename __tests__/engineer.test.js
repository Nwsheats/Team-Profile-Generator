const Engineer = require('../lib/engineer');

describe("Engineer class", () => {
    describe("getGitHub method", () => {
        it("returns a GitHub username", () => {
            const testEngineer = new Engineer("Todd", 5, "todd@email.com", "Engineer", "toddno5")
            const getGitHubTest = testEngineer.getGitHub();
              expect(getGitHubTest).toBe("toddno5");
            });
            });
    describe("getRole method", () => {
        it("returns a string of a role", () => {
            const testEngineer = new Engineer("Todd", 5, "todd@email.com", "toddno5");
            const getRoleTest = testEngineer.getRole();
            expect(getRoleTest).toBe('Engineer');
            });
        });
    });