import express, { response } from 'express'
const app = express()

app.get("/", (require, response) => {
    console.log("Listagem ok")
    return response.json(["Tudo", "ok"])
})

app.listen(3333)