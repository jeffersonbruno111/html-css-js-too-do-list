function adicionar(){
    var texto = document.getElementById("txtname").value;

    switch (texto){
        case "":
            console.log("Campo vazio.");
            break;
        default:
            var ol = document.getElementById("list").innerHTML;
            ol = ol +"<li>"+texto+"</li>";

            document.getElementById("list").innerHTML = ol;
            document.getElementById("txtname").value = "";
    }

   /* if(texto === ""){
        return null;
    }else{
        var ol = document.getElementById("list").innerHTML;
        ol = ol +"<li>"+texto+"</li>";

        document.getElementById("list").innerHTML = ol;
        document.getElementById("txtname").value = "";
    }*/
}