function storeNames() {
  let firstName = document.getElementById("first-name").value;
  let secondName = document.getElementById("second-name").value;
  
  localStorage.setItem("first", firstName);
  localStorage.setItem("second", secondName);
}
function setPlayersName() {
  let firstPlayer = document.getElementById("first-player");
  let secondPlayer = document.getElementById("second-player");

  firstPlayer.innerHTML = localStorage.getItem('first');
  secondPlayer.innerHTML = localStorage.getItem('second');
}
function start() {
  window.onload();
}
let turn = 'x';
const simo = document.getElementById("selectedBox");
simo.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    if (e.target.innerHTML == '') 
    {
      let currentChoise = turn;
      switch (e.target.innerHTML == '') {
        case currentChoise == 'x':
          e.target.innerHTML = 'X';
          turn = 'O';
          break;
        case currentChoise == 'O':
          e.target.innerHTML = 'O';
          turn = 'x';
          break;
      }
    }
  }
  let btn1 = document.getElementById('btn1').innerText;
  let btn2 = document.getElementById('btn2').innerText;
  let btn3 = document.getElementById('btn3').innerText;
  let btn4 = document.getElementById('btn4').innerText;
  let btn5 = document.getElementById('btn5').innerText;
  let btn6 = document.getElementById('btn6').innerText;
  let btn7 = document.getElementById('btn7').innerText;
  let btn8 = document.getElementById('btn8').innerText;
  let btn9 = document.getElementById('btn9').innerText;


  if (btn1 === btn2 && btn1 === btn3 && btn1 != '' && btn2 != '' && btn3 != '' || btn4 === btn5 && btn4 === btn6 && btn4 != '' && btn5 != '' && btn6 != '' || btn7 === btn8 && btn7 === btn9 && btn7 != '' && btn8 != '' && btn9 != '' || btn1 === btn5 && btn1 === btn9 && btn1 != '' && btn5 != '' && btn9 != '' || btn3 === btn5 && btn3 === btn7 && btn3 != '' && btn5 != '' && btn7 != '' || btn1 === btn4 && btn1 === btn7 && btn1 != '' && btn4 != '' && btn7 != '' || btn2 === btn5 && btn2 === btn8 && btn2 != '' && btn5 != '' && btn8 != '' || btn3 === btn6 && btn3 === btn9 && btn3 != '' && btn6 != '' && btn9 != '') {
   
    let visible = document.querySelector('.alert-notif').style.visibility = 'visible';
    let blur = document.getElementById("body-game").classList.add("game-body");
    let disable_btn = function()
    {
      for (let i = 1; i < 10; i++) 
      {
        document.getElementById("btn"+i).disabled = true;
      }
    }
    let noWinner = false;
    let onWinning = setTimeout(() => { visible; noWinner = true; blur; disable_btn();  }, "50");
    let letter;
    function winner(letter)
    {
      let firstPlayer = document.getElementById("first-player");
      let secondPlayer = document.getElementById("second-player");
      let winnerIs = document.getElementById('winnerIs');


      if (letter === 'O') 
      {
          winnerIs.innerHTML = secondPlayer.innerHTML;
      }else if (letter === 'X') 
      {
          winnerIs.innerHTML = firstPlayer.innerHTML;
      }
    }

    if (btn1 === btn2 && btn1 === btn3) { onWinning ,winner(btn1)}
    if (btn7 === btn8 && btn7 === btn9) { onWinning ,winner(btn7)}
    if (btn1 === btn5 && btn1 === btn9) { onWinning ,winner(btn5)}
    if (btn4 === btn5 && btn4 === btn6) { onWinning ,winner(btn4)}
    if (btn3 === btn5 && btn3 === btn7) { onWinning ,winner(btn3)}
    if (btn1 === btn4 && btn1 === btn7) { onWinning ,winner(btn1)}
    if (btn2 === btn5 && btn2 === btn8) { onWinning ,winner(btn2)}
    if (btn3 === btn6 && btn3 === btn9) { onWinning ,winner(btn3)}
} 


});



function soundOn()
{
   document.getElementById('bg-sound').play();
}
soundOn();

function soundOff()
{
  document.getElementById('bg-sound').pause();

}


