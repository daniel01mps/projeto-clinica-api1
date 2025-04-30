const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

async function criarUsuario(dados) {
    try {
        let senhaCriptografada = await bcrypt.hash(dados.usuario_senha, 10);
        dados = { ...dados, usuario_senha: senhaCriptografada };
        const checarEmail = await prisma.usuario.count({
            where: {
                usuario_email: dados.usuario_email
            }
        })

        if (checarEmail > 0) {
            throw new Error("Este email já está cadastrado")
        }

        const request = await prisma.usuario.create({
            data: dados
        })
        if (request) {
            return {
                type: "sucess",
                message: "Registro cadastrado com sucesso!"
            }
        }
        return {
            type: "error",
            message: "Ocorreu um erro!"
        }
    } catch (error) {
        return {
            title: "error",
            message: error.message
        }
    }
}


async function login(dados) {
    try {
        const usuario = await prisma.usuario.findFirst({
            where: {
                usuario_email: dados.usuario_email
            }
        })
        const logado = await bcrypt.compare(dados.usuario_senha, usuario.usuario_senha);

        if (logado) {
            return {
                type: "sucess",
                message: "Usuario Logado!"
            }
        } else {
            return {
                type: "Warning",
                message: "Email ou senha incorretos"
            }
        }

    } catch (error) {
        return {
            type: "error",
            message: error.message
        }
    }
}


module.exports = {
    criarUsuario,
    login
}