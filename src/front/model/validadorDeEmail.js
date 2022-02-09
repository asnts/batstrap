class ValidadorDeEmail {
    validaEmail(email) {
        const expressaoRegularEmail = /\S+@\S+\.\S+/;
        return expressaoRegularEmail.test(email);
    }
}