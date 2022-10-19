var today = moment();
$('#currentDay').text(today.format('LLLL'));

renderInput();

var saveInput = document.getElementById('save');

function savetoStorage() {
    let hournine = document.querySelector('#nine').value;
    localStorage.setItem('nine', hournine);
}
saveInput.addEventListener("click", savetoStorage);

function renderInput() {
var hournine = localStorage.getItem('nine');
hournine.textContent = hournine;
console.log(hournine);

console.log(localStorage);
$("#nine .description").val(localStorage.getItem("nine"));
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

