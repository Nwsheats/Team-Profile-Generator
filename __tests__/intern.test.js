const Intern = require('../lib/intern');

describe("Intern class", () => {
    describe("getSchool method", () => {
        it("returns a name of a school", () => {
            const testIntern = new Intern([
                { name: "Aiden", id: 57, email: "aiden@email.com", school: "University of Coding" }
              ]);
              testIntern.getSchool("University of Coding");
              expect(testIntern.school).toBe("University of Coding");
            });
            });
    describe("getRole method", () => {
        it("returns a string of a role", () => {
            const testIntern = new Intern([
                { name: "Aiden", id: 57, email: "aiden@email.com", school: "University of Coding" }
              ]);
              testIntern.getRole(Intern);
              expect(testIntern).toReturn('Intern');
            });
        });
    });