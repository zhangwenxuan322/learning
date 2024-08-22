const usesDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises
const path = require('path')

const handleLogout = async (req, res) => {
    // On client, also delte the access token
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204)
    const refreshToken = cookies.jwt
    // Is refreshToken in the database?
    const foundUser = usesDB.users.find(u => u.refreshToken === refreshToken)
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        return res.sendStatus(204)
    }
    // Delete refreshToken from the database
    const otherUsers = usesDB.users.filter(u => u.refreshToken !== refreshToken)
    const currentUser = { ...foundUser, refreshToken: '' }
    usesDB.setUsers([...otherUsers, currentUser])
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(usesDB.users)
    )
    res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
    res.sendStatus(204)
}

module.exports = { handleLogout }