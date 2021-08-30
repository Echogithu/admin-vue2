// jest.config.js
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  testMatch: ['**/?(*.)+(test).[jt]s?(x)']
};
