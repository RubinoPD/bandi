(function() {

$("#filter a").click(function(){
    $('#filt li').fadeIn('slow');
    if($(this).attr('rel')) {
        $('#filt li').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
    } else {
        $('#filt li').show();
    }
    return false;
});

}());