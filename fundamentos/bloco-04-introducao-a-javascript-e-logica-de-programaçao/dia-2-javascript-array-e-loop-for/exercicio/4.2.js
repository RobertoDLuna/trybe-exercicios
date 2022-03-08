let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0

for(var index = 0; index < numbers.length; index++){
    console.log(numbers[index]);
    soma = soma + numbers[index];
}
var media = soma / numbers.length;

console.log('Soma dos valores do array: ' + soma);
console.log('Média Aritmética: ' + media)