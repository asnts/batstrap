class ConsultadorDeCep {
    constructor(cep) {
        this.cep = cep;
    }
    consultaCep() {
        $.ajax({
            url: `viacep.com.br/ws/${this.cep}/json/`,
            success: (resultado) => {
               console.log(resultado);
            },
        });
    }
}