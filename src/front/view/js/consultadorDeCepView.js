class ConsultadorDeCepView extends ValidadorDeDadoView {
    constructor() {
        super();
    }

    preencheForm(campoUf, campoCidade, campoBairro, campoRua, endereco) {
        campoUf.val(endereco.uf);
        campoCidade.val(endereco.localidade);
        campoBairro.val(endereco.bairro);
        campoRua.val(endereco.logradouro);
    }
}