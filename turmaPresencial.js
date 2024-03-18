const Turma = require('./turma');

class TurmaPresencial extends Turma {
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }

    aprovada() {
        return super.aprovado() && this.frequencia >= 75; // Retorna true se a nota for maior ou igual a 6 e a frequência for maior ou igual a 75
    }
}

module.exports = TurmaPresencial;
