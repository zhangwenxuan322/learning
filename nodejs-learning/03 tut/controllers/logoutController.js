const User = require('../model/User')

const handleLogout = async (req, res) => {
    // On client, also delte the access token
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204)
    const refreshToken = cookies.jwt
    // Is refreshToken in the database?
    const foundUser = await User.findOne({ refreshToken }).exec()
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        return res.sendStatus(204)
    }
    // Delete refreshToken from the database
    foundUser.refreshToken = null
    const result = await foundUser.save()
    console.log(result)
    res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
    res.sendStatus(204)
}

module.exports = { handleLogout }