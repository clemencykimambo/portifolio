$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");

        }else{

            $('.navbar').removeClass("sticky");

        }
    });
    //Toggle menu/navbar

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')

    });


    //typing animation script

    var typed = new Typed(".typing",{
         strings: [ "graphics designer","Web developer","Blogger","Designer","freelancer"],
         typeSpeed: 100,
         bacSpeed: 60,
         loop: true
    });


    var typed = new Typed(".typing-2",{
        strings: [ "graphics designer","Web developer","Blogger","Designer","freelancer"],
        typeSpeed: 100,
        bacSpeed: 60,
        loop: true
   });
})