const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/getToken', mid.requiresSecure, controllers.Account.getToken);
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.post('/password', mid.requiresSecure, mid.requiresLogout, controllers.Account.password);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.get('/home', mid.requiresLogin, controllers.Note.indexPage);
  app.get('/getRandom', mid.requiresLogin, controllers.Note.getRandom);
  app.get('/getAllNotes', mid.requiresLogin, controllers.Note.getAll);
  app.post('/write', mid.requiresLogin, controllers.Note.make);
  app.post('/suggest', mid.requiresLogin, controllers.Suggestion.suggest);
  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
