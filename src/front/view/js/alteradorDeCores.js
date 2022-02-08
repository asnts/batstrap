class AlteradorDeCores {
    adicionaCorAlerta(elemento, novaClasse) {
        elemento.addClass(novaClasse);
    }
    removeCorAlerta(elemento, classe) {
        elemento.removeClass(classe);
    }
}