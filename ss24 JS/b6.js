function reverseNumber(number) {
    let reverseNumber = 0
    while (number > 0) {
        reverseNumber = reverseNumber * 10 +number % 10
        number = Math.floor(number / 10)
    }
    return reverseNumber
}

let n = parseInt(prompt("nhap so nguyen duong:"))

if (!isNaN(n) && n > 0) {
    console.log("so dao nguoc cua ${n} la: ${reverseNumber(n)")
} else {
    console.log("vui long nhap 1 so nguyen duong")
}