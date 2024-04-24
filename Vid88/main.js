const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Gyanranjan Patra')
})
app.get('/about', (req, res) => {
  res.send('about Me')
})
app.get('/blog', (req, res) => {
  res.send('hello blog')
})
app.get('/blog/:slug', (req, res) => {
    console.log(req)
  res.send(`helllo ${req.params.slug}`)
})
app.get('/contact', (req, res) => {
  res.send('contact Me')
})
app.get('/education', (req, res) => {
  res.send('My education')
})
app.get('/scholling', (req, res) => {
  res.send('my scholling')
})
app.get('/collage', (req, res) => {
  res.send('my collage')
})
app.get('/collage', (req, res) => {
  res.send('my collage')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})