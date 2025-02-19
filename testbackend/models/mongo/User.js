const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const ObjectId = mongoose.Types.ObjectId;

const DocSchema = new Schema(
  {
    firstName: { type: String,default: "",},
    lastName: {type: String, default: "", },
    role: { type: String, default: "", index: true, },
    userId:{ type: String,default: "",},
    UserName:{ type: String,index: true,},
    Department: { type: String, default: "", },
    DOJ: { type: String, default: "", },
    EmpCode: { type: String, default: "", index: true,},
  },

  {
    timestamps: true,
  }
);







module.exports = mongoose.model("Test", DocSchema);

