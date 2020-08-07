const http = require('http') //chamando
const fs = require('fs') //chamando
const path = require('path') //chamando


http.createServer((req, res) => {

    if (req.url === '/') {
        return res.end('<h1>Home</h1>')
    } else if (req.url === '/contato') {
        return res.end('<h1>Contato</h1>')
    }


    const file = req.url === '/' ? 'index.html' : req.url // ?-->entao / :--> se nao
    const filePath = path.join(__dirname, 'public', file)
    const extname = path.extname(filePath)

    const allowedFileTypes = ['.html', '.css', '.js']
    const allowed = allowedFileTypes.find(item => item == extname)

    if (!allowed) return

    fs.readFile(
        filePath,
        (err, content) => {
            if (err) throw err

            res.end(content)
        }
    )
}).listen(5000, () => console.log('Server is running'))



// console.log(file)
// if (req.url == '/') {
//     fs.readFile(
//         path.join(__dirname, 'public', 'index.html'),
//         (err, content) => {
//             if (err) throw err

//             res.end(content)
//         }

//     )
// } else if (req.url == '/contato') {
//     return res.end('<h1>CONTATO </h1>'); //res= resposta & req = pedido/requisicao
// }