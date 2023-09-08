const axios = require("axios");
const assert = require("assert");

const getApiUrl = "https://gorest.co.in/public/v2/users";

describe("Get Test", function () {
  it("Fetching all users", async function () {
    try {
      const response = await axios.get(getApiUrl);

      //   console.log("Response Data:", response.data);

      // Check if the response status code is 200 (OK)
      assert.strictEqual(response.status, 200);

      // Check if the response contains data
      assert.ok(response.data);

      // Optionally, you can perform additional assertions on the response data
      assert.ok(response.data.length > 0);
    } catch (error) {
      throw error;
    }
  });
});
