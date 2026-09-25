export type ExecucaoTeste = {
  id: number;
  nome: string;
  automatizado: boolean;
  duracao: number;
};

export const execucoes: ExecucaoTeste[] = [
  {
    id: 1,
    nome: "Login com dados válidos",
    automatizado: true,
    duracao: 2,
  },
  {
    id: 2,
    nome: "Login com senha inválida",
    automatizado: true,
    duracao: 1,
  },
  {
    id: 3,
    nome: "Cadastro de usuário",
    automatizado: false,
    duracao: 5,
  },
  {
    id: 4,
    nome: "Busca de produto",
    automatizado: true,
    duracao: 3,
  },
  {
    id: 5,
    nome: "Finalização da compra",
    automatizado: false,
    duracao: 7,
  },
];

export const nomesDosTestes = execucoes.map(
  (execucao) => execucao.nome
);

export const testesAutomatizados = execucoes.filter(
  (execucao) => execucao.automatizado
);

export const tempoTotal = execucoes.reduce(
  (total, execucao) => total + execucao.duracao,
  0
);

export async function buscarExecucaoPorId(
  id: number
): Promise<ExecucaoTeste> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const execucao = execucoes.find(
    (execucao) => execucao.id === id
  );

  if (!execucao) {
    throw new Error(`Execução com id ${id} não encontrada`);
  }

  return execucao;

}

console.log("Nomes dos testes:", nomesDosTestes);
console.log("Testes automatizados:", testesAutomatizados);
console.log("Tempo total:", tempoTotal);