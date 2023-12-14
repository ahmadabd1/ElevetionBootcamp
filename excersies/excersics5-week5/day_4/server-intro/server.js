const http = require('http')

const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write("Hello, I'm Ahmad Abdallah.")
    response.write("\n\n")
    response.write("Now When You open The Link  That's Mean Your Bank Account Is Gone...")
    console.log(request)
    response.end();
})

const port = 3000
server.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})