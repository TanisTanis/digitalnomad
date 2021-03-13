const { Job, User, Company } = require('../../database/index');


const resolvers = {
  Query: {
    hello: () => 'Hello',
    jobs: () => Job.find(),
    user: async (_, { email }) => {
      const userInfo = await User.findOne({ email: email });
      return userInfo;
    },
    company: async (_, { companyEmail }) => {
      const companyInfo = await Company.findOne({ companyEmail: companyEmail });
      return companyInfo;
    },
    job: async (_, { name }) => {
      const openJobs = await Job.find({ company: name });
      return openJobs;
    },
    singleJob: async (_, { id }) => {
      const listing = await Job.find({ _id: id });
      return listing;
    },
    searchedJobs: async (_, { title, location, remote, fullTime, partTime, shortTerm }) => {
      let jobs = await Job.find();

      if (title !== '') {
        jobs = jobs.filter(job => job.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
      }
      if (location !== '') {
        jobs = jobs.filter(job => job.location.toLowerCase().indexOf(location.toLowerCase()) !== -1);
      }
      if (remote) {
        jobs = jobs.filter(job => job.remote === 'yes');
      }
      if (!fullTime) {
        jobs = jobs.filter(job => job.type !== 'Full Time');
      }
      if (!partTime) {
        jobs = jobs.filter(job => job.type !== 'Part Time');
      }
      if (!shortTerm) {
        jobs = jobs.filter(job => job.type !== 'Short Term');
      }
      return jobs;
    }
  },

  Mutation: {

    addSchedule: async (_, { email, location, date, indefinitely, timeZone }) => {

      await User.updateOne({ email: email },
        {schedule: {
          location: location,
          date: date,
          timeZone: timeZone,
          indefinitely: indefinitely
        }},
         { runValidators: true });
      return 'Schedule updated successfully!';
    },

    addJob: async (_, { company, title, location, remote, type, payRange, description }) => {
      await Job.create({
        title: title,
        company: company,
        location: location,
        remote: remote,
        type: type,
        payRange: payRange,
        description: description
      });
      return 'Job added successfully!';
    }
  }
}

module.exports = resolvers;