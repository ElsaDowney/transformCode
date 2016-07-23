'use strict';
var main = require('../main/transform.js');

describe('transformBarode', function () {

    const Zipcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';

    const CodeArray = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];

    it('turnToBarcode', function () {

        const ExpectText = '45056-1234';
        const aaa = main.turnToBarcode(Zipcode, CodeArray);

        expect(aaa).toEqual(ExpectText);
    });

    it('checkZipcode', function () {

        const checkFT = main.checkZipcode(Zipcode);
        const flag = true;

        expect(checkFT).toBe(flag);
    });

    it('buildTransform', function () {

        const codeNum = main.buildTransform(Zipcode, CodeArray);
        const expectCode = ['4', '5', '0', '5', '6', '1', '2', '3', '4'];

        expect(codeNum).toEqual(expectCode);
    });

    it('buildBarcode', function () {

        const barcode = main.buildBarcode(main.buildTransform(Zipcode, CodeArray));
        const result = '45056-1234';

        expect(barcode).toEqual(result);
    });
});


describe('transformZipcode', function () {

    const Barcode = '95713';

    const CodeArray = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::', '||:::'];

    it('turnToZipcode', function () {

        const expectText = '||:|:::|:|:|:::|:::||::||::|:|:|';

        spyOn(console, 'log');

        main.turnToZipcode(Barcode, CodeArray);

        expect(console.log).toHaveBeenCalledWith(expectText);
    });

    it('checkInput', function () {

        const checkTF = main.checkBarcode(Barcode);


        expect(checkTF).toBeTruthy();
    });

    it('buildColumn_Weight', function () {

        const code = '957135';
        const column_weight = main.buildColumn_Weight(Barcode);

        expect(column_weight).toEqual(code);
    });

    it('buildZipcode', function () {

        const zipCode = main.buildZipcode(main.buildColumn_Weight(Barcode), CodeArray);
        const codeZip = '||:|:::|:|:|:::|:::||::||::|:|:|';

        expect(zipCode).toEqual(codeZip);
    });

});