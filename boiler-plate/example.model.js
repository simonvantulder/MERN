const mongoose = require("mongoose");

const ExampleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    price: {
      type: Number,
      required: [true, "{PATH} is required."],
      min: [0, "{PATH} must be a positive number."],
    },
    description: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [5, "{PATH} must be at least {MINLENGTH} characters."],
    },
	summer: {
      type: Boolean,
	  //can set defaults
      default: false,
    },
  },
  { timestamps: true }
);

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;

/*
	some other type:
		String
		Number
		Date
		Boolean
		Array
*/