function calc(oper, x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.log('Error');
    }
    switch (oper) {
        case 'sum':
            return x + y;
            break;
        case 'mult':
            return x * y;
            break;
        case 'sub':
            return x - y;
            break;
        case 'div':
            return x / y;
            break;
        case 'pow':
            return x % y;
            break;            
    }
if (oper !== 'sum' || oper !== 'mult' || oper !== 'sub' || oper !== 'div' || oper !== 'pow') {
        console.log('unknown operation')
    }    
}
console.log(calc('div', 1, 2));