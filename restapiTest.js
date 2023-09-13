const axios = require("axios");
const assert = require("assert");

const getApiUrl = "https://gorest.co.in/public/v2/users";
const postApiUrl = "https://gorest.co.in/public/v2/users";

const userEdit = "5137975";
const DeleteUser = "5130844";

const putApiUrl = "https://gorest.co.in/public/v2/users/" + userEdit;
const deleteUrl = "https://gorest.co.in/public/v2/users/" + DeleteUser;

const apiKey = "add your own API key";

const userData = {
  name: "Ule Mnoma",
  email: "Mnoma@gmail.com",
  gender: "male",
  status: "active",
};

const PutuserData = {
  name: "Ame pata",
  email: "ww@gmail.com",
  gender: "male",
  status: "active",
};

const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

describe("REST API Tests", function () {
  it("Fetching all users ***GET***", async function () {
    this.timeout(5000);
    try {
      const response = await axios.get(getApiUrl);

      console.log("Response Data:", response.data);

      // Check if the response status code is 200 (OK)
      assert.strictEqual(response.status, 200);

      // Checking the response if it contains data
      assert.ok(response.data);
    } catch (error) {
      throw error;
    }
  });

  it("Creating a new user ***POST***", async function () {
    this.timeout(5000);
    try {
      // Make an HTTP POST request to create a new user

      const response = await axios.post(postApiUrl, userData, { headers });

      // Check if the response status code is 201 (Created)
      assert.strictEqual(response.status, 201);

      // Check if the response contains the created user data
      assert.ok(response.data);

      // assert.strictEqual(response.data.name, userData.name);
    } catch (error) {
      throw error;
    }
  });

  it("Amending user details ***PUT***", async function () {
    this.timeout(5000);
    try {
      console.log(putApiUrl);
      const response = await axios.put(putApiUrl, PutuserData, { headers });

      // Check if the response status code is 200 (Updated)
      assert.strictEqual(response.status, 200);

      // Check if the response contains the created user data
      assert.ok(response.data);
    } catch (error) {
      // Handle any errors that occur during the test
      throw error;
    }
  });

  it("Delete User ***DELETE***", async function () {
    this.timeout(5000);
    try {
      // Make an HTTP POST request to create a new user

      const response = await axios.delete(deleteUrl, { headers });

      // Check if the response status code is 204 (DEleted)
      assert.strictEqual(response.status, 204);

      // Check if the response contains the created user data
      assert.ok(response.data);
    } catch (error) {
      // Handle any errors that occur during the test
      throw error;
    }
  });
});
