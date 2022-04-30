const express = require('express');

const app = express();

const port = process.env.PORT || 3030;


app.get("/", (req, res) =>{
    res.send("Hello World! 33110 BINDI SHAH has started Docker!");
});

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
    console.log(`Onexlab app listening on port ${port}`);
});