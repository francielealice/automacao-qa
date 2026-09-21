import {test, describe, expect} from 'vitest'

describe('Calcular raiz quadrada de um número', () => {
    expect(Math.sqrt(4)).toBe(2)
    expect(Math.sqrt(9)).toBe(3)
});

test ('Retornar um NAN se o número for negativo', () => {
    expect(Math.sqrt(-1)).toBeNaN()
});

test ('Retorar 0 se for passado um 0', () => {
    expect(Math.sqrt(0)).toBe(0)
});
