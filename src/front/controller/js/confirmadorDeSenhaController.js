class ConfirmadorDeSenhaController {

    gerenciaConfirmacaoDeSenha() {
        const confirmadorDeSenha = new ConfirmadorDeSenha();
        const confirmadorDeSenhaView = new ConfirmadorDeSenhaView();
        const campoSenha = $('#senha');
        const campoConfirmacaoSenha = $('#confirmacao-senha');
        let senha = campoSenha.val();
        let confirmacaoSenha = campoConfirmacaoSenha.val();
        if (confirmadorDeSenha.confirmaSenha(senha, confirmacaoSenha)) {
            confirmadorDeSenhaView.removeCorAlerta(campoConfirmacaoSenha, 'dado-invalido');
            confirmadorDeSenhaView.adicionaCorAlerta(campoConfirmacaoSenha, 'dado-valido');
        } else {
            confirmadorDeSenhaView.removeCorAlerta(campoConfirmacaoSenha, 'dado-valido');
            confirmadorDeSenhaView.adicionaCorAlerta(campoConfirmacaoSenha, 'dado-invalido');
        }
    }

}

const confirmadorDeSenhaController = new ConfirmadorDeSenhaController();
$('#confirmacao-senha').on('input', () => {
    confirmadorDeSenhaController.gerenciaConfirmacaoDeSenha();
});
