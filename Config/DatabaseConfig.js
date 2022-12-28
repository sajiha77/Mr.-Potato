const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://webevis123:database@cluster0.s3icx.mongodb.net/PotatoUsers?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongDB Connected Successfully ${conn.connection.host}`);
  } catch (error) {
    console.log("Error from DataBase File", error);
  }
};

module.exports = connectDB;
