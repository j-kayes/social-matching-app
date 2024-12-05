require('dotenv').config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/social_app",
  JWT_SECRET: process.env.JWT_SECRET || "yoursecretkey"
};
