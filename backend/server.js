const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const { nome } = require("./connectDB")

app.get('/api/users', (req, res) => {
    // Lógica para obter usuários do banco de dados
    const users = [{ id: 1, name: nome }, { id: 2, name: 'Jane' }];
    res.json(users);
  });


const port = 3030

app.listen(port, () => {
    console.log(`Servidor esta iniciando com sucesso!\nhttp://localhost:${port}`);
})