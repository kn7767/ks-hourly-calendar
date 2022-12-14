var today = moment();
$('#currentDay').text(today.format('LLLL'));

var clearAll = document.getElementById('clear');
clearAll.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

renderInput();

var saveInput = document.getElementById('save');

function savetoStorage(userInput) {
    let hournine = document.querySelector('#nine').value;
    if (hournine != "") {
    localStorage.setItem('nine', hournine);
    }
    let hourten = document.querySelector('#ten').value;
    if (hourten != "") {
    localStorage.setItem('ten', hourten);
    }
    let houreleven = document.querySelector('#eleven').value;
    if (houreleven !="") {
    localStorage.setItem('eleven', houreleven);
    }
    let hourtwelve = document.querySelector('#twelve').value;
    if (hourtwelve !=""){
    localStorage.setItem('twelve', hourtwelve);
    }
    let hourone = document.querySelector('#one').value;
    if (hourone != ""){
    localStorage.setItem('one', hourone);
    }
    let hourtwo = document.querySelector('#two').value;
    if (hourtwo != ""){
    localStorage.setItem('two', hourtwo);
    }
    let hourthree = document.querySelector('#three').value;
    if (hourthree !="") {
    localStorage.setItem('three', hourthree);
    }
    let hourfour = document.querySelector('#four').value;
    if (hourfour !=""){
    localStorage.setItem('four', hourfour);
    }
    let hourfive = document.querySelector('#five').value;
    if (hourfive !=""){
    localStorage.setItem('five', hourfive);
    }
    location.reload();
    userInput.preventDefault(); //attempt to prevent input values from disappearing
}
saveInput.addEventListener("click", savetoStorage);

function renderInput() {
var hournine = localStorage.getItem('nine');
console.log("9:00AM = " + hournine);
var hourten = localStorage.getItem('ten');
console.log("10:00AM = " + hourten);
var houreleven = localStorage.getItem('eleven');
console.log("11:00AM = " + houreleven);
var hourtwelve = localStorage.getItem('twelve');
console.log("12:00PM = " + hourtwelve);
var hourone = localStorage.getItem('one');
console.log("1:00PM = " + hourone);
var hourtwo = localStorage.getItem('two');
console.log("2:00PM = " + hourtwo);
var hourthree = localStorage.getItem('three');
console.log("3:00PM = " + hourthree);
var hourfour = localStorage.getItem('four');
console.log("4:00PM = " + hourfour);
var hourfive = localStorage.getItem('five');
console.log("5:00PM = " + hourfive);
}

let currentTime = moment().format("H");
console.log("Current hour = " + currentTime);
let currentHour = parseInt(currentTime);

function timeTracker(event) {
let currentTimeBlock = parseInt($(event));

if (currentTimeBlock > currentHour) {
    $(event).addClass('future'); }
else if (currentTimeBlock === currentHour){
    $(event).addClass('present');}
else {
    $(event).addClass('past');
}};