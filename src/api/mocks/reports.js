import faker from "faker";
const MockAdapter = require("axios-mock-adapter");

class reports {
  constructor() {
    this.default = {
      name: "",
      uuid: "",
    };
  }

  // GETTERS
  get brands() {
    return this.getList(10);
  }
  get projects() {
    return this.getList(13);
  }
  get campaings() {
    return this.getList(15);
  }

  // METHODS
  getList(itemCount) {
    let list = Array.from(Array(itemCount).keys());
    return list.map((item) => {
      item = Object.assign({}, this.default);
      item["name"] = faker.company.companyName();
      item["uuid"] = faker.random.uuid();
      return item;
    });
  }
  results() {
    return {
      brands: this.brands,
      projects: this.projects,
      campaings: this.campaings,
    };
  }
}
export const reportsMock = (instance) => {
  let mock = new MockAdapter(instance);
  const currentReports = new reports([]);
  const result = currentReports.results();
  mock.onGet("/reports").reply(200, result);
};
