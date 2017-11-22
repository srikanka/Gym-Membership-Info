var pageCount = 1;
var infoContainer = document.getElementById("info");
var btn = document.getElementById("btn");

//event listener
btn.addEventListener("click", function () {
    var myRequest = new XMLHttpRequest();
    //we are loading the URL with AJAX
    myRequest.open('GET',  'https://raw.githubusercontent.com/srikanka/jsonFiles/json2/json'+ pageCount + '.json');
//what to do with the loaded JSON data
    myRequest.onload = function () {
        var myData = JSON.parse(myRequest.responseText); //tells browser to view the text in as JSON formatted text
        renderHTML(myData);
    };
//send the request
    myRequest.send();
    pageCount++;
    if (pageCount > 3){
        btn.style.display = "none";
    }
});

//adds HTML to empty div element
function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" +data[i].name  + " is " + data[i].age + " years old." + "</p>";

    }
    infoContainer.insertAdjacentHTML('beforeend', htmlString);
}