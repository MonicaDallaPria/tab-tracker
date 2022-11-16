const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
 
const app = express()
app.use(morgan('combined')) // used for logging
app.use(bodyParser.json()) // used for parsing any json that is sent in
app.use(cors()) // allows any host or client to access it

app.get('/status', (req,res) => {
	res.send({
		message: 'hello world!'
	})
})
app.listen(process.env.PORT || 8081)
