exports.packageJson = (appName) => {
  return {
    name: appName,
    version: "1.0.0",
    main: "index.js",
    scripts: {
      start: "node index.js",
    },
    dependencies: {
      express: "^4.17.1",
    },
  };
};

exports.indexJs = `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
`;
