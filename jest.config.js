module.exports = {
  preset: 'react-native',
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  testMatch: [
    '**/__tests__/**/*.(js|ts)?(x)',
    '**/?(*.)+(spec|test).(js|ts)?(x)',
  ],
  transformIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/?!(react-native-fontawesome)',
  ],
};
