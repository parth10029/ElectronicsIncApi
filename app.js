var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser=require('body-parser')
var usersRouter = require('./App/routes/userRoutes');
var categoryRouter = require('./App/routes/categoryRoutes');
var sub_productRouter = require('./App/routes/sub_productRoutes');
var product = require('./App/routes/productRoutes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const {db} = require('./App/config/db');


db.authenticate().then(() => {
  console.log('Connection has been established successfully.');
})
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

// var router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use(express.static(path.join(__dirname, 'image/categoryImage')));
app.use(express.static(path.join(__dirname, 'image/productimage')));
app.use(express.static(path.join(__dirname, 'image/subcatimage')));


app.get('/test', (req, res, next)=>{
  console.log("call Test")
  res.send('Connected......');
});


app.use('/', usersRouter);
app.use('/', categoryRouter);
app.use('/', sub_productRouter);
app.use('/', product);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message + '*****',
    error: err
  });
  res.render('error');
});

//
// var user = require('./app/routes/users');//importing route
// user(app);


app.listen(5000, (err, res) => {
  if(err){
    console.log("Error "+err.toString());
  } else {
    console.log("Server is on port 5000")
  }
});
module.exports = app;
