let num  = Math.floor(Math.random() * 100);

if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
  console.log('(数値確認用:'+ num + ')');
} else if (num % 3 === 0) {
  console.log('3の倍数です');
  console.log('(数値確認用:'+ num + ')');
} else if (num % 5 === 0) {
  console.log('5の倍数です');
  console.log('(数値確認用:'+ num + ')');
} else {
  console.log(num);
}