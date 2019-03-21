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


// Object 
var naloga = {
    prvaOpened: false,
    drugaOpened: false,
    tretjaOpened: false,
    cetrtaOpened: false,
    petaOpened: false,
}



// Za vsak gumb pod div-om od vsake naloge dodaj event listener z ustrezno  funkcijo

for (var index = 0; index < prvaButtons.length; index++) {
    if (index === 0) {
        prvaButtons[index].addEventListener("click", prikaziNalogoPrvo);
    } else if (index === 1) {
        prvaButtons[index].addEventListener("click", prikaziKodoPrvo);
    }
};

for (var index = 0; index < drugaButtons.length; index++) {
    if (index === 0) {
        drugaButtons[index].addEventListener("click", prikaziNalogoDrugo);
    } else if (index === 1) {
        drugaButtons[index].addEventListener("click", prikaziKodoDrugo);
    };
};

for (var index = 0; index < tretjaButtons.length; index++) {
    if (index === 0) {
        tretjaButtons[index].addEventListener("click", prikaziNalogoTretjo);
    } else if (index === 1) {
        tretjaButtons[index].addEventListener("click", prikaziKodoTretjo);
    };
};

for (var index = 0; index < cetrtaButtons.length; index++) {
    if (index === 1) {
        cetrtaButtons[index].addEventListener("click", prikaziKodoCetrto);
    };
};

for (var index = 0; index < petaButtons.length; index++) {
    if (index === 0) {
        petaButtons[index].addEventListener("click", prikaziNalogoPeto);
    } else if (index === 1) {
        petaButtons[index].addEventListener("click", prikaziKodoPeto);
    };
};




//  Funkcije

// Funkcije za prvo nalogo



function prikaziNalogoPrvo() {
    odstraniVseOdprte();
    // Odstrani vse prejšnje izpiske števil
    while (prvaNalogaIzpis[0].firstChild) {
        prvaNalogaIzpis[0].removeChild(prvaNalogaIzpis[0].firstChild);
    };
    for (var stevilo = 1; stevilo <= 100; stevilo++) {
        var liStevilka = document.createElement("LI");
        // Preveri ali je število večkratnik obeh
        if (stevilo % 3 == 0 && stevilo % 5 == 0) {
            liStevilka.innerHTML = "Večkratnik obeh: " + stevilo;
        }
        // Preveri če je samo večkratnik 3
        else if (stevilo % 3 == 0) {
            liStevilka.innerHTML = "Večkratnik trojke: " + stevilo;
        }
        // Preveri če je samo večkratnik 5
        else if (stevilo % 5 == 0) {
            liStevilka.innerHTML = "Večkratnik petke: " + stevilo;

        };
        prvaNalogaIzpis[0].appendChild(liStevilka);
    };
    prvaNalogaIzpis[0].classList.remove("display-none");
    naloga.prvaOpened = true;
};

function prikaziKodoPrvo() {
    odstraniVseOdprte();
    // Odstrani vse prejšnje izpiske števil
    while (prvaNalogaIzpis[0].firstChild) {
        prvaNalogaIzpis[0].removeChild(prvaNalogaIzpis[0].firstChild);
    };

    prvaNalogaIzpis[1].classList.remove("display-none");
    naloga.prvaOpened = true;
};

// Funkcije za drugo nalogo


function prikaziNalogoDrugo() {
    odstraniVseOdprte();
    // Odstrani vse prejšnje izpiske števil
    while (drugaNalogaIzpis[0].firstChild) {
        drugaNalogaIzpis[0].removeChild(drugaNalogaIzpis[0].firstChild);
    };
    drugaNalogaIzpis[0].classList.remove("display-none");
    naloga.drugaOpened = true;
    (function () {
        var index,
            length = 20;
        for (index = 0; index <= length; index++) {
            (function (ind) {
                setTimeout(function () {

                    drugaNalogaIzpis[0].innerHTML = "";
                    drugaNalogaIzpis[0].innerHTML = ind;;
                }, 100 + (200 * ind));
            })(index);
        };
    })();

};



