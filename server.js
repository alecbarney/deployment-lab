const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

var rollbar = new Rollbar({
    accessToken: 'a905973e90044b0bac1c8dddc978d9c3',
    captureUncaught: true,
    captureUnhandledRejections: true,
  })
  
  // record a generic message and send it to Rollbar
  rollbar.log('Hello world!')

const app = express()

app.use(express.json())
app.use('/style', express.static('./public/styles.css'))

let groceries = []

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully.')
})

app.post('/api/grocery', (req, res)=>{
    let {name} = req.body
    name = name.trim()

    const index = groceries.findIndex(groceryName=> groceryName === name)

    if(index === -1 && name !== ''){
        groceries.push(name)
        rollbar.log('Grocery item added successfully', {author: 'Alec', type: 'manual entry'})
        res.status(200).send(groceries)
    } else if (name === ''){
        rollbar.error('No item given')
        res.status(400).send('must provide an item.')
    }
    else if (name === 'cigarettes'){
        rollbar.warning('This guy needs help')
        res.status(400).send('Smoking is bad for you')}
   else {
        rollbar.critical('Item already exists')
        res.status(400).send('that item has already been added')
    }

})

const port = process.env.PORT || 4545

// rolly
app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`Take us to warp ${port}!`))

