const axios = require("axios");

const SECRET = process.env.SECRET || "not found";
const IS_AXIOS_DEFINED = !!axios;

exports.handler = async (event, context) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");

    return {
      statusCode: 200,
      body: JSON.stringify({
        hello: "world",
        res: res.data,
        isAxiosDefined: IS_AXIOS_DEFINED,
        secret: SECRET,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
