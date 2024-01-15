let a = parseInt(prompt("nhap vao so a: "))
let b = parseInt(prompt("nhap vao so b :"))

if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    console.log("nhap 2 so nguyen duong hop li")
} else {
    if (a > b) {
        let temp = a
        a = b
        b = temp
    }
    let sum0dd = 0
    let sumEven = 0
    for(let i = a + 1; i<b; i++) {
        if(i % 2 === 0) {
            sumEven += i
        } else {
            sum0dd += i
        }
    }
    console.log("tong cac so le:" + sum0dd)
    console.log("tong cac so chan:" +sumEven)
}