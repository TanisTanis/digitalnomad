const { Job, User, Company } = require('./index');
const faker = require('faker');


// const newCompany = {
//   name: 'Hack Reactor',
//   companyEmail: 'hackreactor@hackreactor.com',
//   employees: [
//     {
//       firstName: 'Josh',
//       lastName: 'Elder',
//       location: 'Any brewery in Seattle',
//       email: 'jelder@gmail.com',
//       phone: 'HAPPY BIRTHDAY JOSH!!'
//     },
//     {
//       firstName: 'Katie',
//       lastName: 'Papke',
//       location: 'Seattle, WA',
//       email: 'kpapke@gmail.com',
//       phone: '(760) 300 3333'
//     }
//   ]
// }

// Company.create(newCompany)
//   .then(() => {
//     console.log('Company created');
//   })

const newJob = {
  title: 'Technical Lead',
  company: 'Hack Reactor',
  location: 'Denver, CO',
  remote: 'yes',
  type: 'Full Time',
  payRange: '0K',
  description: faker.lorem.paragraphs()
}

Job.create(newJob)
  .then(() => {
    console.log('Job Added');
  })
  .catch((err) => {
    console.log(err);
  });

// let date = new Date()
// date = date.setDate(date.getDate() + 14);

// const newUser = {
//   email: 'tkiel12@gmail.com',
//   firstName: 'Tanis',
//   lastName: 'Kiel',
//   phone: '(760) 215 4056',
//   currentlyEmployed: 'yes',
//   company: 'Hack Reactor',
//   schedule: {
//     location: 'San Diego',
//     timeZone: 'UTC -8H (PST)',
//     until: date,
//   }
// };

// User.create(newUser)
//   .then(() => {
//     console.log('user added');
//   })
//   .catch((err) => {
//     console.log(err);
//   });