import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  modulePathIgnorePatterns: ['dist'],
  testEnvironment: 'node',
};
export default config;
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
