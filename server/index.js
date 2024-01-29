/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import express from 'express'
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const bodyParser = require('body-parser');
const fs = require('fs')

app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// favorite API
app.get('/favorite/', (req, res) => {
    fs.readFile("./favorite.txt",
        (e, d) => {
            if (e) throw e
            console.log(d);
            res.status(200).send(d)
        }
    )
})
app.post('/favorite/:id', (req, res) => {
    fs.appendFile("./favorite.txt", `${req.params.id}\n`,
        (e, d) => {
            if (e) throw e
            res.status(200).send('added to favorite')
        }
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})