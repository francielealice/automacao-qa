import {test, describe, expect} from 'vitest'
function login(username: string, password: string): boolean{
    return username === 'patati' && password === '123456';
}

test('Permitir fazer login com credenciais válidas', () => {
    const efetuandoLogin = login('patati', '123456')
        expect(efetuandoLogin).toBe(true)
})

describe('Negar login com credenciais inválidas', () => {

    test('Negar login com senha incorreta', () => {
        const efetuandoLogin = login('patati', '2563')
        expect(efetuandoLogin).toBe(false)
    });

    test('Negar login com usuário incorreto', () => {
        const efetuandoLogin = login('patata', '123456')
        expect(efetuandoLogin).toBe(false)
    })})

    test('Negar login com usuário e senha incorreta', () =>{
        const efetuandoLogin = login('patata', '2563')
        expect(efetuandoLogin).toBe(false)
    })

    test('Negar login com campos vazios', () => {
        const efetuandoLogin = login ('', '')
        expect(efetuandoLogin).toBe(false)
    });