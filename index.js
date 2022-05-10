const http = require('http')
let notes= [
    {
    "id": 1,
    "content": "Me gusta jugar GTFO",
    "important": true
    },

    {
    "id": 2,
    "content": "Me gusta jugar GTAV",
    "important": true
    }
]
const app = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(notes))
})

const PORT = 8001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)