const os = require('os'); //importando um modulo de dentro do node 

const log = require('./logger') //esta na pasta local

setInterval(() => { // funcao global --> enquanto tempo vai ficar rodando 

    console.log(os.platform()); //vai aparecer no console log o resultado da função fazendo--> node stats.js 

    const { freemem, totalmem } = os; //desestruturação, da no mesmo se fazer const

    console.log(freemem(), totalmem()); //memoria livre/total e a porcentagem de uso dessas

    console.log(parseInt(freemem() / 1024 / 1024), totalmem()); //apresentando em MB 

    console.log(`${parseInt(freemem() / 1024 / 1024)} MB`, totalmem()); // passando o js que quiser atraves do ${}


    const total = parseInt(totalmem() / 1024 / 1024);
    const mem = parseInt(freemem() / 1024 / 1024);

    const percents = parseInt((mem / total) * 100); //porcentagem

    console.log(mem, total, percents);

    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents} %`
    }

    console.clear();

    console.log("===PC STATS====");
    console.log(stats); //retornara ele formatado
    console.table(stats); //retornara em forma de tabela
    log(`${JSON.stringify(stats)}\n`); //vai transformar o js em texto,que é o estilo json 

}, 1000)