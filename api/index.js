const express = require("express")
const app = express()

app.get("/api/users", function (req, res) {
    res.header('Access-Control-Allow-Origin', '*') // '*' CORSを許可するドメインを設定
    res.header('Access-Control-Allow-Methods', 'GET')
    res.header(
            'Access-Control-Allow-Headers',
            'Content-Type, Authorization, access_token'
    )
    const list = [
        { id: 1, name: "maeda" },
        { id: 2, name: "takeda" },
    ];
    res.json(list);
})

app.listen(9999)
