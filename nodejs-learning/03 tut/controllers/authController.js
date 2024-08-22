const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' })
    const foundUser = await User.findOne({ username: user }).exec()
    if (!foundUser) return res.status(401).json({ 'message': 'Invalid username or password.' })
    // evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password)
    if (match) {
        const roles = Object.values(foundUser.roles)
        // create JWT
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
        )
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        )
        // store refreshToken in the database
        foundUser.refreshToken = refreshToken
        const result = await foundUser.save()
        console.log(result)
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        return res.json({ accessToken })
    } else {
        return res.status(401).json({ 'message': 'Invalid password.' })
    }
}

module.exports = { handleLogin }