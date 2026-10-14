const soma = require('./somar')
//let somar = soma(2,2);
test('somar 1 + 2 retorna 3',()=>{
    expect(soma(1,2)).toBe(3);
});

const multi = require('./multi')
test('multiplo de 1 x 2 retorna 2',()=>{
    expect(multi(1,2)).toBe(2);
});