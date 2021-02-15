const { Job, User, Company } = require('./index');


const newCompany = {
  name: 'Hack Reactor',
  companyEmail: 'hackreactor@hackreactor.com',
  employees: [
    {
      firstName: 'Josh',
      lastName: 'Elder',
      location: 'Any brewery in Seattle',
      email: 'jelder@gmail.com',
      phone: '(760) 215 4056'
    },
    {
      firstName: 'Katie',
      lastName: 'Papke',
      location: 'Seattle, WA',
      email: 'kpapke@gmail.com',
      phone: '(760) 300 3333'
    }
  ]
}

Company.create(newCompany)
  .then(() => {
    console.log('Company created');
  })

// const newJob = {
//   title: 'Front End Developer',
//   company: 'Starbucks',
//   location: 'Santa Fe, NM',
//   remote: 'no',
//   payRange: '10M - 50M'
// }

// Job.create(newJob)
//   .then(() => {
//     console.log('Job Added');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let date = new Date()
// date = date.setDate(date.getDate() + 14);

// const newUser = {
//   email: 'tkiel12@gmail.com',
//   firstName: 'Tanis',
//   lastName: 'Kiel',
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