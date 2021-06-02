const Example = require("../models/example.model");

module.exports = {
	
  create(req, res) {
    Example.create(req.body)
      .then((example) => {
        res.json(example);
      })
      .catch((err) => {
        // This makes axios on the front-end react side trigger the .catch.
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    Example.find()
      .then((examples) => {
        res.json(examples);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getOne(req, res) {
    Example.findById(req.params.id)
      .then((example) => {
        res.json(example);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  delete(req, res) {
    Example.findByIdAndDelete(req.params.id)
      .then((example) => {
        res.json(example);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update(req, res) {
    Example.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true, // to return update doc instead of old one.
    })
      .then((example) => {
        res.json(example);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
