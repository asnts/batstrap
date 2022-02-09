class ConsultadorDeCepController {
    constructor() {
        this.consultadorDeCep;
        this.consultadorDeCepView = new ConsultadorDeCepView;
        this.cep;
    }
    gerenciaValidacaoDeCep() {
        this.consultadorDeCep = new ConsultadorDeCep();
        const campoCep = $('#cep');
        this.cep = campoCep.val();
        if (this.consultadorDeCep.validaCep(cep))
            this.gerenciaConsultaDeCep();
        else
            this.consultadorDeCepView.adicionaCorAlerta(campoCep, 'alert-danger');
    }
    gerenciaConsultaDeCep() {
        this.consultadorDeCep.consultaCep(this.cep);
    }
    gerenciaPreenchimentoForm() {
        let endereco = this.consultadorDeCep.getEndereco();
        console.log(endereco);
        this.consultadorDeCepView.preencheForm( $('#estado'), 
                                                $('#cidade'),
                                                $('#bairro'),
                                                $('#rua'),
                                                endereco);
    }
}

const consultadorDeCepController = new ConsultadorDeCepController();
$('#submit-cep').on('click', (e) => {
    e.preventDefault();
    consultadorDeCepController.gerenciaValidacaoDeCep();
    setTimeout(() => {consultadorDeCepController.gerenciaPreenchimentoForm();}, 1000);
});