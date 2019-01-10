module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^.+\\.(gif|png|jpg|ttf|eot)\\?(resize|sizes)(.+)?$':
      '<rootDir>/__mocks__/fileResizeMock.js',
    '^.+\\.(gif|png|jpg|ttf|eot)(\\?.+)?$': '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.svg\\?(sprite|include)(.+)?$': '<rootDir>/__mocks__/svgMock.js',
  },
}
