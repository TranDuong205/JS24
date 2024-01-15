function isPrime(number) {
    if (number <= 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++)
        if(number % i === 0) return false
    return true
}

let n = parseInt(prompt("nhap 1 so:"))

console.log(!isNaN(n) ? '${n} la so ${isPrime(n)} ? `nguyen to` : "khong phai so nguyen to"}' : "vui long nhap 1 so hop le")