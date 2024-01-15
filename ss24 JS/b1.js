let n = parseInt(prompt("nhap vao 1 so nguyen duong: "))
let sum = 0

if(isNaN(n) || n <= 0) {
    console.log("nhap vao 1 so nguyen duong hop le")
} else {
    for(let i = 1;i<=n;i++) sum += i
    sum % 2 === 0 && sum++
    console.log("tong cac so: " + sum)
}