import { sum } from '..src\server\index.js';

describe('test server/index.js', () => {
    test('adds 2 + 3 to equal 5', () => {
        expect(sum(2, 3)).toBe(5);
    });
})