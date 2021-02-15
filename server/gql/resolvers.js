const { Job, User } = require('../../database/index');


const resolvers = {
  Query: {
    hello: () => 'Hello',
    jobs: () => Job.find(),
    user: async (_, { email }) => {
      const userInfo = await User.findOne({ email: email });
      return userInfo;
    }
  },
}

module.exports = resolvers;