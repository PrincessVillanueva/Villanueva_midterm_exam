//Import express
import express from 'express'

//Instantiate express
const app = express()

//port number
const port = 3000

//test route and send JSON
app.get('/test', (req,res) => {
    res.json({message: 'Express is working! Princess Villanueva'})
})

//Start server
app.listen(port, () => {
   console.log( `Server running on port : ${port}`)
})