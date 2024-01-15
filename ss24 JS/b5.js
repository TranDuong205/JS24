let n = parseInt(prompt("Nhập vào một số nguyên dương n:"));

if (isNaN(n) || n <= 0) {
  console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
  let S = 0;

  for (let i = 1; i <= n; i++) {
    S += 1 / (i * i * i);
  }

  console.log(`Giá trị của biểu thức S = 1 + 1/2^3 + 1/3^3 + ... + 1/${n}^3 là: ${S.toFixed(5)}`);
}
