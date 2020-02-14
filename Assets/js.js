$("#currentDay").text(moment().format('MMMM Do, YYYY'));

var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// <i class="fas fa-save"></i>


for(var i = 0; i < hours.length; i++) {

    console.log(hours[i]);

    var newRow = $("<div class='row'>");

    var hourCol = $("<div class='col-2'>");

    hourCol.text(hours[i]);

    var titleCol = $("<div class='col-8'>");

    var textField = $("<textarea>");
    textField.addClass("form-control");
    console.log("textfield", textField);

    titleCol.append(textField);

    var saveCol = $("<div class='col-2'>");

    var saveButton = $("<button class='saveBtn'>");

    saveButton.append("<i class='fas fa-save'>");

    saveCol.append(saveButton);

    newRow.append(hourCol, titleCol, saveCol);

    $("#calendar-view").append(newRow);
}