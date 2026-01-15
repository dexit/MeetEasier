// expose our config directly to our application using module.exports
require('dotenv').config();

module.exports = {
  exchange: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    uri: process.env.EWS_URI
  },
  domain: process.env.DOMAIN
};
