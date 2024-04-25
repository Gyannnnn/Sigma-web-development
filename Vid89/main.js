const express = require('express')
const app = express()
const port = 3000


app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("Hey Its A get Request")
    res.send('Hello World2!')
})
app.get('/', (req, res) => {
    console.log("Hey Its A Put Request")
    res.send('Hello World Post')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})