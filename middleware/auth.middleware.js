const jwt = require('jsonwebtoken')

const protect = (req, res, next) => {
  let token

  // token headerdan olinadi
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token) {
    return res.status(401).json({ message: 'Token yo‘q ❌' })
  }

  try {
    const decoded = jwt.verify(token, 'SECRET_KEY')
    req.user = decoded // { id: ... }
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token xato ❌' })
  }
}

module.exports = protect
