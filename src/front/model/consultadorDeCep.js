class ConsultadorDeCep {

    validaCep(cep) {
        return true;
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