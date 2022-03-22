export class SistemaAutenticacao {
    static login(usuario, senha) {
        if (SistemaAutenticacao.autenticavel(usuario)) {
            return usuario.autenticar(senha);
        }
        return false;
    }

    static autenticavel(usuario){
      return  "autenticar" in usuario && 
      usuario.autenticar instanceof Function
    }
}