class ConsultadorDeCep {
    constructor(cep) {
        this.cep = cep;
    }
    consultaCep() {
        $.ajax({
            url: `https://viacep.com.br/ws/${this.cep}/json/`,
            success: (resultado) => {
               console.log(resultado.localidade);
            },
        });
    }
}