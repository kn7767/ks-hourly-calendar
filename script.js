var today = moment();
$('#currentDay').text(today.format('LLLL'));

renderInput();

var saveInput = document.getElementById('save');
var nineam = document.getElementById('nineam');

function savetoStorage() {
    let hournine = document.querySelector('#nine').value;
    localStorage.setItem('nine', hournine);
    console.log(hournine);
}
saveInput.addEventListener("click", savetoStorage);

function renderInput() {
var hournine = localStorage.getItem('nine');
hournine.textContent = hournine;
console.log(localStorage);
}


// var nineInput = document.getElementById('nineam');
// function savetoStorage() {
//     localStorage.setItem("nineam", nineInput);
//     // nineInput.innerHTML =
//     localStorage.getItem("nineam");
//     console.log(nineInput);
// }




// function renderLastRegistered() {
//     var nineam = localStorage.getItem('nineam');
//     nineInput.textContent = nineam;
// }

//delete data - not required in proj
var clearInputs = document.getElementById('clear');
function clearStorage() {
    localStorage.clear();
    hournine.textContent = "";
}
clearInputs.addEventListener('click', clearStorage);

