const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/login', (req, res) => {
    db.query('SELECT * FROM user WHERE email=?', [req.body.email], (err, user) => {
        var user = user[0];

        if (user && user.password === req.body.password) {
            res.json({
                result: true,
                id: user.id,
                nickname: user.nickname
            })
        } else {
            res.json({
                result: false,
                message: '아이디 혹은 비밀번호 오류'
            })
        }
    })
})

module.exports = router;