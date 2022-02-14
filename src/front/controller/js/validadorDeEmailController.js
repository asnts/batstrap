class ValidadorDeEmailController {

    constructor() {
        this.emailValido = false;
        this.validadorDeEmail = new ValidadorDeEmail();
    }
    gerenciaValidacaoDeEmail() {
        const validadorDeEmailView = new ValidadorDeEmailView;
        const campoEmail = $('#email');
        const email = campoEmail.val();
        if (this.validadorDeEmail.validaEmail(email)) {
            validadorDeEmailView.removeCorAlerta(campoEmail, 'dado-invalido');
            validadorDeEmailView.adicionaCorAlerta(campoEmail, 'dado-valido');
            this.emailValido = true;
        } else {
            validadorDeEmailView.removeCorAlerta(campoEmail, 'dado-valido');
            validadorDeEmailView.adicionaCorAlerta(campoEmail, 'dado-invalido');
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

$('#submit-cadastro').on('click', (evento) => {
    validadorDeEmailController.enviaDadosLogin();
});