for (var x = 1; x <= 100; x++){
    // Preveri ali je število večkratnik obeh
    if( x % 3 == 0 && x % 5 == 0 ) {
        console.log("Trojka in Petka: " + x);
    } 
    // Preveri če je samo večkratnik 3
    else if(x % 3 == 0){
            console.log("Trojka: " + x);
    }
    // Preveri če je samo večkratnik 5
    else if( x % 5 == 0 ) {
            console.log("Petka: " + x);
        
    }
};