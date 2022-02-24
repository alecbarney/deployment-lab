const express = require('express')
const path = require('path')

const app = express()


app.use(express.json())
app.use('/style', express.static('./public/styles.css'))


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


const port = process.env.PORT || 4545
app.listen(port, () => console.log(`We be runnin on port ${port}!`))