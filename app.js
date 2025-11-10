const express = require('express');
const app = express();
const PORT = 9090;

app.get("/", (req, res) => {
    res.send("Mehak Bhadwi hai!! hello!! mehul smart hai smjhe na");
})
app.listen (PORT, (req, res) => {
    console.log(`App is running live on port: ${PORT}`);
})