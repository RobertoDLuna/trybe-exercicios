const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};
const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};
const informacoesJuntas = { ...user, ...jobInfos};
const informacaoCompleta = ({ name, age, nationality, profession, squad }) => {
    console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}.I work as a ${profession} and my squad is ${squad}`);
};
//console.log(informacaoCompleta(informacoesJuntas));
// array desconstructing
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
//saudacoes[1](saudacoes[0]); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao] = saudacoes;
//console.log(saudacao);
// Outro exemplo
//let comida = 'gato';
//let animal = 'água';
//let bebida = 'arroz';
//console.log(comida, animal, bebida); // arroz gato água
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const animais = ['arroz', 'gato', 'agua'];
const [comida, animal, bebida] = animais;

console.log(comida, animal, bebida);