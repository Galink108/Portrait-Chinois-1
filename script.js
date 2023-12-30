
//Remplir la page

var numCase = 0;

data.forEach(function (ligne) {
    var element = "<nobr class='mot-cliquable'> Si j'étais " + ligne["analogie"] + ", je serais " + ligne["valeur"] + "</nobr>";
    document.querySelector(".liste-analogies").innerHTML += "<section class='block-img " + ligne['class-id'] + "' id='"+ ligne['class-id'] + "'><h2>" + element + "</h2></section>";
    document.querySelector(".popup p").innerHTML += "<p>" + ligne["explication"] + "</p>";
})

//Afficher la popup 
var popup = document.querySelector(".popup");

document.querySelectorAll(".mot-cliquable").forEach(function (element) {
    element.addEventListener("click", function (event) {
        var urlImg = window.getComputedStyle(element.parentElement.parentElement).backgroundImage.replace('url("', '').replace('")', '');
        document.querySelector('.popup img').setAttribute('src', urlImg); 
        popup.classList.remove("popup-invisible");
        popup.classList.add("popup-visible");
    })
})
popup.addEventListener("click", function (event) {

    popup.classList.remove("popup-visible");
    popup.classList.add("popup-invisible");
})

//Afficher les données du formulaire

document.querySelectorAll('input#analogie, input#valeur, textarea#explication, input#urlImage').forEach(function(element) {
    element.addEventListener('keyup', function (event) {
        var background = "background-image: url(\'" + document.querySelector('input#urlImage').value + "\')"
        document.querySelector('.nouvelle-analogie').innerHTML="<section class='block-img' style='" + background + "'> <h2> <nobr class='mot-cliquable'>Si j'étais " + document.querySelector('input#analogie').value + ", Je serai" + document.querySelector('input#valeur').value+ ".</nobr> </h2> <p>"+ document.querySelector('textarea#explication').value+ "</p> </section>"
    })
})

// Ouverture et fermeture du Menu burger
var sidenav = document.getElementById("SideNav");

document.querySelectorAll('a#Open').forEach(function(element){
    element.addEventListener('mousedown', function (event){
        sidenav.classList.add("menuOuvert");
        console.log(sidenav.classList);
    })
})
console.log(sidenav.classList)

document.querySelectorAll("a#rubrique").forEach(function(element){
    element.addEventListener('click', function(event){
        sidenav.classList.remove("menuOuvert");
    })
})
