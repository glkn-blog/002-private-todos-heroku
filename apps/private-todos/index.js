var derby = require('derby');

var app = module.exports = derby.createApp('private-todos', __filename);

if (!derby.util.isProduction) global.app = app;

app.use(require('d-bootstrap'));
app.use(require('derby-login/components'));

app.loadViews(__dirname + '/views');
app.loadStyles(__dirname + '/styles');

app.get('/', function(page, model){
  page.render('home');
});
