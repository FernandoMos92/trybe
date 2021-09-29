const {sum, myRemove, myFizzBuzz} = require('./script.js');

//case test for sum
describe('Verifica se está somando', ()=>{
  it("Teste se o retorno de sum(4, 5) é 9", ()=>{
    expect(sum(4, 5)).toBe(9)
  })
  it("Teste se o retorno de sum(0, 0) é 0", ()=>{
    expect(sum(0, 0)).toBe(0)
  })
  it(`Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)`, ()=>{
    expect(()=>{
      sum(4, '5');
    }).toThrow(Error);
  })
});

//case test for myRemove
describe("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", ()=>{
  it("Válidando a saida", ()=>{
    expect(myRemove([1, 2, 3, 4], 3)).toBe('[1,2,4]');
  })
  it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", ()=>{
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain('[1, 2, 3, 4]');
  })
  it("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", ()=>{
    expect(()=>{
      myRemove([1, 2, 3, 4], 5);
    }).toThrow(Error);
  })
});

//case test for myFizzBuzz
describe("Test for function myFizzBuzz", ()=>{
  it("Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado", ()=>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it("Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado", ()=>{
    expect(myFizzBuzz(6)).toBe('fizz');
  })
  it("Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado", ()=>{
    expect(myFizzBuzz(5)).toBe('buzz');
  })
  it("Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado", ()=>{
    expect(myFizzBuzz(1)).toBe(1);
  })
  it("Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado", ()=>{
    expect(myFizzBuzz('test')).toBe(false);
  })
})