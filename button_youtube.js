var button = document.createElement("button");
button.innerHTML = "YouTube";

// Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

//Add event header
button.addEventListener ("click", function pageRedirect() {
    alert("Do you want to be redirected? You cannot go back to this site by pressing the 'back' button!")
    window.location.replace("https://youtube.com/");
})