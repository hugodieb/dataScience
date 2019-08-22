let fs = require('fs')
let rdata = [{ID: 1, NOME: 'RAUL'}]
let data = JSON.parse(JSON.parse(fs.readFileSync('./teste.json')))

module.exports.home = function(req, res) {    
    res.render('home', {person: data})    
}