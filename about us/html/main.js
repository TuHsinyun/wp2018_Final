$(window).load(function(){
  $('html,body').animate({scrillTop:0},200);
    $(".loading").fadeOut(1000,function(){
      $("#project-wrapper").animate({width:'100vw',opacity :'1'},600,function(){
        setTimeout($('body').css({'overflow':'auto'}),1000);
       /* $("#project-wrapper").css("position","relative");*/
        $("#members-wrapper").css("display","block");
        $("::-webkit-scrollbar").css("display","none");
    });
  });
});

$(document).ready(function(){
var arrow = $("#arrow-down img , ul li:eq(0)"),
    scroll_bottom = $("body").height()+$(window).height(),
    button_project = $("ul li:eq(1)"),
    $body = (window.opera) ? (document.compatMode =="CSS1Compat" ? $('html') : $('body')):$('html,body'),
    title1 = $("#Member1") ,
    content1 = title1.next(),
    title2 =  $("#Member2") ;

  arrow.click(function(){
    $body.stop().animate({
      scrollTop:scroll_bottom},850);
  });

  button_project.click(function(){
    $body.stop().animate({
      scrollTop:0},650);
  });
  $(".member").click(function(){
    var member = this.id;


    switch(member){
      case 'member1':
        title1.animate({
          left : '50px',opacity:'0'});
      break;
      case 'member2':
        title2.slideToggle();
      break;
      case 'member3':

      break;
      case 'member4':

      break;
      case 'member5':

      break;
    }
  });


});





