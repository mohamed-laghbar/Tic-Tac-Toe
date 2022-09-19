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







