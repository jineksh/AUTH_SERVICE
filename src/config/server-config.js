const dotenv = require('dotenv');

dotenv.config();

module.exports={
    PORT : process.env.PORT,
    AUTH : process.env.AUTH_KEY
}