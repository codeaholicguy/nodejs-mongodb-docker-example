const express = require('express')
const bodyParser = require('body-parser')
const {MongoClient} = require('mongodb')

const {MONGO_URL} = require('./config')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/directory', (req, res) => {
  db.collection('directory').save(req.body, (err, result) => {
    if (err) {
      return res.status(500).send(err.message)
    }

    return res.send('OK')
  })
})

app.get('/directory', (req, res) => {
  db.collection('directory')
    .find()
    .toArray((err, result) => {
      if (err) {
        return console.log(err)
      }

      res.json({directory: result})
    })
})

MongoClient.connect(
  MONGO_URL,
  (err, client) => {
    if (err) {
      return console.error(err)
    }

    db = client.db('nothingtosee')

    app.listen(3000, () => {
      console.log('listening on 3000')
    })
  }
)
