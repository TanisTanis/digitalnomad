const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/digitalnomad', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  remote: String,
  payRange: String,
});

const Job = mongoose.model('job', jobSchema);

const userSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  currentlyEmployed: String,
  schedule: {
    location: String,
    timeZone: String,
    until: Date
  }
});

const User = mongoose.model('user', userSchema);

module.exports = {
  Job,
  User,
};