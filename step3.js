function add(input) {
    if (input === '' || input === null) {
        return 0
    }
    const array = input.split('\n').join(',').split(',').map(Number);
    return array.reduce((accumulator, currentValue) => accumulator + currentValue)
}

console.log(add('1\n2,3'));