function prikaziKodoDrugo() {
    odstraniVseOdprte();
    // Odstrani vse prejšnje izpiske števil
    while (drugaNalogaIzpis[0].firstChild) {
        drugaNalogaIzpis[0].removeChild(drugaNalogaIzpis[0].firstChild);
    };

    drugaNalogaIzpis[1].classList.remove("display-none");
    naloga.drugaOpened = true;
};


// funkcije za tretjo nalogo


function prikaziNalogoTretjo() {
    odstraniVseOdprte();
    // Odstrani vse prejšnje izpiske števil
    while (tretjaNalogaIzpis[0].firstChild) {
        tretjaNalogaIzpis[0].removeChild(tretjaNalogaIzpis[0].firstChild);
    }
    console.log("RUNNING");
    (function () {
        if (navigator.userAgent.match(/MSIE 7/) !== null) {
            alert("Hello World");
        } else {
            alert("Ne uporabljate IE 7");
        }
    })();
    naloga.tretjaOpened = true;
};

function prikaziKodoTretjo() {
    odstraniVseOdprte();
    // Odstrani vse prejšnje izpiske števil
    while (tretjaNalogaIzpis[0].firstChild) {
        tretjaNalogaIzpis[0].removeChild(tretjaNalogaIzpis[0].firstChild);
    };



    tretjaNalogaIzpis[1].classList.remove("display-none");
    naloga.tretjaOpened = true;
};

// Funkcije za cetrto nalogo, koda za četrto nalogo
var object = {
    alert: function (txt) {
        alert(txt);
        return this;
    },
    confirm: function (txt) {
        confirm(txt);
        odstraniVseOdprte();
        naloga.cetrtaOpened = true;
        return this;
    }
}

document.getElementById("cetrtaNalogaBtn").addEventListener("click", function () {
    object.alert("Warning: you are about to delete this item!").confirm("Are you sure?");
});

function prikaziKodoCetrto() {
    odstraniVseOdprte();
    cetrtaNalogaIzpis[0].classList.remove("display-none");
    naloga.cetrtaOpened = true;
};

// Funkcije za peto nalogo
for (var index = 0; index < elements.length; index++) {
    var element = elements[index];
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
};

// Funkcija za odstranitev id texta
function removeId() {
    prikazIdja[1].innerHTML = "";
}

function prikaziNalogoPeto() {
    odstraniVseOdprte();
    petaNalogaIzpis[0].classList.remove("display-none");
    naloga.petaOpened = true;
}

function prikaziKodoPeto() {
    odstraniVseOdprte();
    petaNalogaIzpis[1].classList.remove("display-none");
    naloga.petaOpened = true;
};




// Globalne funkcije
function odstraniVseOdprte() {
    if (naloga.prvaOpened || naloga.drugaOpened || naloga.tretjaOpened || naloga.cetrtaOpened || naloga.petaOpened) {
        for (var index = 0; index < prvaNalogaIzpis.length; index++) {
            var element = prvaNalogaIzpis[index];
            element.classList.add("display-none");
            naloga.prvaOpened = false;
        };
        for (var index = 0; index < drugaNalogaIzpis.length; index++) {
            var element = drugaNalogaIzpis[index];
            element.classList.add("display-none");
            naloga.drugaOpened = false;
        };
        for (var index = 0; index < tretjaNalogaIzpis.length; index++) {
            var element = tretjaNalogaIzpis[index];
            element.classList.add("display-none");
            naloga.tretjaOpened = false;
        };
        for (var index = 0; index < cetrtaNalogaIzpis.length; index++) {
            var element = cetrtaNalogaIzpis[index];
            element.classList.add("display-none");
            naloga.cetrtaOpened = false;
        };
        for (var index = 0; index < petaNalogaIzpis.length; index++) {
            var element = petaNalogaIzpis[index];
            element.classList.add("display-none");
            naloga.petaOpened = false;
        };
    };
};