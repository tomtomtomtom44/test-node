const date = require('./myfirstmodule');

test('verif de la fonction date', () => {
    expect(date.myDateTime()).toBeDefined();
});