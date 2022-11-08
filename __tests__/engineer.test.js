const Engineer = require('../lib/engineer');

describe("Engineer class", () => {
    describe("getGitHub method", () => {
        it("returns a GitHub username", () => {
            const testEngineer = new Engineer([
                { name: "Todd", id: 5, email: "todd@email.com", gitHub: "toddno5" }
              ]);
              testEngineer.getGitHub("toddno5");
              expect(testEngineer.gitHub).toBe("toddno5");
            });
            });
    describe("getRole method", () => {
        it("returns a string of a role", () => {
            const testEngineer = new Engineer([
                { name: "Fred", id: 3, email: "fred@email.com", gitHub: "toddno5" }
              ]);
              testEngineer.getRole(Engineer);
              expect(testEngineer).toReturn('Engineer');
            });
        });
    });