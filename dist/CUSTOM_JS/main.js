var prvaButtons = document.getElementById("prvaButtons").children,
    prvaNalogaIzpis = document.getElementById("prvaNalogaIzpis").children,
    drugaButtons = document.getElementById("drugaButtons").children,
    drugaNalogaIzpis = document.getElementById("drugaNalogaIzpis").children,
    tretjaButtons = document.getElementById("tretjaButtons").children,
    tretjaNalogaIzpis = document.getElementById("tretjaNalogaIzpis").children,
    cetrtaButtons = document.getElementById("cetrtaButtons").children,
    cetrtaNalogaIzpis = document.getElementById("cetrtaNalogaIzpis").children,
    petaButtons = document.getElementById("petaButtons").children,
    petaNalogaIzpis = document.getElementById("petaNalogaIzpis").children,
    elements = document.getElementsByClassName("element"),
    prikazIdja = document.getElementById("prikaz-id").children,
    barva;



var checkVars = {
    prvaOpened: false,
    drugaOpened: false,
    tretjaOpened: false,
    cetrtaOpened: false,
    petaOpened: false,
}

// Koda za cetrto nalogo
var object = {
    alert: function (txt) {
        alert(txt);
        return this;
    },
    confirm: function (txt) {
        confirm(txt);
        odstraniVseOdprte();
        checkVars.cetrtaOpened = true;
        return this;
    }
}

document.getElementById("cetrtaNalogaBtn").addEventListener("click", function () {
    object.alert("Warning: you are about to delete this item!").confirm("Are you sure?");
});

// Za vsak gumb pod div-om od vsake naloge dodaj event listener z ustrezno  funkcijo

for (let index = 0; index < prvaButtons.length; index++) {
    if (index === 0) {
        prvaButtons[index].addEventListener("click", prikaziNalogoPrvo);
    } else if (index === 1) {
        prvaButtons[index].addEventListener("click", prikaziKodoPrvo);
    }
}

for (let index = 0; index < drugaButtons.length; index++) {
    if (index === 0) {
        drugaButtons[index].addEventListener("click", prikaziNalogoDrugo);
    } else if (index === 1) {
        drugaButtons[index].addEventListener("click", prikaziKodoDrugo);
    }
}

for (let index = 0; index < tretjaButtons.length; index++) {
    if (index === 0) {
        tretjaButtons[index].addEventListener("click", prikaziNalogoTretjo);
    } else if (index === 1) {
        tretjaButtons[index].addEventListener("click", prikaziKodoTretjo);
    }
}

for (let index = 0; index < cetrtaButtons.length; index++) {
    if (index === 1) {
        cetrtaButtons[index].addEventListener("click", prikaziKodoCetrto);
    }
}

for (let index = 0; index < petaButtons.length; index++) {
    if (index === 0) {
        petaButtons[index].addEventListener("click", prikaziNalogoPeto);
    } else if (index === 1) {
        petaButtons[index].addEventListener("click", prikaziKodoPeto);
    }
}








//  Funkcije

// Funkcije za prvo nalogo



function prikaziNalogoPrvo() {
    odstraniVseOdprte();
    // Odstrani vse prejšnje izpiske števil
    while (prvaNalogaIzpis[0].firstChild) {
        prvaNalogaIzpis[0].removeChild(prvaNalogaIzpis[0].firstChild);
    }
    for (var x = 1; x <= 100; x++) {
        var liStevilka = document.createElement("LI");
        // Preveri ali je število večkratnik obeh
        if (x % 3 == 0 && x % 5 == 0) {
            liStevilka.innerHTML = "Večkratnik obeh: " + x;
        }
        // Preveri če je samo večkratnik 3
        else if (x % 3 == 0) {
            liStevilka.innerHTML = "Večkratnik trojke: " + x;
        }
        // Preveri če je samo večkratnik 5
        else if (x % 5 == 0) {
            liStevilka.innerHTML = "Večkratnik petke: " + x;

        }
        prvaNalogaIzpis[0].appendChild(liStevilka);
    };
    prvaNalogaIzpis[0].classList.remove("display-none");
    checkVars.prvaOpened = true;
}

function prikaziKodoPrvo() {
    odstraniVseOdprte();
    // Odstrani vse prejšnje izpiske števil
    while (prvaNalogaIzpis[0].firstChild) {
        prvaNalogaIzpis[0].removeChild(prvaNalogaIzpis[0].firstChild);
    }

    prvaNalogaIzpis[1].classList.remove("display-none");
    checkVars.prvaOpened = true;
}

// Funkcije za drugo nalogo


