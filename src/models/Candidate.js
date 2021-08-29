const mongoose = require('mongoose');


const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, require: true},
    profissao:{ type: String, unique: false, require: true},
    birth: { type: String, unique: false, require: true},
    civil: { type: String, unique: false, require: true },
    sexo: { type: String, unique: false, require: true },
    cep: { type: String, unique: false, require: true },
    rua: { type: String, unique: false, require: true},
    bairro: { type: String, unique: false, require: true },
    cidade: { type: String, unique: false, require: true },
    tel1: { type: String, unique: false, require: true},
    tel2: { type: String, unique: false, require: true},
    cel: { type: String, unique: false, require: true},
    contato: { type: String, unique: false, require: true},
    email: { type: String, unique: true, require: true},
    rg: { type: String, unique: true, require: true},
    cpf: { type: String, unique: true, require: true},
    veiculo: { type: String, unique: false, require: true},
    habilitacao: { type: String, unique: false, require: true}
    
}, {
    timestamps: true
});


module.exports = mongoose.model('Candidate', CandidateSchema);

