type CasoDeTeste = {
  id: number;
  titulo: string;
  descricao: string;
  automatizado: boolean;
};

function criarCaso(
  id: number,
  titulo: string,
  descricao: string,
  automatizado: boolean
): CasoDeTeste {
  return {
    id,
    titulo,
    descricao,
    automatizado
  };
}

function descrever(caso: CasoDeTeste): string {
  return "Caso #" + caso.id + ": " + caso.titulo + " - " + caso.descricao;
}

function marcarAutomatizado(caso: CasoDeTeste): CasoDeTeste {
  return {
    ...caso,
    automatizado: true
  };
}

const caso1 = criarCaso(
  1,
  "Login com credenciais válidas",
  "Verificar acesso com usuário e senha corretos.",
  false
);

const caso2 = criarCaso(
  2,
  "Login com senha inválida",
  "Verificar mensagem de erro com senha incorreta.",
  false
);

const caso3 = criarCaso(
  3,
  "Logout da aplicação",
  "Verificar se o usuário consegue sair da aplicação.",
  false
);

const caso1Automatizado = marcarAutomatizado(caso1);

const descricao1 = descrever(caso1);
const descricao2 = descrever(caso2);
const descricao3 = descrever(caso3);

const quantidadeCasos: number = 3;
const aprovado: boolean = true;

const nomeSuite = "Suíte de Login";
const ambiente = "homologação";

console.log("typeof caso1:", typeof caso1);
console.log("typeof caso2:", typeof caso2);
console.log("typeof caso3:", typeof caso3);
console.log("typeof caso1Automatizado:", typeof caso1Automatizado);
console.log("typeof descricao1:", typeof descricao1);
console.log("typeof descricao2:", typeof descricao2);
console.log("typeof descricao3:", typeof descricao3);
console.log("typeof quantidadeCasos:", typeof quantidadeCasos);
console.log("typeof aprovado:", typeof aprovado);
console.log("typeof nomeSuite:", typeof nomeSuite);
console.log("typeof ambiente:", typeof ambiente);

console.log("");
console.log("Casos de teste:");
console.log(caso1);
console.log(caso2);
console.log(caso3);
console.log(caso1Automatizado);

console.log("");
console.log("Descrições:");
console.log(descricao1);
console.log(descricao2);
console.log(descricao3);

