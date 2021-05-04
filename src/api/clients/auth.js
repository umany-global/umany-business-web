import API from "@api";

/**
 * Login with phone
 * @param {Object} data
 */
export const loginPhone = (data) => {
  return API({
    method: "POST",
    url: `/login/`,
    data,
  });
};

/**
 * Validate token by client
 * @param {Object} data
 */
export const validClientToken = (data) => {
  const { fcmToken, phone_token, authToken, phone_number } = data;
  console.log("data", data, authToken);
  return API({
    method: "post",
    url: "/clients",
    headers: {
      "Content-Type": "application/json",
      "Umany-ai": fcmToken,
      "Umany-sc": phone_token,
      Authorization: authToken,
    },
    data: {
      device: {
        vendor_id: "123",
        type: "mobile",
        brand: "",
        model: "",
        os: {
          name: "",
          version: "",
        },
        phone_number,
        mac_address: "D4:3B:04:5A:A2:C6",
        imei: "",
      },
      app: {
        platform: "",
        version: "",
        build: "",
      },
    },
  });
};

const client = {
  loginPhone,
  validClientToken,
};
export default client;
