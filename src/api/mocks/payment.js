const MockAdapter = require("axios-mock-adapter");

module.exports = (instance) => {
  let mock = new MockAdapter(instance);
  mock.onGet("/payments").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
  });
};
