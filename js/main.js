$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            },
        },
        messages: {
            nome: 'Campo ogrigatório.',
            email: 'Campo ogrigatório.',
            mensagem: 'Campo ogrigatório.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })

})