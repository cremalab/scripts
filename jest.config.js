module.exports = {
  roots: ["<rootDir>/tests", "<rootDir>/packages"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testTimeout: 10000,
}
