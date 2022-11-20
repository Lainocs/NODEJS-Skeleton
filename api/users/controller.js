// example of controller
import db from '../../db.js'

db.connect()

const get_users = (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) throw err
    res.send(result)
  })
}

const create_new_user = (req, res) => {
  const user = {
    name: "Maxence",
    age: 21,
    city: "Paris"
  }

  db.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) throw err
    res.send(result)
  })
}

export default {
  get_users,
  create_new_user
}