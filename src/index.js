/*const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
*/
function decode(string) {
    //alert(typeof string)
    const morse = {
        a: 1011,
        b: 11101010,
        c: 11101110,
        d: 111010,
        e: 10,
        f: 10101110,
        g: 111110,
        h: 10101010,
        i: 1010,
        j: 10111111,
        k: 111011,
        l: 10111010,
        m: 1111,
        n: 1110,
        o: 111111,
        p: 10111110,
        q: 11111011,
        r: 101110,
        s: 101010,
        t: 11,
        u: 101011,
        v: 10101011,
        w: 101111,
        x: 11101011,
        y: 11101111,
        z: 11111010,
        1: 1011111111,
        2: 1010111111,
        3: 1010101111,
        4: 1010101011,
        5: 1010101010,
        6: 1110101010,
        7: 1111101010,
        8: 1111111010,
        9: 1111111110,
        0: 1111111111,
        ' ': '*'
    }


    let arr = string.split('');
    let ind = 0;
    let result = [];


    //console.log(arr)
    //console.log(' ')
    let numOfSymbols = arr.length / 10;

    //console.log(`Количество символов = ${numOfSymbols}`)
    //console.log(' ')

    for (let i = 1; i <= numOfSymbols; i++) {
        let symbol = [];

        for (let j = 0; j < 10; j++) {
            symbol.push(arr[ind + j])
            //alert(arr[ind + j])
        }
        ind = ind + 10;

        //console.log(`Символ ${i}`)
        //console.log(symbol)
        let symbString = symbol.join('');
        //console.log(symbString);
        //Первый метод — str.indexOf(substr, pos).
        let position = symbString.indexOf('1', 0);
        let codeOfSymbol = symbString.slice(position, symbString.length);
        //console.log(`Код символа - ${codeOfSymbol}`)

        for (key in morse) {

            if (codeOfSymbol == morse[key]) {
                //console.log(`Символ - ${key}`)
                result.push(key)
                //console.log(result.join(''));
            } /*else if(codeOfSymbol !== morse[key]) {
      key = '**********';
      result.push(key);
    }*/

        }

    }
    console.log(result.join(''));
    return result.join('');
}

module.exports = {
    decode
}