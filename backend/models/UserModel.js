import mongoose from "mongoose";

const User = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Users", User);
