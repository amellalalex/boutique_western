// Import necessities
const express = require('express')
const app			= express()
const port		= 3000

const path		= require('path')

// Configure express
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, () => console.log(`Boutique Western JS is listening on port ${port}`))