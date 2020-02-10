module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  testMatch: ['**/*.spec.+(ts|tsx)'],
  testPathIgnorePatterns: ['node_modules', 'src/templates'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/$1'
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ]
}