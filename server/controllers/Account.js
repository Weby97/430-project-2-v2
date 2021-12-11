const models = require('../models');
// const { AccountModel } = require('../models/Account');

const { Account } = models;

const loginPage = (req, res) => {
  res.render('login', {
    csrfToken: req.csrfToken(),
  });
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

const login = (request, response) => {
  const req = request;
  const res = response;

  // force cast to strings to cover some security flaws
  const username = `${req.body.username}`;
  const password = `${req.body.pass}`;

  if (!username || !password) {
    return res.status(400).json({
      error: 'All fields are required',
    });
  }

  return Account.AccountModel.authenticate(username, password, (err, account) => {
    if (err || !account) {
      return res.status(400).json({
        error: 'Wrong username or passsword',
      });
    }

    req.session.account = Account.AccountModel.toAPI(account);

    return res.json({
      redirect: '/home',
    });
  });
};

const signup = (request, response) => {
  const req = request;
  const res = response;

  // cast to strings to cover up some security flaws
  req.body.username = `${req.body.username}`;
  req.body.pass = `${req.body.pass}`;
  req.body.pass2 = `${req.body.pass2}`;

  if (!req.body.username || !req.body.pass || !req.body.pass2) {
    return res.status(400).json({
      error: 'All fields are required',
    });
  }

  if (req.body.pass !== req.body.pass2) {
    return res.status(400).json({
      error: 'Passwords do not match',
    });
  }

  return Account.AccountModel.generateHash(req.body.pass, (salt, hash) => {
    const accountData = {
      username: req.body.username,
      salt,
      password: hash,
    };

    (new Account.AccountModel(accountData))
      .save()
      .then(() => {
        req.session.account = Account.AccountModel.toAPI(this);
        return res.json({
          redirect: '/home',
        });
      })
      .catch((err) => {
        console.log(err);

        if (err.code === 11000) {
          return res.status(400).json({
            error: 'Username already in use.',
          });
        }

        return res.status(400).json({
          error: 'An error occurred',
        });
      });
  });
};

// This function helps you change your password!
const password = (request, response) => {
  const req = request;
  const res = response;

  // cast to strings to cover up some security flaws
  req.body.username = `${req.body.username}`;
  req.body.pass = `${req.body.pass}`;
  req.body.pass2 = `${req.body.pass2}`;
  req.body.pass3 = `${req.body.pass3}`;

  if (!req.body.username || !req.body.pass || !req.body.pass2 || !req.body.pass3) {
    return res.status(400).json({
      error: 'All fields are required',
    });
  }

  if (req.body.pass2 !== req.body.pass3) {
    return res.status(400).json({
      error: 'Passwords do not match',
    });
  }

  // Before we do password changes, we gotta make sure they have the right password first!
  return Account.AccountModel.authenticate(req.body.username, req.body.pass, (err, account) => {
    if (err || !account) {
      return res.status(400).json({
        error: 'Wrong username or passsword',
      });
    }

    // No errors? Okay, now we make a new password for that account
    return Account.AccountModel.generateHash(req.body.pass2, (salt, hash) => {
      const acct = account;
      acct.salt = salt;
      acct.password = hash;
      // account.save((err,result) =>{
      //   if (err){
      //     return res.status(400).json({error: "Reset Password Error"});
      //   } else {
      //     return res.status(200).json({message: 'Your password has been changed.'});
      //   }
      // });

      // Once that is done, we now save and move onto making messages~
      acct.save()
        .then(() => {
          req.session.account = Account.AccountModel.toAPI(this);
          return res.json({
            redirect: '/home',
          });
        })
        .catch((e) => {
          console.log(e);

          return res.status(400).json({
            error: 'An error occurred',
          });
        });
    });
  });
};

const getToken = (request, response) => {
  const req = request;
  const res = response;

  const csrfJSON = {
    csrfToken: req.csrfToken(),
  };

  res.json(csrfJSON);
};

module.exports.loginPage = loginPage;
module.exports.login = login;
module.exports.logout = logout;
module.exports.signup = signup;
module.exports.password = password;
module.exports.getToken = getToken;
