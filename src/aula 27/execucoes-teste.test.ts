import { describe, expect, it } from "vitest";
import { buscarExecucaoPorId } from "./execucoes-teste";

describe("buscarExecucaoPorId", () => {
  it("deve retornar a execucao quando o ID existe", async () => {
    const resultado = await buscarExecucaoPorId(1);

    expect(resultado.id).toBe(1);
    expect(resultado.nome).toBe("Login com dados válidos");
    expect(resultado.automatizado).toBe(true);
  });

  it("deve lançar erro quando o ID nao existe", async () => {
    await expect(buscarExecucaoPorId(999)).rejects.toThrow(
      "Execução com id 999 não encontrada"
    );
  });
});
