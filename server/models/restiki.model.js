const { Schema, model, pluralize } = require("mongoose");
pluralize(null);

const restikSchema = Schema({
  title: String,
  text: String,
  img: String,
  messages: Array,
});

const Restik = model("Restik", restikSchema);
module.exports = Restik;
