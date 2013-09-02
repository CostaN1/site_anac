/**
 * Created with IntelliJ IDEA.
 * User: flyno_000
 * Date: 29.08.13
 * Time: 0:33
 * To change this template use File | Settings | File Templates.
 */


$("div.albums").children().mouseover(function() {
        $(this).stop(1).animate({width:'33.33334%'},300)

    }).mouseout(function() {
        $(this).stop(1).animate({width:'25%'},300);
    });

$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

function song(){
    var arg=window.location.search.substring(1);
    $('#myTab a[href="#'+arg+'"]').tab('show');
}