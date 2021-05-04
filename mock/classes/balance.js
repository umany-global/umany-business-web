const faker = require("faker");

module.exports = class Balance {
  constructor() {
    this.default = {
      amount: "",
      brand: "",
      type: "",
      maker: "",
      status: "",
    };
  }
  async getList(itemCount) {
    let count = Array.from(Array(itemCount).keys());
    this.list = count.map((item) => {
      item = Object.assign({}, this.default);
      item["id"] = faker.random.uuid();
      item["amount"] = faker.commerce.price();
      item["brand"] = faker.company.companyName();
      item["type"] = faker.lorem.word();
      item["maker"] = faker.lorem.word();
      item["status"] = faker.random.boolean();
      return item;
    });
  }
  async getByID(uuid) {
    return this.list.find((item) => item.uuid == uuid);
  }
};
