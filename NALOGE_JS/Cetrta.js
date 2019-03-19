var object = {
    alert : function(txt){
        alert(txt);
        return this;
    },
    confirm : function(txt){
        confirm(txt);
        return this;
    }
}

document.getElementById("cetrtaNalogaBtn").addEventListener("click", function(){
    object.alert("Warning: you are about to delete this item!").confirm("Are you sure?");
});