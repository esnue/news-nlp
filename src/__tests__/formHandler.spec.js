import { handleSubmit } from '../__mocks__/formHandler';
//If mockAPI call from server/index.js performs correctly, mockAPI respond json.time should be now
describe('Test mockAPI', () => {
  test('the API should send json response', async () => {
    const res = await handleSubmit({ preventDefault: () => { "text": "test" } });
    expect(res.text).toBe('test');
  });
});