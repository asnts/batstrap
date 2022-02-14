class ConsultadorDeCep {

    constructor() {
        this.cepExpReg = /^[0-9]{8}$/
    }

    validaCep(cep) {
        cep = cep.replace('-','');
        return this.cepExpReg.test(cep);
    }

    consultaCep(cep) {
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            success: (resultado) => {
                this.endereco = {...resultado};
            },
        });
    }

    getEndereco() {
        return this.endereco;
    }

}