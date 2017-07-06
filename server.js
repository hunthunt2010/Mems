var express = require('express');
var app = express();
var compression = require('compression');

const staticDir = __dirname + '/app/public';

app.use(compression());
app.use(express.static(staticDir));

app.get('*', function(req, res) {
  res.sendFile(`${staticDir}/index.html`);
});

app.listen(process.env.PORT || 8080);