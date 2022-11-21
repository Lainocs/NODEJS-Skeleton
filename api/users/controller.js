// example of controller
import database from '../../database.js'

const getUsers = (req, res) => {
  database.query('SELECT * FROM users', (err, result) => {
    if (err) throw err
    res.send(result)
  })
}

const createUser = (req, res) => {
  const user = req.body

  database.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) throw err
    res.send(result)
  })
}

export default {
  getUsers,
  createUser
}