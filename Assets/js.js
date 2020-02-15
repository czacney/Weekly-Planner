//moment js code
$("#currentDay").text(moment().format('MMMM Do, YYYY'));

//curent time for past present future
var currentTime= moment().format ("HH");

//timeblocks
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


for (var i = 0; i < hours.length; i++) {

    console.log(hours[i]);
//hour of the day colum
    var newRow = $("<div class='row'>");
    var hourCol = $("<div class='col-2'>");
    hourCol.text(hours[i]);
    var titleCol = $("<div class='col-8'>");
//creating text input fields
    var textField = $("<textarea>");
    textField.addClass("form-control");
    console.log("textfield", textField);
    titleCol.append(textField);
//making save buttons
    var saveCol = $("<div class='col-2'>");
    var saveButton = $("<button class='saveBtn'>");
    saveButton.append("<i class='fas fa-save'>");
    saveCol.append(saveButton);

    newRow.append(hourCol, titleCol, saveCol);

    $("#calendar-view").append(newRow);
//color changes relative to time function loop
    if(currentTime > i) {
        newRow.addClass("past");
    }
    else if(currentTime === i) {
        newRow.addClass("present");
    }
    else if(currentTime < i ) {
        newRow.addClass("future");
    }
// //save button function 
//$("saveBtn").click(function () {
   // var 



}
