const mongoose = require("mongoose"),
  { Schema } = mongoose,
  PersonSchema = new Schema({
    nome: {
      type: String,
      required: true,
    },
    nomeMeio: {
      type: String,
      required: true,
    },
    sobrenome: {
      type: String,
      required: true,
    },
    cpf: {
      type: Schema.Types.ObjectId,
      ref: "CPF",
      required: true,
    },
    createDate: { 
        type: Date, 
        default: Date.now 
    },
  });

module.exports = mongoose.model("Person", PersonSchema);
