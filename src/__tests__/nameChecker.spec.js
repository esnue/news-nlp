import { checkForName } from '../client/js/nameChecker'

describe("search function", () => {
    test('it should check if names are included', () => {
        expect(checkForName).toBeDefined();
        //expect(checkForName).toBe(true);
    });
});