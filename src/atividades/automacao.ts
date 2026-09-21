import PromptSync from "prompt-sync";

const prompt = PromptSync();
let automatizaveis = 0;
let naoAutomatizaveis:number = 0;

for(let i = 1; i<=5; i++){
const cenario: string = prompt(`Digite o ${i}o cenário:`);
const resposta: string = prompt(`É automatizavél? (sim/não)`);
resposta.toLowerCase;

if(resposta === "sim") {
    console.log(`${cenario} -> Automatizar`);
    automatizaveis++
} else if (resposta === "não"|| resposta === "não") {
    console.log(`${cenario} -> Não-Automatizar`);
    naoAutomatizaveis++
} else {
    console.log("Ocorreu um erro!")
}
}