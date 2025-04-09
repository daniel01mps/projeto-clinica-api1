const { executeSQL } = require("../services")

async function buscarEspecialidades(){
    return await executeSQL("SELECT * FROM especialidades;");
}

async function buscaUmaEspecialidade() {
    
}

async function criaUmaEspecialidade() {
    
}

async function editaUmaEspecialidade() {
    
}

async function deletaUmaEspecialidade() {
    
}

module.exports = {
    buscarEspecialidades,
    buscaUmaEspecialidade,
    criaUmaEspecialidade,
    editaUmaEspecialidade,
    deletaUmaEspecialidade
}