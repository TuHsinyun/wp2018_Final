$(window).load(function(){
  $('html,body').animate({scrillTop:0},200);
  $(".loading").fadeOut(1000,function(){
    $("#project-wrapper").animate({width:'100vw',opacity :'1'},600,function(){
      setTimeout($('body').css({'overflow':'auto'}),1000);
      $("#members-wrapper").css("display","block");
    });
  });
});

$(document).ready(function(){
  var arrow = $("#arrow-down img , #nav-items li:eq(0)"),
  scroll_bottom = $("body").height()+$(window).height(),
  button_project = $("#nav-items li:eq(1)"),
  $body = (window.opera) ? (document.compatMode =="CSS1Compat" ? $('html') : $('body')):$('html,body');

  arrow.click(function(){
    $body.stop().animate({
      scrollTop:scroll_bottom},850);
  });

  button_project.click(function(){
    $body.stop().animate({
      scrollTop:0},650);
  });

  $('.pic').mousemove((e)=>{
    e.target.style.transform = 'scale(1.4)';
    var x = e.pageX - 310;
    var y = e.pageY - 180;
    var element = '#d'+ e.target.alt;
    $(element).css({'display':'block','opacity':'1'});
    // $(element).css({'display':'block'});
    // setTimeout(()=>{$(element).css({'opacity':'1'});},300);
    $(element).css({'left':x,'top':y});
  })
  $('.pic').mouseout((e)=>{
    $('.pic').css({'transform':'scale(1)'});
    var element = '#d'+ e.target.alt;
    $(element).css({'display':'none','opacity':'0'});
    // $(element).css({'opacity':'0'});
    // setTimeout(()=>{$(element).css({'display':'none'});},300);
  })

  $(".member").click(function(){
    var member = this.id;

    switch(member){
      case 'member1':

        break;
      case 'member1':
        break;
      case 'member2':
        break;
      case 'member3':
        break;
      case 'member4':
        break;
      case 'member5':
        break;
    }
  })
});




