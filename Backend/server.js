const app = require('./src/app.js');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});