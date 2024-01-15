function findGDC(a,b) {
    return b === 0 ? a : findGDC(b, a % b)
}

function findGDCofFourNumbers(a,b,c,d) {
    return findGDC(findGDC(a,b), findGDC(c,d))
}

let a = parseInt(prompt("nhap so nguyen a:"))
let b = parseInt(prompt("nhap so nguyen b:"))
let c = parseInt(prompt("nhap so nguyen c:"))
let d = parseInt(prompt("nhap so nguyen d:"))

console.log(!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d))
    ? `uoc chung lon nhat cua ${a}, ${b}, ${c}, ${d} la: ${findGDCofFourNumbers(a,b,c,d)}`
    : "vui long nhap cac so nguyen hop le"