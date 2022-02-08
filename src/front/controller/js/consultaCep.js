
const campoCep = $('#cep');
const submitCep = $('#submit-cep');
let consultadorDeCep;

submitCep.on('click', (e) => {
    e.preventDefault();
    consultadorDeCep = new ConsultadorDeCep(campoCep.val());
    consultadorDeCep.consultaCep();
});
