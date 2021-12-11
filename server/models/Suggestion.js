const mongoose = require('mongoose');
const _ = require('underscore');

let SuggestionModel = {};

// mongoose.Types.ObjectID is a function that
// converts string ID to real mongo ID
const convertId = mongoose.Types.ObjectId;
const setName = (name) => _.escape(name).trim();

const SuggestionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    set: setName,
  },

  suggestion: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

SuggestionSchema.statics.toAPI = (doc) => ({
  name: doc.name,
  suggestion: doc.suggestion,
});

SuggestionSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return SuggestionModel.find(search).select('name suggestion').lean().exec(callback);
};

SuggestionModel = mongoose.model('Suggestion', SuggestionSchema);
module.exports.SuggestionModel = SuggestionModel;
module.exports.SuggestionSchema = SuggestionSchema;
