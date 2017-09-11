// Load the environment variables from .env file.
require("dotenv").config();

module.exports = {
    port: process.env.PORT || 4000,
    host: process.env.HOST || "127.0.0.1"
};
