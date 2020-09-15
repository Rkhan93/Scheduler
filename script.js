// VARIABLES FOR HOURS
var time9 = document.getElementById("task9")
var time10 = document.getElementById("task10")
var time11 = document.getElementById("task11")
var time12 = document.getElementById("task12")
var time1 = document.getElementById("task1")
var time2 = document.getElementById("task2")
var time3 = document.getElementById("task3")
var time4 = document.getElementById("task4")
var time5 = document.getElementById("task5")

// SHOWS THE CURRENT TIME
var CurrentTime = moment().format("H")

//VARIABLES FOR DATE AND TIME
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var hour = today.getHours();

// SHOWS THE CURRENT DATE AND DAY
document.getElementById("currentDate").innerText = date

//SHOULD FORMAT CLASS WITH THE CURRENT TIME 
if( CurrentTime> 9){
    time9.classList.add("past");
}
if( CurrentTime < 9){
    time9.classList.add("future");
}
if(CurrentTime == 9 ) {
    time9.classList.add("present");
}

if( CurrentTime> 10){
    time10.classList.add("past");
}
if( CurrentTime < 10){
    time10.classList.add("future");
}
if(CurrentTime == 10 ) {
    time10.classList.add("present");
}
if( CurrentTime> 11){
    time11.classList.add("past");
}
if( CurrentTime < 11){
    time11.classList.add("future");
}
if(CurrentTime == 11 ) {
    time11.classList.add("present");
}
if( CurrentTime> 12){
    time12.classList.add("past");
}
if( CurrentTime < 12){
    time12.classList.add("future");
}
if(CurrentTime == 12 ) {
    time12.classList.add("present");
}
if( CurrentTime> 1){
    time1.classList.add("past");
}
if( CurrentTime < 1){
    time1.classList.add("future");
}
if(CurrentTime == 1 ) {
    time1.classList.add("present");
}
if( CurrentTime> 2){
    time2.classList.add("past");
}
if( CurrentTime < 2){
    time2.classList.add("future");
}
if(CurrentTime == 2 ) {
    time2.classList.add("present");
}
if( CurrentTime> 3){
    time3.classList.add("past");
}
if( CurrentTime < 3){
    time3.classList.add("future");
}
if(CurrentTime == 3 ) {
    time3.classList.add("present");
}
if( CurrentTime> 4){
    time4.classList.add("past");
}
if( CurrentTime< 4){
    time4.classList.add("future");
}
if(CurrentTime == 4 ) {
    time4.classList.add("present");
}
if(CurrentTime> 5){
    time5.classList.add("past");
}
if( CurrentTime < 5){
    time5.classList.add("future");
}
if(CurrentTime == 5 ) {
    time5.classList.add("present");
}

//RETRIVES VALUES FROM LOCAL STORAGE

function getInputTask() {
    var task9 = localStorage.getItem('input9');
    var task10 = localStorage.getItem('input10');
    var task11 = localStorage.getItem('input11');
    var task12 = localStorage.getItem('input12');
    var task1 = localStorage.getItem('input1');
    var task2 = localStorage.getItem('input2');
    var task3 = localStorage.getItem('input3');
    var task4 = localStorage.getItem('input4');
    var task5 = localStorage.getItem('input5');
  
    document.getElementById('input9').value = task9;
    document.getElementById('input10').value = task10;
    document.getElementById('input11').value = task11;
    document.getElementById('input12').value = task12;
    document.getElementById('input1').value = task1;
    document.getElementById('input2').value = task2;
    document.getElementById('input3').value = task3;
    document.getElementById('input4').value = task4;
    document.getElementById('input5').value = task5;

};

//Still have alot more to do on it, trying to get caught up and get a grade for it so that it isn't incomplete anymore.
