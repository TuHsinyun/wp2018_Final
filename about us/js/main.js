$(window).load(function(){
  $('html,body').animate({scrillTop:0},200);
    $(".loading").fadeOut(1000,function(){
      $("#project-wrapper").animate({width:'100vw',opacity :'1'},600,function(){
        setTimeout($('body').css({'overflow':'auto'}),1000);
        $("#members-wrapper").css("display","block");
        $("::-webkit-scrollbar").css("display","none");
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

  $('.pic').mouseover((e)=>{
    $('.pic').css({'transform':'scale(1)'});
    e.target.style.transform = 'scale(1.3)';
    // console.log(e.target.style());
  })
  $('.pic').mouseout(()=>{
    $('.pic').css({'transform':'scale(1)'});
  })


});





