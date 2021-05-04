import faker from "faker";
const MockAdapter = require("axios-mock-adapter");

class Balance {
  constructor(data) {
    this.default = {
      amount: "",
      brand: "",
      type: "",
      maker: "",
      status: "",
    };
  }

  // GETTERS
  get validate() {
    return { image: faker.image.imageUrl(), amount: faker.commerce.price() };
  }
  get cancel() {
    return { image: faker.image.imageUrl(), score: faker.commerce.price() };
  }

  // METHODS
  async getList(itemCount) {
    let list = Array.from(Array(itemCount).keys());
    this.list = list.map((item) => {
      item = Object.assign({}, this.default);
      item["amount"] = faker.commerce.price();
      item["brand"] = faker.company.companyName();
      item["type"] = faker.lorem.word();
      item["maker"] = faker.lorem.word();
      item["status"] = faker.random.boolean();
      return item;
    });
  }
}
export const balanceMock = (instance) => {
  let mock = new MockAdapter(instance);
  const currentBalance = new Balance([]);
  currentBalance.getList(100);
  mock.onPost("/balance/payment/receipt").reply(async (config) => {
    let { data } = config;
    data = JSON.parse(data);
    if (data.file) {
      return [
        200,
        {
          users: [{ id: 1, name: "John Smith" }],
        },
      ];
    } else {
      return [
        400,
        {
          msg: "La imagen es requerida",
        },
      ];
    }
  });
  mock.onPost("/balance/payment/amount").reply(async (config) => {
    let { data } = config;
    data = JSON.parse(data);
    if (data.file) {
      return [200, currentBalance.validate];
    } else {
      return [
        400,
        {
          msg: "La imagen es requerida",
        },
      ];
    }
  });
  mock.onPost("/balance/payment/cancel").reply(async (config) => {
    let { data } = config;
    data = JSON.parse(data);
    if (data.file) {
      return [200, currentBalance.cancel];
    } else {
      return [
        400,
        {
          msg: "La imagen es requerida",
        },
      ];
    }
  });

  mock.onGet("/balance").reply(200, currentBalance.list);
};
