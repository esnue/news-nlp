import { handleSubmit } from '../__mocks__/formHandler';
//If mockAPI call from server/index.js performs correctly, mockAPI respond json.time should be now
describe('Test mockAPI', () => {
  test('It should respond with time:now', async () => {
    const res = await handleSubmit({ preventDefault: () => { } });
    expect(res.time).toBe('now');
  });
});