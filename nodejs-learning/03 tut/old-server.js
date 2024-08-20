const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

const logEvents = require('./logEvents')
const EventEmitter = require('events')
class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter()
myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName))
const PORT = process.env.PORT || 3500

const serveFile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(filePath, !contentType.includes('image') ? 'utf-8' : '')
        const data = contentType === 'application/json' ? JSON.parse(rawData) : rawData
        response.writeHead(filePath.includes('404') ? 404 : 200, { 'Content-Type': contentType })
        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        )
    } catch (err) {
        console.log(err)
        myEmitter.emit('log', `${err.name}: ${err.message}`, 'errLog.txt')
        response.statusCode = 500
        response.end()
    }
}

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt')

    const extension = path.extname(req.url)

    let contentType

    switch (extension) {
        case '.txt':
            contentType = 'text/plain'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
        default:
            contentType = 'text/html'
    }

    let filePath =
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'views', 'index.html')
            : contentType === 'text/html' && req.url.slice(-1) === '/'
                ? path.join(__dirname, 'views', req.url, 'index.html')
                : contentType === 'text/html'
                    ? path.join(__dirname, 'views', req.url)
                    : path.join(__dirname, req.url)

    // make .html extension not required in the browser
    if (!extension && req.url.slice(-1) !== '/') filePath += '.html'

    const fileExists = fs.existsSync(filePath)

    if (fileExists) {
        // server the file
        serveFile(filePath, contentType, res)
    } else {
        // 404
        // 301 redirect
        switch (path.parse(filePath).base) {
            default:
                serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res)
        }
    }
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))