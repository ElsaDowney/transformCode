'use strict';
var main = require('../main/transform.js');

describe('transformCode',function () {

    const inputs = '95713';

    it('turnToZipcode',function () {

        const expectText = ' ||:|:::|:|:|:::|:::||::||::|:|:|';

        const zipCode = turnToZipcode(inputs);

        expect(zipCode).toEqual(expectText);
    });

    it('checkInput',function () {
        
        const checkText = checkInput(inputs);
        
    });
});