const allowOrigin = 'https://test.com'
const express = require("express")
const app = express()

//プリフライトリクエストの応答
app.options("/api/users", function (req, res){
    res.header('Access-Control-Allow-Origin', '*') // '*' CORSを許可するドメインを設定(allowOrigin)
    res.header('Access-Control-Allow-Methods', 'OPTIONS')//プリフライトリクエストはOPTIONSメソッドが使用される
    res.header('Access-Control-Allow-Headers', 'X-Form')//プリフライトリクエストの要因となったカスタムヘッダの許可
    res.set('Access-Control-Max-Age', '600');//プリフライトのクライアント側でのキャッシュ期限
    res.send()
})

//メインリクエストの応答
app.get("/api/users", function (req, res) {
    if (req.get('X-Form') !== allowOrigin) {
        res.status(403).send()
    }

    res.header('Access-Control-Allow-Origin', '*') // '*' CORSを許可するドメインを設定(allowOrigin)
    res.header('Access-Control-Allow-Methods', 'GET')
    const list = [
        { id: 1, name: "maeda" },
        { id: 2, name: "takeda" },
    ];
    res.json(list);
})

app.listen(9999)
