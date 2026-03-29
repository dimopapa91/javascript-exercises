const { helloWorld } = require('./hello-world-function');

test('returns hello world', () => {
  expect(helloWorld()).toBe('Hello, World!');
});