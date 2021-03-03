const { Job, User, Company } = require('./index');
const mongoose = require('mongoose');
const faker = require('faker');

const jobTypes = ['Full Time', 'Part Time', 'Short Term'];


const newCompany = {
  name: 'Auth0',
  companyEmail: 'auth0@auth0.com',
  employees: [
    {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    },
    {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    }
  ]
}

let date = new Date()
date = date.setDate(date.getDate() + 14);

const newUser = {
  email: 'tkiel12@gmail.com',
  firstName: 'Tanis',
  lastName: 'Kiel',
  phone: '(760) 215 4056',
  currentlyEmployed: 'yes',
  company: 'Hack Reactor',
  schedule: {
    location: 'San Diego',
    timeZone: 'UTC -8H (PST)',
    until: date,
  }
};

const jobs = [];

for (let i = 0; i < 8; i++) {

  const newJob = {
    title: faker.name.jobTitle(),
    company: faker.company.companyName(),
    location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    remote: 'yes',
    type: jobTypes[Math.round(Math.random() * 2)],
    payRange: `${Math.round(Math.random() * (90 - 70) + 70)}K - ${Math.round(Math.random() * (120 - 100) + 100)}K`,
    description: faker.lorem.paragraphs()
  };

  jobs.push(newJob);
}

const exampleJobs = [];

for (let i = 0; i < 3; i++) {
  const exampleJob = {
    title: faker.name.jobTitle(),
    company: 'Auth0',
    location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    remote: 'yes',
    type: jobTypes[Math.round(Math.random() * 2)],
    payRange: `${Math.round(Math.random() * (90 - 70) + 70)}K - ${Math.round(Math.random() * (120 - 100) + 100)}K`,
    description: faker.lorem.paragraphs()
  }
  exampleJobs.push(exampleJob);
}

Job.create(jobs)
  .then(() => {
    Job.create(exampleJobs)
      .then(() => {
        User.create(newUser)
          .then(() => {
            Company.create(newCompany)
              .then(() => {
                console.log(`All data seeded successfully!`);
                mongoose.connection.close();
              })
          })
      })
  })
  .catch((err) => {
    console.log(err);
  });