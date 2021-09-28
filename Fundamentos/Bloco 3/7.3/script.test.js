const sum = require('./script.js');

describe('Verifica se está somando', ()=>{
  it("Teste se o retorno de sum(4, 5) é 9", ()=>{
    expect(sum(4, 5)).toBe(9)
  })
});