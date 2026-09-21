// const statusCode: number = 500

// if(statusCode === 200) {
//     console.log("OK: recurso retornado");
// } else if (statusCode === 201) {
//     console.log("Created: recurso criado");
// } else {
//     console.log(`Status inesperado: ${statusCode}`);
// }
// // const resultado = statusCode < 400 ? "passou" : "falhou";
// // console.log (resultado);

// const testes = ["login", "carrinho", "checkout"];
// // for (let i =0; i < testes.length; i++) {
// //     console.log(`${i}. ${testes[i]}`); 
// //     }

// for(const teste of testes) {
//     console.log (`executando ${teste}`);
// }

// let tentativas = 0;
// while (tentativas < 3) {
//     tentativas++;
// }
// console.log(`tentativas: ${tentativas}`);

// function somar(a: number, b: number): number {
//     return a + b;
// }
// const resultado = somar(10, 5);
// console.log (resultado);

// function mostrarNome(nome: string): void{
//     console.log(`Olá, ${nome}!`);
// }

// mostrarNome ("Franciele");

// function pegarIdade(): number {
//     return 25;
// }
// const idade = pegarIdade();
// console.log(idade);

// function mostrarMensagem(): void {
//     console.log ("Olá! Seja bem-vindo!");
// }

// mostrarMensagem();

type Pessoa = {nome:string; idade:number}; //molde/contrato/modelo

function criarPessoa(nome:string, idade:number): Pessoa {
    return{nome: nome, idade:idade};
}
const p = criarPessoa("Franciele", 26);
console.log(p)

const p1 = criarPessoa ("Diego", 27);
console.log(p1)