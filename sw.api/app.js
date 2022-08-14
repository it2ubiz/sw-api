const
    express = require('express'),
    db = require('./db/init.js'),
    app = express(),
    bodyParser     = require('body-parser');

let router = express.Router();

router.post('/user/add', require('./routes/user/add.js'));
router.post('/product/add', require('./routes/product/add.js'));
router.post('/user/product',require('./routes/user/product.js'));

router.get('/user/recomendation',require('./routes/user/recomend.js'));
router.get('/product/similar',require('./routes/product/similar.js'));
router.get('/user/similar',require('./routes/user/similar.js'));
//router.get('/rates/:from/:to', require('./routes/rate.js'));

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

function onSuccess() {
    console.log("Started on port 3000")
  }
  
  function onError(e) {
    console.log("Error in starting...")
  }

(async function init() {
    try {
      //await db.connect(config.db.uri);
      app.listen(3000, onSuccess).on('error', onError);
    } catch (e) {
      console.log("Error", e);
    }
  }());