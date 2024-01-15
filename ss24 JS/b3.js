let n = parseInt(prompt("nhap vao 1 so nguyen duong "))

while(isNaN(n) || n <= 0){
    n = parseInt(prompt("vui long nhap lai 1 so nguyen duong:"))
}

let m = 0
let sum = 0

while (sum + m + 1 <=n){
    m++
    sum += m
}
console.log("so nguyen duong m lon nhat sao cho tong 1+2+3+...+m nho hon ", n, "la", m)