const models = require('../models');

const { Suggestion } = models;

const makeSuggestion = (req, res) => {
  if (!req.body.name || !req.body.suggestion) {
    return res.status(400).json({ error: 'Name and Suggestion are both required.' });
  }

  const suggestionData = {
    name: req.body.name,
    suggestion: req.body.suggestion,
    owner: req.session.account._id,
  };

  const newSuggestion = new Suggestion.SuggestionModel(suggestionData);

  const suggestionPromise = newSuggestion.save();

  suggestionPromise.then(() => res.json({ status: 'Suggestion has been made!' }));

  suggestionPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Suggestion already exists.' });
    }

    return res.status(400).json({ error: 'An error occurred' });
  });

  return suggestionPromise;
};

const getSuggestions = (request, response) => {
  const req = request;
  const res = response;

  return Suggestion.SuggestionModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }

    return res.json({ notes: docs });
  });
};

// Not needed, but here just in case
// const getRandomSuggestion = (request, response) => {
//   // const req = request;
//   const res = response;

//   return Suggestion.SuggestionModel.findRandom((err, docs) => {
//     if (err) {
//       console.log(err);
//       return res.status(400).json({ error: 'An error occurred' });
//     }

//     return res.json({ note: docs });
//   });
// };

module.exports.getSuggestions = getSuggestions;
module.exports.suggest = makeSuggestion;
