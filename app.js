const express = require('express')

const app = express()
const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})

// Essa é a forma de implementar este endpoint
app.get('/', (req, res) => {
res.sendFile('views/index.html', { root: __dirname })
})