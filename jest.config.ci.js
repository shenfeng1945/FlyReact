const base = require('./jest.config')

module.exports = Object.assign({},base,{
    collectCoverage: true,
    coverageReporters: ["lcov", "text"],
    reporters: ["jest-junit"],
    collectCoverageFrom: ["lib/**/*.{ts,tsx}","!**/node_module/**"],
    coverageDirectory: 'coverage',
})