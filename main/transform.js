function turnToBarcode(Zipcode, codeArray) {

    const isZipcode = checkZipcode(Zipcode);
    if (isZipcode) {
        const Code = buildTransform(Zipcode, codeArray);
        const barcode = buildBarcode(Code);
        return barcode;
    }
    else
        return '输入错误，请检查！';
}

function checkZipcode(Zipcode) {

    let flag = false;
    if (Zipcode.length == 32 || Zipcode.length == 52) {
        Zipcode.split('').find(zipcode=> {
            if (zipcode == '|' || zipcode == ':') {
                flag = true;
            }
        });
    }
    return flag;
}

function buildBarcode(code) {

    var result = '';
    if (code.length == 5) {
        result = code.join('');
    }
    else {
        result = code.join('');
        result = result.substr(0, 5) + '-' + result.substr(5, 9);
    }
    return result;
}

function buildTransform(zipcode, codeArray) {

    var Code = [];
    let index = 1;
    while (index + 5 < zipcode.length - 1) {
        let codeNum = zipcode.substr(index, 5);
        index += 5;
        for (let j = 0; j < codeArray.length; j++) {
            if (codeNum === codeArray[j]) {
                Code.push(j.toString());
            }
        }
    }
    return Code;
}

function turnToZipcode(Barcode, codeArray) {

    const isBacode = checkBarcode(Barcode);
    if (isBacode) {
        const code = buildColumn_Weight(Barcode);
        const zipcode = buildZipcode(code, codeArray);
        console.log(zipcode);
    }
    else
        return '输入错误，请检查！';

}

function buildZipcode(code, codeArray) {

    const zipcode = code.split('').map(i => codeArray[i]).join('');

    return `|${zipcode}|`;
}

function buildColumn_Weight(Barcode) {

    const column_weight = (Barcode.split('').map(str => parseInt(str)).reduce((a, b) => a + b)) % 10;
    const codeText = Barcode + column_weight;

    return codeText;
}

function checkBarcode(Barcode) {
    var flag = false;
    const text = Barcode.replace('-', '');
    if (text.length == 5 || text.length == 9) {
        text.split('').find(num => {
            if (parseInt(num) >= 0 && parseInt(num) <= 9) {
                flag = true;
            }
        });
    }
    return flag;
}

module.exports = {
    turnToZipcode: turnToZipcode,
    checkBarcode: checkBarcode,
    buildColumn_Weight: buildColumn_Weight,
    buildZipcode: buildZipcode,
    turnToBarcode: turnToBarcode,
    checkZipcode: checkZipcode,
    buildTransform: buildTransform,
    buildBarcode: buildBarcode
};