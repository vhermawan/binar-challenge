module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}','!**.*.js'],
  coveragePathIgnorePatterns: [ 
    "prettierrc",
    "reportWebVitals",
    "setupTest"
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}