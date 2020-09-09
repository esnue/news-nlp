import { sum } from '..\server\sum.js'

describe('test server side code', () => {
    test('adds 2 + 3 to equal 5', () => {
        expect(sum(2, 3)).toBe(5);
    });
})