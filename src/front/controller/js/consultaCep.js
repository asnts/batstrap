const campoCep = $('#cep');
const submitCep = $('#submit-cep');
const campoUf = $('#estado');
const campoCidade = $('#cidade');
const campoBairro = $('#bairro');
const campoRua = $('#rua');
let consultadorDeCep = new ConsultadorDeCep();

submitCep.on('click', (e) => {
    e.preventDefault();
    consultadorDeCep.consultaCep(campoCep.val());
    setTimeout(() => {
        preencheFormulário();
    }, 1000);
});

function preencheFormulário() {
    let endereco = consultadorDeCep.getEndereco();
    campoUf.val(endereco.uf);
    campoCidade.val(endereco.localidade);
    campoBairro.val(endereco.bairro);
    campoRua.val(endereco.logradouro);
    console.log(endereco);
}