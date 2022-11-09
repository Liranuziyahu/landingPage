
const express = require('express')
const app = express()
const port = 5000   



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.use(express.static('public'))

app.set('view engine', 'ejs') //also need to make npm i ejs / could be puge fille also

app.get('/', (req, res) => {
    res.render('index.ejs',{title: 'hello world'})

  })