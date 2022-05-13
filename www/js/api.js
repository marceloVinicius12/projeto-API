$("#btn").on("click", function(){
    var validacep = /^[0-9]{8}$/;
    var numCep = $("#CEP").val();
    var url = "https://viacep.com.br/ws/"+numCep+"/json";
    document.querySelector("#numero").innerHTML = numero
    numero.classList.add("numeroNecessesario")
    
    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        success:function(dados){
            $("#logradouro").val(dados.logradouro);
            $("#ddd").val("ddd "+dados.ddd);
            $("#uf").val(dados.uf);
            $("#cidade").val(dados.localidade);
            $("#bairro").val(dados.bairro);
     
        }
    }) 
})



