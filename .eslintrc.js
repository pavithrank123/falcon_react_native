module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    "import/no-extraneous-dependencies": ["error", {"dependencies": true,"devDependencies": true, "optionalDependencies": true, "peerDependencies": true}],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100
      }
    ]
  },
  'globals': {
    "fetch": false
  },
  "plugins": [
    "prettier"
  ]
}