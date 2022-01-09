const express = require('express')
const router = express.Router()

const user = { id: 'ddd', password: 'ddd' };

router.post('/login', (req, res) => {
    if (req.body.id == user.id && req.body.pwd == user.password) {
        res.json({
            result: true,
            message: '성공'
        })
    } else {
        res.json({
            result: false,
            message: '실패'
        })
    }
})

module.exports = router;