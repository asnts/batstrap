class ValidadorDeEmailController {

    constructor() {
        this.emailValido = false;
    }
    gerenciaValidacaoDeEmail() {
        const validadorDeEmail = new ValidadorDeEmail();
        const validadorDeEmailView = new ValidadorDeEmailView;
        const campoEmail = $('#email');
        const email = campoEmail.val();
        if (validadorDeEmail.validaEmail(email)) {
            validadorDeEmailView.removeCorAlerta(campoEmail, 'alert-danger');
            validadorDeEmailView.adicionaCorAlerta(campoEmail, 'alert-success');
            this.emailValido = true;
        } else {
            validadorDeEmailView.removeCorAlerta(campoEmail, 'alert-success');
            validadorDeEmailView.adicionaCorAlerta(campoEmail, 'alert-danger');
            this.emailValido = false;     
        }
    }

    enviaDadosLogin() {
        if (this.emailValido && $('#senha').val().length != 0)
            alert('Login realizado com sucesso!');
        else
            alert('Email ou senha inválidos!');
    }
}

const validadorDeEmailController = new ValidadorDeEmailController();
$('#email').on('input', () => {
    validadorDeEmailController.gerenciaValidacaoDeEmail();
});
$('#submit').on('click', (evento) => {
    evento.preventDefault();
    validadorDeEmailController.enviaDadosLogin();
});