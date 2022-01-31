const { createNextState } = require('@reduxjs/toolkit')
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

router.post('/:transactionId/accept', (req, res) => {
    var logined = isLogined(req)

    if (!logined.result) {
        res.json({
            result: false,
            message: logined.message
        })
    } else {
        var logined_id = req.session.logined_id;

        db.query('SELECT * FROM transaction WHERE id=?', [req.params.transactionId], (err, accepted) => {
                if (err) {
                    console.log('err1:', err)
                }

                var accepted = accepted[0];

                db.query('SELECT * FROM user WHERE id=?', [logined_id], (err2, user) => {
                    if (err2) {
                        console.log('err2', err2)
                    }

                    var user = user[0];

                    if (accepted.sellor_id !== user.id) {
                        res.json({
                            result: false,
                            message: '비정상적인 접근'
                        })
                    } else {
                        db.query(
                            'UPDATE user SET money=? WHERE id=?',
                            [user.money + accepted.amount, accepted.sellor_id],
                            (err3, result) => {
                                if (err3) {
                                    console.log('err3:', err3)
                                }

                                db.query(
                                    'SELECT * FROM transaction WHERE post_id=?',
                                    [accepted.post_id],
                                    (err4, transaction_list) => {
                                        if (err4) {
                                            console.log('err4:', err4)
                                        }

                                        for (var i = 0; i < transaction_list.length; i++) {
                                            var transaction = transaction_list[i];

                                            if (transaction.buyer_id === accepted.buyer_id) {
                                                continue;
                                            }

                                            db.query(
                                                'SELECT money FROM user WHERE id=?',
                                                [transaction.buyer_id],
                                                (err5, buyer_money) => {
                                                    if (err5) {
                                                        console.log('err5:', err5)
                                                    }

                                                    var buyer_money = buyer_money[0].money;

                                                    db.query(
                                                        'UPDATE user SET money=? WHERE id=?',
                                                        [buyer_money + accepted.amount, transaction.buyer_id],
                                                        (err6, result) => {
                                                            if (err6) {
                                                                console.log(err6)
                                                            }
                                                        }
                                                    )
                                                }
                                            )
                                        }

                                        db.query(
                                            'DELETE FROM transaction WHERE post_id=?',
                                            [accepted.post_id],
                                            (err7) => {
                                                if (err7) {
                                                    console.log(err7)
                                                }

                                                res.json({
                                                    result: true
                                                })
                                            }
                                        )
                                    }
                                )
                            }
                        )
                    }
                })
            }
        )
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