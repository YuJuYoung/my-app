const express = require('express')
const router = express.Router()

const user = { id: 'ddd', password: 'ddd' };

router.post('/login', (req, res) => {
    if (req.body.id === user.id && req.body.password === user.password) {
        res.json({
            result: true,
        })
    } else {
        res.json({
            result: false,
            message: '아이디 혹은 비밀번호 오류'
        })
    }
})

module.exports = router;