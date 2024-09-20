const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
class Database {
  constructor(uri, options) {
    this.uri = uri;
    this.options = options;
  }

  async connect() {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
      console.log(
        `Connected to database: ${mongoose.connection.db.databaseName}`
      );
    } catch (error) {
      throw error;
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log(
        `Disconnected from database: ${mongoose.connection.db.databaseName}`
      );
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Database;
