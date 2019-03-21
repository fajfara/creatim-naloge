for (var stevilo = 1; stevilo <= 100; stevilo++){
    // Preveri ali je število večkratnik obeh
    if( stevilo % 3 == 0 && stevilo % 5 == 0 ) {
        console.log("Trojka in Petka: " + stevilo);
    } 
    // Preveri če je samo večkratnik 3
    else if(stevilo % 3 == 0){
            console.log("Trojka: " + stevilo);
    }
    // Preveri če je samo večkratnik 5
    else if( stevilo % 5 == 0 ) {
            console.log("Petka: " + stevilo);
        
    }
};