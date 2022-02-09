class ConfirmadorDeSenhaController {

    gerenciaConfirmacaoDeSenha() {
        const confirmadorDeSenha = new ConfirmadorDeSenha();
        const confirmadorDeSenhaView = new ConfirmadorDeSenhaView();
        const campoSenha = $('#senha');
        const campoConfirmacaoSenha = $('#confirmacao-senha');
        let senha = campoSenha.val();
        let confirmacaoSenha = campoConfirmacaoSenha.val();
        if (confirmadorDeSenha.confirmaSenha(senha, confirmacaoSenha)) {
            confirmadorDeSenhaView.adicionaCorAlerta(campoConfirmacaoSenha, 'alert-success');
            confirmadorDeSenhaView.removeCorAlerta(campoConfirmacaoSenha, 'alert-danger');
        } else {
            confirmadorDeSenhaView.adicionaCorAlerta(campoConfirmacaoSenha, 'alert-danger');
            confirmadorDeSenhaView.removeCorAlerta(campoConfirmacaoSenha, 'alert-success');
        }
    }

}

const confirmadorDeSenhaController = new ConfirmadorDeSenhaController();
$('#confirmacao-senha').on('input', () => {
    confirmadorDeSenhaController.gerenciaConfirmacaoDeSenha();
});
