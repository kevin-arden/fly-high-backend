const express = require('express');
const app = express();
const PORT = 3000
const userData = require("./MOCK_DATA.json")

app.listen(PORT, () => {
  console.log("Running fine")
})