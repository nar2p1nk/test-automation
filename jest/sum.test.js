const sum = require('../sum');

test('value should be integer',()=>{
    expect(typeof(sum(1,3.5))).not.toBe('float')
    expect(typeof(sum(1,3.5))).toBe('number')
});

test('and adds 1 + 2 to be equal to 3',()=>{
    expect(sum(1,2)).toBe(3);
});
