//initiate express
const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();
// const fs = require('fs');
// const util = require('util');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

//   const { }