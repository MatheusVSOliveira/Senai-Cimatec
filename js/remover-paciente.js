var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(event){
    
    event.target.parentNode.classList.add("fadeOut");
   
    //função que adiciona um intervalo até que outra função seja executada
    setTimeout(function(){ 
        event.target.parentNode.remove(); // Função que remove o pai no nó HTML
    },400)
   
     
});