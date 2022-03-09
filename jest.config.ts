module.exports = {
  name: 'resync_branch',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverageFrom: ['**/src/**/*.ts'],
  testEnvironment: 'node',
  testMatch: ['**/**/**/*.test.ts'],
  coverageDirectory: './coverage',
  clearMocks: true,
  restoreMocks: true,
  reporters: ['default'],
}
