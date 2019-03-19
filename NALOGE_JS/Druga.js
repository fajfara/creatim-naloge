// Popravi spodnjo kodo, da bo index pravilno izpisan vsako iteracijo z 200ms zamikom
(function(){
    var index, 
        length = 20;
    for(index = 0; index <= length; index++){
        (function(ind) {
            setTimeout(function(){console.log(ind);}, 100 + (200 * ind));
        })(index);
    };
})();

