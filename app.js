window.addEventListener('DOMContentLoaded', () => {
  main();
});
let result = 0;
function main() {
  const output = document.querySelector('.showVal');
  const incrementVal = document.querySelector('#incrementVal');
  const incrementBtn = document.querySelector('#incrementBtn');
  const decrementBtn = document.querySelector('#decrementBtn');
  const decrementVal = document.querySelector('#decrementVal');

  showresult(output);

  incrementBtn.addEventListener('click', () => {
    const increVal = Number(incrementVal.value);
    if (increVal > 0) {
      result += increVal;
      showresult(output);
    }
  });
  decrementBtn.addEventListener('click', () => {
    const decreVal = Number(decrementVal.value);
    if (result > 0) {
      result -= decreVal;
      showresult(output);
    }
  });

  incrementVal.addEventListener('keyup', (e) => {
    handelInput(e);
  });
  decrementVal.addEventListener('keyup', (e) => {
    handelInput(e);
  });
}

function showresult(output) {
  if (result < 0) {
    result = 0;
    alert('You can not be reached negative');
  }

  let finalresult = result;
  if (result < 10) {
    finalresult = `0${result}`;
  }
  output.innerText = finalresult;
}

function handelInput(e) {
  if (Number(e.target.value) > 100) {
    e.target.value = 100;
  }
  if (Number(e.target.value) <= 0) {
    e.target.value = 1;
  }
}
