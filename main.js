$(document).ready(function() {
    $('#form-tarefa').on('submit', function(e){
        e.preventDefault();

        const tarefa = $('#input-tarefa').val();

        $('#form-lista').append('<li><span>' + tarefa + '</span><button class="delete-btn">Excluir</button></li>');

        $('#input-tarefa').val('');

    })

    $('#form-lista').on('click','li',function(e){
        if (!$(e.target).is('button')) {
            $(this).find('span').toggleClass('line-through');
        }
    })

    $('#form-lista').on('click','.delete-btn', function(e){
        e.stopPropagation();
        $(this).parent().remove();
    })

    $('#button-clear').on('click',function(){
        $('#form-lista').empty();
    });
})