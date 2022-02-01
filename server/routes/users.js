const express = require('express')
const router = express.Router()

const db = require('../db')

const isLogined = (req) => {
    var logined_id = req.session.logined_id;

    if (!req.body.logined_id || !logined_id) {
        return {
            result: false,
            message: '로그인 되어있지 않음'
        }
    }
    if (req.body.logined_id !== logined_id) {
        return {
            result: false,
            message: '다시 로그인 바람'
        }
    }
    return { result: true }
}

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
                    user: {
                        nickname: user.nickname,
                        money: user.money
                    }
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

router.get('/logout', (req, res) => {
    req.session.logined_id = null;

    req.session.save(() => {
        res.json({
            result: true
        })
    })
})

router.post('/create', (req, res) => {
    db.query(
        'INSERT INTO user (email, password, nickname, money) VALUES (?, ?, ?, 0)',
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

router.post('/:userId/charge_money', (req, res) => {
    var logined = isLogined(req)

    if (!logined.result) {
        res.json({
            result: false,
            message: logined.message
        })
    } else {
        var logined_id = req.session.logined_id

        if (logined_id !== parseInt(req.params.userId)) {
            res.json({
                result: false,
                message: '비정상적인 접근'
            })
        } else {
            db.query('SELECT money FROM user WHERE id=?', [logined_id], (err, user_money) => {
                if (err) {
                    return next(err, req, res)
                }
    
                var user_money = user_money[0].money
    
                db.query(
                    'UPDATE user SET money=? WHERE id=?',
                    [user_money + req.body.money, logined_id],
                    (err2, result) => {
                        if (err2) {
                            return next(err2, req, res)
                        }
    
                        res.json({
                            result: true
                        })
                    }
                )
            })
        }
    }
})

module.exports = router;