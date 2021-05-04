import faker from "faker";
const MockAdapter = require("axios-mock-adapter");

class home {
  constructor() {
    this.default = {
      name: "",
      uuid: "",
    };
  }

  // GETTERS
  get brands() {
    return this.getList(10, faker.company.companyName);
  }
  get city() {
    return this.getList(13, faker.address.city);
  }
  get project() {
    return this.getList(15, faker.finance.accountName);
  }
  get category() {
    return this.getList(25, faker.commerce.productAdjective);
  }
  get today() {
    return this.getList(5, faker.date.past);
  }

  // METHODS
  getList(itemCount, fake) {
    let list = Array.from(Array(itemCount).keys());
    return list.map((item) => {
      item = Object.assign({}, this.default);
      item["text"] = fake();
      item["value"] = faker.random.uuid();
      return item;
    });
  }
  results() {
    return {
      category: this.category,
      project: this.project,
      brands: this.brands,
      today: this.today,
      city: this.city,
    };
  }
}
export const homeMock = (instance) => {
  let mock = new MockAdapter(instance);
  const currentHome = new home([]);
  const result = currentHome.results();
  mock.onGet("/home").reply(200, result);
};
