class RecuperadorDeSenhaController extends ValidadorDeEmailController {
    constructor() {
        super();
    }

    enviaDadosRecuperacao() {
        if (this.emailValido)
            alert('valido');
        else
            alert('inválido');
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