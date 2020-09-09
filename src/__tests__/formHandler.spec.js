const handleSubmit = require('..\__mocks__\formHandler.js')

//If mockAPI call from server/index.js performs correctly, mockAPI respond json.time should be now
describe('Test mockAPI', () => {
    test('It should respond with time:now', async () => {
      const response = await request(app).get('/test');
      expect(response.time).toBe('now');
    });
});