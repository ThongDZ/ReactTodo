function add(input) {
    if (input === '' || input == null) {
        return 0;
    }
    const array = input.split(',').map(Number);
    return array.reduce((accumulator, currentValue) => accumulator + currentValue)
}

console.log(add('1,2,3,4'));
