const express = require('express')
const path = require('path')

const app = express()


app.use(express.json())
app.use('/style', express.static('./public/styles.css'))


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'a905973e90044b0bac1c8dddc978d9c3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')



const port = process.env.PORT || 4545
app.listen(port, () => console.log(`We be runnin on port ${port}!`))