import { checkForName } from 'src\client\js\nameChecker.js';

describe("search function", () => {
    test('it should check if names are included', () => {
        expect(checkForName).toBeDefined();
        expect(checkForName).toBe(true);
    });
});


