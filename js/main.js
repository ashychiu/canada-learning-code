$('.home').click(function(){
 $('nav').css('background-image','url("images/background0.jpg")');
 $('footer').css('background-color','#38b6ab');
 $(".main-nav").removeClass('open-nav');
});
 $('.about').click(function(){
 $('nav').css('background-image','url("images/background2.jpg")');
 $('footer').css('background-color','#7e85b3');
 $(".main-nav").removeClass('open-nav');
});
$('.collections').click(function(){
 $('nav').css('background-image','url("images/background3.jpg")');
 $('footer').css('background-color','#9f687f');
 $(".main-nav").removeClass('open-nav');
 });
$('.location').click(function(){
 $('nav').css('background-image','url("images/background4.jpg")');
 $('footer').css('background-color','#b93d3d');
 $(".main-nav").removeClass('open-nav');
});
$('.contact').click(function(){
 $('nav').css('background-image','url("images/background5.jpg")');
 $('footer').css('background-color','#bf7912');
 $(".main-nav").removeClass('open-nav');
});
$(".hamburger").click(function(e){
  e.preventDefault();
  $(".main-nav").addClass('open-nav');
});
$(".close").click(function(e){
  e.preventDefault();
  $(".main-nav").removeClass('open-nav');
});
$("nav a").click(function(){
  $("nav a").removeClass("active");
  $(this).addClass('active');
});
$("#contact-form input[type=submit]").click(function(e) {
    e.preventDefault();
    $("#contact-form").submit();
    alert("Thank you for your message. We will get back to you as soon as possible.");
    $("#contact-form").trigger("reset");
 });
