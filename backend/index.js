const express = require('express')
const app = express()
const port = 8000
const mongoDB = require("./db")
mongoDB();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://cafe-3-0-i44hl.vercel.app");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    next();
});
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"))
app.get('/', (req, res) => {
    res.send('Hello world')
});
app.listen(port, () => {
    console.log(`server started on port ${port}`);

});