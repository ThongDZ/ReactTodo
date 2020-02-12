const a = ('1,2,55');
const b = a.split(',');
let tong = 0;

function add(input) {
    if (a === "," && a == null) {
    } else {
        for (let i = 0; i < input.length; i++) {
            tong += parseInt(input[i])
        }
    }
    console.log("Ket qua : "+ tong);
}
add(b);
