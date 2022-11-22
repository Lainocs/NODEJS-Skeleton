// example of controller
import database from '../../database.js'
import User from './model.js'

const getUsers = (req, res) => {
  database.query('SELECT * FROM users', (err, result) => {
    if (err) throw err
    res.send(result)
  })
}

const createUser = (req, res) => {
  const user = new User(
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.age,
    req.body.city
  )

  database.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) throw err
    res.send(result)
  })
}

export default {
  getUsers,
  createUser
}