var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.remove(); // Remove o pai do elemento na árvore DOM
});