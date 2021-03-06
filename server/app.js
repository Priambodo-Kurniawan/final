require('dotenv').config();

const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 3000
let index = require('./routes/index');
let transaction = require('./routes/transaction')
let propertySell = require('./routes/propertySell')
let propertyRent = require('./routes/propertyRent')
let request = require('./routes/request')
let access = require('./routes/access')
let category = require('./routes/category')
let user = require('./routes/user')
let admin = require('./routes/admin')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/index', index);
app.use('/api/transaction', transaction);
app.use('/api/propertySell', propertySell);
app.use('/api/propertyRent', propertyRent);
app.use('/api/request', request);
app.use('/api/access', access);
app.use('/api/category', category);
app.use('/api/user', user);
app.use('/api/admin', admin);


app.use(cors());

mongoose.connect(process.env.DATABASE_URL,(err,res)=>{
  console.log(err?err:'Berhasil connect ke db');
})


app.set('port', port);
console.log('port : '+app.get('port'))
app.listen(app.get('port'), () => {
  console.log('magic happen at http://localhost:',app.get('port'))
})