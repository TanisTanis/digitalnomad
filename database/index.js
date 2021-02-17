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
  type: String,
  payRange: String,
  description: String,
});

const Job = mongoose.model('job', jobSchema);

const userSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  currentlyEmployed: String,
  company: String,
  phone: String,
  schedule: {
    location: String,
    timeZone: String,
    until: Date
  }
});

const User = mongoose.model('user', userSchema);

const companySchema = new mongoose.Schema({
  name: String,
  companyEmail: String,
  employees: [
    {
      firstName: String,
      lastName: String,
      location: String,
      email: String,
      phone: String,
    }
  ],
});

const Company = mongoose.model('company', companySchema);

module.exports = {
  Job,
  User,
  Company
};