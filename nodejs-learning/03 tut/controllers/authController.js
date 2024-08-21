const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const bcrypt = require('bcrypt')

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' })
    const foundUser = usersDB.users.find(u => u.username === user)
    if (!foundUser) return res.status(401).json({ 'message': 'Invalid username or password.' })
    // evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password)
    if (match) {
        // create JWT
        return res.json({ 'success': `User ${user} logged in.` })
    } else {
        return res.status(401).json({ 'message': 'Invalid password.' })
    }
}

module.exports = { handleLogin }