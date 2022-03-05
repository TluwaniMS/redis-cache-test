const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true }
});

const UserModel = model("User", UserSchema);

module.exports = { UserModel };
