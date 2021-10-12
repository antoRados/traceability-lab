const express = require('express')
const path = require('path')

const app = express();



const SERVER_PORT = 5050
const port = process.env.PORT || SERVER_PORT
app.listen(port, () => {
    console.log(`Server is live on port ${port}`)
})