class Turma {
    constructor(codigo, nota) {
        this.codigo = codigo;
        this.nota = nota;
    }

    aprovado() {
        return this.nota >= 6; // Retorna true se a nota for maior ou igual a 6
    }
}

module.exports = Turma;
