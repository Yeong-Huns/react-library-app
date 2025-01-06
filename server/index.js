const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/books', (req, res) => {

})

app.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT}`)
})