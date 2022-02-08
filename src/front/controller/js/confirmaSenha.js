
const campoSenha = $('#senha');
const campoConfirmacaoSenha = $('#confirmacao-senha');
let senha, confirmacaoSenha;

const confirmadorDeSenha = new ConfirmadorDeSenha();
const alteradorDeCores = new AlteradorDeCores();

campoConfirmacaoSenha.on('input', () => {
    senha = campoSenha.val();
    confirmacaoSenha = campoConfirmacaoSenha.val();
    if (confirmadorDeSenha.confirmaSenha(senha, confirmacaoSenha)) {
        alteradorDeCores.adicionaCorAlerta(campoConfirmacaoSenha, 'alert-success');
        alteradorDeCores.removeCorAlerta(campoConfirmacaoSenha, 'alert-danger');
    } else {
        alteradorDeCores.adicionaCorAlerta(campoConfirmacaoSenha, 'alert-danger');
        alteradorDeCores.removeCorAlerta(campoConfirmacaoSenha, 'alert-success');
    }
});
