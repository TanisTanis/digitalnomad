const { Job, User } = require('./index');

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

let date = new Date()
date = date.setDate(date.getDate() + 14);

const newUser = {
  email: 'tkiel12@gmail.com',
  firstName: 'Tanis',
  lastName: 'Kiel',
  currentlyEmployed: 'no',
  schedule: {
    location: 'San Diego',
    timeZone: 'UTC -8H (PST)',
    until: date,
  }
};

User.create(newUser)
  .then(() => {
    console.log('user added');
  })
  .catch((err) => {
    console.log(err);
  });