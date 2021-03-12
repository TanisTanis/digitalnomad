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
    }
  }
}

module.exports = resolvers;