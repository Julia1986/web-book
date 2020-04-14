$('#carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:3
        },
        770:{
            items:4
        },
        992:{
            items:5
        }
    }
});

function on() {
    document.getElementByClassName("overlay").style.display = "block";
}

function off() {
    document.getElementByClassName("overlay").style.display = "none";
}

$('.overlay #footer').click(function(){
  $(".overlay").css("opacity;", "0;");
});

$('#row-bar').click(function(){
  $('.overlay').hide(300);
});