let userInput = parseInt(prompt("Nhập vào một số nguyên dương:"));

if (isNaN(userInput) || userInput <= 0) {
  console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
  console.log(`Bình phương các số nguyên dương chẵn từ 1 đến ${userInput}:`);

  let sum = 0;
  for (let i = 2; i <= userInput; i += 2) {
    let square = i * i;
    sum += square;

    if (sum >= userInput) {
      console.log("Tổng đã vượt quá giá trị nhập vào.");
      break;
    }

    console.log(`${i}^2 = ${square}`);
  }
}
