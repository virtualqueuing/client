module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/src/svgTransform.js',
  },
  moduleDirectories: ['node_modules', __dirname],
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/svgTransform.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'test-file-stub',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};
