$(window).load(function(){
  $(".loading").fadeOut(1000,function(){
    $("#enter").fadeIn(300);
  });
});

$(document).ready(function(){
var arrow = $("#arrow-down img"),
    scroll_bottom = $("body").height()+$(window).height(),
    button_team= $("ul li:eq(0)"),
    button_project = $("ul li:eq(1)"),
    $body = (window.opera) ? (document.compatMode =="CSS1Compat" ? $('html') : $('body')):$('html,body');

  arrow.click(function(){
    $body.stop().animate({
      scrollTop:scroll_bottom},850);
  });
  
  button_team.click(function(){
    $body.stop().animate({
      scrollTop:scroll_bottom},850);
  });

  button_project.click(function(){
    $body.stop().animate({
      scrollTop:0},650);
  });


});





