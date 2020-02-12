const a = ('1,2,3,4,5');
const b = a.replace(/,/g, '');
let tong = 0;

function tinh_tong(input) {
    if (a === "," && a == null) {
    } else {
        for (let i = 0; i < input.length; i++) {
            tong += parseInt(input[i])
        }
    }
    console.log("Ket qua : "+ tong);
}
tinh_tong(b);
