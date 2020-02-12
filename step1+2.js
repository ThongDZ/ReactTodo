const a = prompt("Nhap so can tinh");
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
