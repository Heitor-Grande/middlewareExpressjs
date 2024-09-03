function verificaToken(req, res, next) {
    try {
        const token = req.headers.authorization
        if (token === 'JTY-HCT-123') {
            next()
        }
        else {
            return res.status(406).send({
                message: "Token inválido."
            })
        }
    } catch (error) {
        return res.status(500).send({
            message: "Erro ao verificar token: " + error.message || error
        })
    }
}

module.exports = verificaToken