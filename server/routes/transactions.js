const express = require('express')
const router = express.Router()

const db = require('../db')

router.post('/', (req, res) => {
    var logined = isLogined(req)

    if (!logined.result) {
        res.json({
            message: logined.message
        })
    } else {
        var logined_id = req.session.logined_id;

        db.query('SELECT * FROM transaction WHERE sellor_id=?', [logined_id], (err, list) => {
            if (err) {
                console.log(err)
            }

            res.json({
                list: list
            })
        })
    }
})

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

module.exports = router