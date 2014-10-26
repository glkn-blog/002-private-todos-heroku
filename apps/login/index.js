var derby = require('derby');

var app = module.exports = derby.createApp('login', __filename);

if (!derby.util.isProduction) global.app = app;

app.use(require('d-bootstrap'));
app.use(require('derby-login/components/notAuth'));

app.loadViews(__dirname + '/views');
app.loadStyles(__dirname + '/styles');

app.get('/login', function(page, model){
  page.render('login');
});

