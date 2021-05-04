import faker from "faker";
const MockAdapter = require("axios-mock-adapter");

class Brand {
  constructor(data) {
    this.default = {
      name: "",
      contact: "",
      campaing: "",
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
      item["name"] = faker.name.firstName();
      item["contact"] = faker.name.findName();
      item["campaing"] = faker.company.companyName();
      item["status"] = faker.random.boolean();
      return item;
    });
  }
}

export const brandMock = (instance) => {
  let mock = new MockAdapter(instance);
  const currentBrand = new Brand([]);
  currentBrand.getList(100);
  mock.onPost("/brand/payment/receipt").reply(async (config) => {
    let { data } = config;
    data = JSON.parse(data);
    if (data.file) {
      return [200, currentBrand.list[0]];
    } else {
      return [
        400,
        {
          msg: "La imagen es requerida",
        },
      ];
    }
  });
  mock.onPost("/brand/payment/amount").reply(async (config) => {
    let { data } = config;
    data = JSON.parse(data);
    if (data.file) {
      return [200, currentBrand.validate];
    } else {
      return [
        400,
        {
          msg: "La imagen es requerida",
        },
      ];
    }
  });
  mock.onPost("/brand/payment/cancel").reply(async (config) => {
    let { data } = config;
    data = JSON.parse(data);
    if (data.file) {
      return [200, currentBrand.cancel];
    } else {
      return [
        400,
        {
          msg: "La imagen es requerida",
        },
      ];
    }
  });

  mock.onGet("/brand").reply(200, currentBrand.list);
};
