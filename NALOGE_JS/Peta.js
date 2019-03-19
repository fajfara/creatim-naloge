var elements = document.getElementsByClassName("element"),
    prikazIdja = document.getElementById("prikaz-id").children;

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    element.addEventListener("mousemove", prikaziId);
    element.addEventListener("mouseleave", removeId);
    
};

// Funkcija za prikaz na katerem div-u je uporabnik
function prikaziId(event) {
    // Zapis id-ja elementa v html
    prikazIdja[1].innerHTML = event.target.id;
}

// Funkcija za odstranitev id texta
function removeId() {
    prikazIdja[1].innerHTML = "";
}


