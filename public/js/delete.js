$(document).ready(function() {
    $('a.delete').on('click', function() {
        var _method = $(this).data('method');
        var _url = $(this).data('url');
        var _id = $(this).data('id');
        $.ajax({
            url: _url,
            type: _method.toUpperCase(),
            data: {
                id: _id,
            },
            success:function(){
                window.location.reload();
            }
        });
    });
});
