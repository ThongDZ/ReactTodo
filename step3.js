function add(input) {
    if (input === '' || input === null) {
        return 0
    }
    return input
        .split('\n').join(',')
        .split(',')
        .map(item => parseInt(item))
        .reduce((accumulator, currentValue) => accumulator + currentValue)
}

console.log(add('1\n2,3'));
