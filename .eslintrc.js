module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true,
    "react": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "eol-last": [
      "error",
      "always"
    ],
    "indent": [
      "error",
      2,
      {
        "MemberExpression": 0
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-unused-vars": [
      "error",
      {
        "args": "none"
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
