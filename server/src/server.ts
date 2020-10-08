import express, { request, response } from 'express'
const app = express()

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//Métodos HTTP
//GET: Buscar uma ou mais informações do Back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente do back-end
//DELETE: Remover uma informação do back-end

const users = [
    "Luan",
    "Felipe",
    "Ana",
    "Carlos",
    "Gabriela",
    "Marina"
]

app.get("/users", (request, response) => {
    return response.json(users)
})

app.get("/users/:id", (request, response) => {
    const id = Number(request.params.id)
    const user = users[id]
    return response.json(user)
})

app.post("/users", (request, response) => {
    const user = {
        name: "Luan",
        email: "luan@gmail.com"
    }

    return response.json(user)
})

app.listen(3333)