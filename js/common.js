// JavaScript source code
$(function () {
    $('body').click(function () {
        if (!$('#menu').children().has(event.target).length && !(event.target.id == 'menu'))
            $('#menu').removeClass('active');
    })

    $('#menu-toggle a').click(function () {
        $('#menu').toggleClass('active');
        return false;
    });
});