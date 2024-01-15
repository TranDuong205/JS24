function isPrime(number) {
    if (number <= 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++)
        if(number % i === 0) return false
    return true
}

function printFirstNPrimes(n) {
    let count = 0, currentNumber = 2
    while ( count < n) {
        if (isPrime(currentNumber)) console.log(currentNumber), count++
        currentNumber++
    }
}

let n = parseInt(prompt("nhap vao so nguyen duong n:"))
console.log(!isNaN(n) && n > 0 ? printFirstNPrimes(n) : "vui long nhap vao 1 so nguyen duong")