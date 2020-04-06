const express  = require ('express');
const morgan   = require ('morgan');
const mongoose = require ('mongoose');
const app      = express();
//coneccion a la base de datos
mongoose.connect('mongodb://localhost/mevn-database').then(
   db => console.log('DB is connected')
).catch(
   err => console.log(err)
);
//settings
app.set('port', 3000);

//middlewears
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/tasks',require('./routes/tasks'));

//static files
app.use(express.static(__dirname + '/public'));

//server is listening
app.listen(app.get('port'), () => {
   console.log('todo ok');
});