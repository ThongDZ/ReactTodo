function horse(n, x, y) {
    const row = [-2, -2, -1, -1, 1, 1, 2, 2];
    const column = [-1, 1, -2, 2, -2, 2, -1, 1];
    let total = 0;
    for (let i = 0; i < n; i++) {
        const a = x + row[i];
        const b = y + column[i];
        if (a > 0 && a < n && b > 0 && b < n) {
            total++
        }
    }
    console.log(total);
}

horse(8, 5,5);
