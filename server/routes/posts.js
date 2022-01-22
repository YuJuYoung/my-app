const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/list', (req, res) => {
    db.query('SELECT id, title, tag FROM post', (err, result) => {
        if (err) {
            return next(err)
        }
        res.json({
            list: result
        })
    })
})

router.post('/create', (req, res) => {
    if (!req.session.logined_id) {
        res.json({
            result: false,
            message: '로그인 되어있지 않음'
        })
    }
    if (req.body.logined_id !== req.session.logined_id) {
        res.json({
            result: false,
            message: '다시 로그인 바람'
        })
    }

    db.query(
        'INSERT INTO post (title, description, tag, user_id) VALUES (?, ?, ?, ?)',
        [req.body.title, req.body.desc, req.body.tag, req.body.logined_id],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.json({
                result: true
            })
        }
    )
})

module.exports = router;