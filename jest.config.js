const base = require('@design-systems/test/jest.config.base');

module.exports = {
  ...base,
  roots: ['<rootDir>/packages/'],
  coverageDirectory: '<rootDir>/coverage/'
};
