class RecuperadorDeSenhaController extends ValidadorDeEmailController {
    constructor() {
        super();
    }

    enviaDadosRecuperacao() {
        if (this.emailValido)
            alert('Email de recuperação enviado!');
        else
            alert('Email inválido, informe um email válido');
    }
}

const recuperadorDeSenhaController = new RecuperadorDeSenhaController();
$('#email').on('input', () => {
    recuperadorDeSenhaController.gerenciaValidacaoDeEmail();
});
$('#submit-recuperacao').on('click', (evento) => {
    evento.preventDefault();
    recuperadorDeSenhaController.enviaDadosRecuperacao();
});