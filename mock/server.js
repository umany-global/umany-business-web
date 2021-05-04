let mockServerClient = require("mockserver-client").mockServerClient;
let mockserver = require("mockserver-node");
const BalanceClass = require("./classes/balance");

const balance = new BalanceClass();
balance.getList(100);
console.log("Object.keys(mockserver) :>> ", Object.keys(mockserver));
mockserver
  .start_mockserver({
    serverPort: 1080,
    proxyPort: 1090,
    verbose: true,
    systemProperties: "-Dmockserver.enableCORSForAPI=false"
  })
  .then(() => {
    mockServerClient("localhost", 1080).mockAnyResponse({
      httpRequest: {
        method: "GET",
        path: "/balance",
      },
      httpResponse: {
        statusCode: 200,
        headers: [
          {
            name: "Access-Control-Allow-Origin",
            value: "http://localhost:8080",
          },
        ],
        body: JSON.stringify(balance.list),
      },
    });
    mockServerClient("localhost", 1080).mockAnyResponse({
      httpRequest: {
        method: "POST",
        path: "/balance/payment/receipt",
      },
      httpResponse: {
        statusCode: 200,
        headers: [
          {
            name: "Access-Control-Allow-Origin",
            value: "http://localhost:8080",
          },
        ],
      },
    });
    mockServerClient("localhost", 1080).mockAnyResponse({
      httpRequest: {
        method: "GET",
        path: "/balance/{uuid}",
        pathParameters: {
          uuid: [
            {
              schema: {
                type: "string",
                // pattern: "^[A-Z0-9-]+$",
              },
            },
          ],
        },
      },
      httpResponse: {
        statusCode: 200,
        headers: [
          {
            name: "Access-Control-Allow-Origin",
            value: "http://localhost:8080",
          },
        ],
        body: JSON.stringify(balance.list[0]),
      },
    });
  });
