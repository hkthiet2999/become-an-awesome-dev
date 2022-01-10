const mongoose = require('mongoose')


var mongoURI = `mongodb://localhost:27017/api-dsign-practice`
const connection = mongoose.connect(mongoURI,
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(e => console.log(`Can't connect to MongoDB `+e.message));

module.exports = connection;