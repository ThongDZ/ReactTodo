const a = ('//;\\n1;5');
var b = /[\d^\s]+/g;
var c = a.match(b);
let tong = 0;

function add(a) {
    if (a === '' && a == null) {
        console.log(tong);
    } else {
        for (let i = 0; i < c.length; i++) {
            tong += Number(c[i])
        }
    }
    console.log("Ket qua : " + tong);
}

add(b);
