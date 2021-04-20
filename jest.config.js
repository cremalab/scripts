module.exports = {
  preset: 'ts-jest',
  roots: ["<rootDir>/tests"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: 'node',
  testTimeout: 10000,
}