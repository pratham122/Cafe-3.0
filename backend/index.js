const express = require('express')
const app = express()
const port = 8000
const mongoDB = require("./db")
mongoDB();
app.get('/', (req, res) => {
    res.send('Hello world')
})
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"))
app.listen(port, () => {
    console.log(`server started on port ${port}`);

})