const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    console.log(myObj);
};
xmlhttp.open("GET", "example.json");
xmlhttp.send();