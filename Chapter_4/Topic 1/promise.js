const axios = require("axios");

let data;

axios
  .get("https://jsonplaceholder.typicode.com/posts/15")
  .then((response) => {
    data = response?.data;
    const { userId } = data;

    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  })
  .then((response) => {
    data.user = response?.data;
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
