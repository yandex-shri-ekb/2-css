$('td').hover(function() {
    var t = parseInt($(this).index()) + 1;
    $('td:nth-child(' + t + ')').addClass('highlighted');
},
function() {
    var t = parseInt($(this).index()) + 1;
    $('td:nth-child(' + t + ')').removeClass('highlighted');
});
