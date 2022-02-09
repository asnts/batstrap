class ConsultadorDeCepView {
    adicionaCorAlerta(elemento, novaClasse) {
        elemento.addClass(novaClasse);
    }
    removeCorAlerta(elemento, classe) {
        elemento.removeClass(classe);
    }
    preencheForm(campoUf, campoCidade, campoBairro, campoRua, endereco) {
        campoUf.val(endereco.uf);
        campoCidade.val(endereco.localidade);
        campoBairro.val(endereco.bairro);
        campoRua.val(endereco.logradouro);
    }
}