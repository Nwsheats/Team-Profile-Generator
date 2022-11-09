const Intern = require('../lib/intern');

describe("Intern class", () => {
    describe("getSchool method", () => {
        it("returns a name of a school", () => {
              const testIntern = new Intern("Aiden", 57, "aiden@email.com", "Intern", "University of Coding");
              const getSchoolTest = testIntern.getSchool();
              expect(getSchoolTest).toBe("University of Coding");
            });
            });
    describe("getRole method", () => {
        it("returns a string of a role", () => {
            const testIntern = new Intern("Aiden", 57, "aiden@email.com", "University of Coding");
            const getRoleTest = testIntern.getRole();
            expect(getRoleTest).toBe('Intern');
            });
            });
        });