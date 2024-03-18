const Aluno = require('./aluno');
const Turma = require('./turma');
const TurmaPresencial = require('./turmaPresencial');

// Exemplo de uso das classes
const aluno1 = new Aluno("Eduardo", "dudu123", "123456");
const turma1 = new Turma("T1", 8);
const turmaPresencial1 = new TurmaPresencial("T2", 7, 80);

console.log(aluno1);
console.log(turma1.aprovado()); // Deve retornar true, pois a nota é 8
console.log(turmaPresencial1.aprovada()); // Deve retornar true, pois a nota é 7 e a frequência é 80%

