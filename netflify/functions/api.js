import axios from "axios";

const SECRET = process.env.SECRET || "not found";
const IS_AXIOS_DEFINED = !!axios;

exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        hello: "world",
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
