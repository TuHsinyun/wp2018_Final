$(window).load(function(){
  $('html, body').animate({scrollTop:0},200);
  $(".loading").fadeOut(1000,function(){
    $("#project-wrapper").animate({width:'100vw',opacity :'1'},600,function(){
        setTimeout($('body').css({'overflow':'auto'}),1000);
    });
  });
});

$(document).ready(function(){
var arrow = $("#arrow-down img , ul li:eq(0)"),
    scroll_bottom = $("body").height()+$(window).height(),
    button_project = $("ul li:eq(1)"),
    $body = (window.opera) ? (document.compatMode =="CSS1Compat" ? $('html') : $('body')):$('html,body');

  arrow.click(function(){
    $body.stop().animate({
      scrollTop:scroll_bottom},850);
  });

  button_project.click(function(){
    $body.stop().animate({
      scrollTop:0},650);
  });

  mouse

});





