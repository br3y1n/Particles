module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest"],
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(png)$": "identity-obj-proxy",
    "\\.(svg)$": "identity-obj-proxy",
  },
  // setupFilesAfterEnv: ["../jest.setup.tsx"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: "jsdom",
  coverageDirectory: "../coverage",
  collectCoverageFrom: ["<rootDir>/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    ".(interfaces|styles).(ts|tsx)",
  ],
};
