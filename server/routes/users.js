const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/login', (req, res) => {
    db.query('SELECT * FROM user WHERE email=?', [req.body.email], (err, user) => {
        if (err) {
            return next(err);
        }
        var user = user[0];

        if (user && user.password === req.body.password) {
            req.session.logined_id = user.id;

            req.session.save(() => {
                res.json({
                    result: true,
                    id: user.id,
                    nickname: user.nickname
                })
            })
        } else {
            res.json({
                result: false,
                message: '아이디 혹은 비밀번호 오류'
            })
        }
    })
})

router.post('/create', (req, res) => {
    db.query(
        'INSERT INTO user (email, password, nickname) VALUES (?, ?, ?)',
        [req.body.email, req.body.password, req.body.nickname],
        (err, result) => {
            if (err) {
                return next(err)
            }
            res.json({
                result: true
            })
        }
    )
})

module.exports = router;