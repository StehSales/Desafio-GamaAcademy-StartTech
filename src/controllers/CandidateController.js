const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {

        const { nome, profissao, birth, civil, sexo,  cep, rua, bairro, cidade, tel1, tel2, cel, contato, email, rg, cpf, veiculo, habilitacao } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.profissao = profissao;
        newCandidate.birth = birth;
        newCandidate.civil = civil;
        newCandidate.sexo = sexo;
        newCandidate.cep = cep;
        newCandidate.rua = rua;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade; 
        newCandidate.tel1 = tel1;
        newCandidate.tel2 = tel2;
        newCandidate.cel = cel;
        newCandidate.contato = contato;
        newCandidate.email = email;
        newCandidate.rg = rg;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;


        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('DEU ERRO');
            }

            return res.status(200).send(savedCandidate);
        });
    },


};