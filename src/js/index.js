$(document).ready(function() {
    $('#generate').click(function() {
        var text = $('#text-input').val();
        $('#qrcode').empty();
        $('#qrcode').qrcode(text);
    });
});