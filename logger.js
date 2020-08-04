const EventEmitter = require('events'); //chamando o evento
const fs = require('fs') //arquivos do sistema 
const path = require('path') //localizar arquivos do modo correto

const emitter = new EventEmitter(); // instanciando o objeto

emitter.on('log', (message) => { //vai ouvir a palavra log 
    console.log(message) //vai imprimir a message 
    fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
        if (err) throw err
    })
})


function log(message) {
    emitter.emit('log', message)
}

log("Passar uma mensagem");

module.exports = log //exportando a funcao log