function prikaziNalogoDrugo() {
    odstraniVseOdprte();
    // Odstrani vse prejšnje izpiske števil
    while (drugaNalogaIzpis[0].firstChild) {
        drugaNalogaIzpis[0].removeChild(drugaNalogaIzpis[0].firstChild);
    }
    drugaNalogaIzpis[0].classList.remove("display-none");
    checkVars.drugaOpened = true;
    (function () {
        var index,
            length = 20;
        for (index = 0; index <= length; index++) {
            (function (ind) {
                setTimeout(function () {

                    drugaNalogaIzpis[0].innerHTML = "";
                    drugaNalogaIzpis[0].innerHTML = ind;
                    ;
                }, 100 + (200 * ind));
            })(index);
        };
    })();

}



function prikaziKodoDrugo() {
    odstraniVseOdprte();
    // Odstrani vse prejšnje izpiske števil
    while (drugaNalogaIzpis[0].firstChild) {
        drugaNalogaIzpis[0].removeChild(drugaNalogaIzpis[0].firstChild);
    }

    drugaNalogaIzpis[1].classList.remove("display-none");
    checkVars.drugaOpened = true;
}


// funkcije za tretjo nalogo


function prikaziNalogoTretjo() {
    odstraniVseOdprte();
    // Odstrani vse prejšnje izpiske števil
    while (tretjaNalogaIzpis[0].firstChild) {
        tretjaNalogaIzpis[0].removeChild(tretjaNalogaIzpis[0].firstChild);
    }
    (function () {
        if (navigator.userAgent.match(/MSIE 7/) !== null) {
            alert("Hello World");
        } else {
            alert("Ne uporabljate IE 7");
        }
    })()
    checkVars.tretjaOpened = true;
}

function prikaziKodoTretjo() {
    odstraniVseOdprte();
    // Odstrani vse prejšnje izpiske števil
    while (tretjaNalogaIzpis[0].firstChild) {
        tretjaNalogaIzpis[0].removeChild(tretjaNalogaIzpis[0].firstChild);
    }

    tretjaNalogaIzpis[1].classList.remove("display-none");
    checkVars.tretjaOpened = true;
}

// Funkcije za cetrto nalogo

function prikaziKodoCetrto() {
    odstraniVseOdprte();
    cetrtaNalogaIzpis[0].classList.remove("display-none");
    checkVars.cetrtaOpened = true;
}

// Funkcije za peto nalogo
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    element.addEventListener("mousemove", prikaziId);
    element.addEventListener("mouseleave", removeId);

};

// Funkcija za prikaz na katerem div-u je uporabnik
function prikaziId(event) {
    // Izbria za izpis prave barve
    switch (event.target.id) {
        case "element1":
            barva = "rdeče";
            break;
        case "element2":
            barva = "modre";
            break;
        case "element3":
            barva = "rumene";
            break;
        default:
            break;
    }
    prikazIdja[1].innerHTML = "Div z id: " + event.target.id + " ki je " + barva + " barve!";
}

// Funkcija za odstranitev id texta
function removeId() {
    prikazIdja[1].innerHTML = "";
}

function prikaziNalogoPeto() {
    odstraniVseOdprte();
    petaNalogaIzpis[0].classList.remove("display-none");
    checkVars.petaOpened = true;
}

function prikaziKodoPeto() {
    odstraniVseOdprte();
    petaNalogaIzpis[1].classList.remove("display-none");
    checkVars.petaOpened = true;
}





// Globalne funkcije
function odstraniVseOdprte() {
    if (checkVars.prvaOpened || checkVars.drugaOpened || checkVars.tretjaOpened || checkVars.cetrtaOpened || checkVars.petaOpened) {
        for (let index = 0; index < prvaNalogaIzpis.length; index++) {
            const element = prvaNalogaIzpis[index];
            element.classList.add("display-none");
            checkVars.prvaOpened = false;
        }
        for (let index = 0; index < drugaNalogaIzpis.length; index++) {
            const element = drugaNalogaIzpis[index];
            element.classList.add("display-none");
            checkVars.drugaOpened = false;
        }
        for (let index = 0; index < tretjaNalogaIzpis.length; index++) {
            const element = tretjaNalogaIzpis[index];
            element.classList.add("display-none");
            checkVars.tretjaOpened = false;
        }
        for (let index = 0; index < cetrtaNalogaIzpis.length; index++) {
            const element = cetrtaNalogaIzpis[index];
            element.classList.add("display-none");
            checkVars.cetrtaOpened = false;
        }
        for (let index = 0; index < petaNalogaIzpis.length; index++) {
            const element = petaNalogaIzpis[index];
            element.classList.add("display-none");
            checkVars.petaOpened = false;
        }
    }
}