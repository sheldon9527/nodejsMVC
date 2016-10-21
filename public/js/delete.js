$(document).ready(function() {
    $('a.delete').on('click', function() {
        var method = $(this).data('method');
        var url = $(this).data('url');
        $.ajax({
            url: url,
            type: method.toUpperCase(),
            data: {}
        });
    });
});
