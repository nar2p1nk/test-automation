const reversed = require('../reversed')

value = reversed('ass');

test('check if function returns a string ',()=>{
    expect(typeof(value)).toBe('string');
})

test('check if function returns a number',()=>{
    expect(typeof(value)).toBe('number');
});

test('check if function returns a float', ()=>{
    expect(typeof(value)).toBe('float');
})


test('check if function returns a boolean', ()=>{
    expect(typeof(value)).toBe('boolean')
})

