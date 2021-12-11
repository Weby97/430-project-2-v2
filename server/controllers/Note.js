const models = require('../models');

const { Note } = models;

// Used to make a note and send to mongoDB
const makeNote = (req, res) => {
  if (!req.body.name || !req.body.note) {
    return res.status(400).json({ error: 'Name and Message are both required.' });
  }

  const noteData = {
    name: req.body.name,
    note: req.body.note,
    owner: req.session.account._id,
  };

  const newNote = new Note.NoteModel(noteData);

  const notePromise = newNote.save();

  notePromise.then(() => res.json({ status: 'Note has been made!' }));

  notePromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Note already exists.' });
    }

    return res.status(400).json({ error: 'An error occurred' });
  });

  return notePromise;
};

// Get a Note from the database
const getNotes = (request, response) => {
  const req = request;
  const res = response;

  return Note.NoteModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }

    return res.json({ notes: docs });
  });
};

// Grab a Random Note from the database
const getRandomNote = (request, response) => {
  // const req = request;
  const res = response;

  return Note.NoteModel.findRandom((err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }

    return res.json({ note: docs });
  });
};

// Allows you to get all data from the Note model
const getAll = (request, response) => {
  const res = response;
  return Note.NoteModel.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }

    return res.json({ note: docs });
  });
};

// Load Index Page
const indexPage = (req, res) => {
  Note.NoteModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occurred' });
    }

    return res.render('windows', { csrfToken: req.csrfToken(), notes: docs });
  });
};

module.exports.getAll = getAll;
module.exports.getRandom = getRandomNote;
module.exports.getNotes = getNotes;
module.exports.make = makeNote;
module.exports.indexPage = indexPage;
