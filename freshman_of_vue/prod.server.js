var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
    req.url = '/templates/index.html';
    next();
});

app.use(router);

var appData = require('./data.json');
var redlist = appData.redlist;
var userlist = appData.userlist //获取对应的本地数据
var sweepcodedata=appData.sweepcodedata
var apiRoutes = express.Router();
apiRoutes.get('/redlist', function (req, res) {
    res.json({
        errno: 0,
        data: redlist
    });
});
apiRoutes.get("/userlist", (req, res) => {
  res.json({
    errno: 0,
    data: userlist
})
});
apiRoutes.get("/sweepcodedata", (req, res) => {
  res.json({
    errno: 0,
    data: sweepcodedata
})
});

app.use('/api', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return
    }
    var uri = 'http://localhost:' + port;
    console.log('Listening at ' + uri + '\n');
});
