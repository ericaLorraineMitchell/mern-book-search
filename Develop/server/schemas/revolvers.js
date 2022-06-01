const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async () => {
        const userData = await User.findOne(
            { _id: user._id });
            return userData;
          },
          throw : Authentication ('you are not logged in')
        }
    };
   

module.exports = resolvers;