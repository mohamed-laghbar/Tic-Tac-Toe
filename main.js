function storeNames() {
  let firstName = document.getElementById("first-name").value;
  let secondName = document.getElementById("second-name").value;

  localStorage.setItem("first", firstName);
  localStorage.setItem("second", secondName);
}

function setPlayersName()
{
  let firstPlayer = document.getElementById("first-player");
  let secondPlayer = document.getElementById("second-player");

  firstPlayer.innerHTML =   localStorage.getItem('first');   ;
  secondPlayer.innerHTML =   localStorage.getItem('second');   ;
}

function start()
{
  localStorage.clear();
}


let turn = 'x';

const simo = document.getElementById("selectedBox");

simo.addEventListener('click', (e) => {

if( e.target.tagName == 'BUTTON')
{
  
  if (e.target.innerHTML == '') 
  {
    let currentChoise = turn ;
    switch (e.target.innerHTML == '')
      {
       case currentChoise == 'x':
          e.target.innerHTML = 'X';
          turn = 'O';
          console.log(' first condition' + currentChoise);
        break;
        case currentChoise == 'O':
            e.target.innerHTML = 'O';
            turn = 'x';
            console.log(' second condition' + currentChoise);
        break;
      }
  }
}



});


