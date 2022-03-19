var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) 
    {
        for (var i = 0; i < pacientes.length; i++) 
        {
            
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressaoRegular = new RegExp(this.value,"i") // Utilizada para realizar buscas de expressões em textos (padrão de texto, flag de como buscar i = case insensitive)
            
            if (!expressaoRegular.test(nome)) 
            {
                paciente.classList.add("ocultar-nome");
            } 
            else 
            {
                paciente.classList.remove("ocultar-nome")
            }
        }
    } 
    else 
    {
        for (var i = 0; i < pacientes.length; i++) 
        {
            var paciente = pacientes[i];
            paciente.classList.remove("ocultar-nome")
        }
    }

});