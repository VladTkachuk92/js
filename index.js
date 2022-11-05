const checkSumm = prompt('Яка сума вашого чеку?');
const tips = prompt('Скільки чайових ви хочете залишити?');
if (checkSumm === null || checkSumm === '' || tips === null || tips === '') {
  alert('Відмінено');
} else {
  const parsedCheckSumm = parseFloat(checkSumm);
  const parsedTips = parseFloat(tips);
  if (
    Number.isNaN(parsedCheckSumm) ||
    Number.isNaN(parsedTips) ||
    parsedCheckSumm <= 0 ||
    parsedTips < 0 ||
    parsedTips > 100
  ) {
    alert('Дані не валідні');
  } else {
    const tipsSumm = (parsedCheckSumm / 100) * parsedTips;
    const generalSumm = parsedCheckSumm + tipsSumm;
    const message = `Загальна сума оплати ${generalSumm.toFixed(2)}, чайові ${
      parsedTips.toFixed(0) + '%'
    } , кількість чайових ${tipsSumm.toFixed(2)}, Контрольна сума ${parsedCheckSumm.toFixed(2)}`;
    alert(message);
  }
}