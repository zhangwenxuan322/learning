const fs = require('fs')
const rs = fs.createReadStream('./files/test.txt', { encoding: 'utf-8' })
const ws = fs.createWriteStream('./files/new-test.txt')

// rs.on('data', (dataChunk => {
//     ws.write(dataChunk)
// }))

rs.pipe(ws)