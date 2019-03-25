const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: [
    {
      type: String
    }
  ],
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
});

const GoogleBook = mongoose.model("GoogleBook", googleBookSchema);

module.exports = GoogleBook;
