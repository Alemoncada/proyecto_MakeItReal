$('form').on('submit', function(e) {
    e.preventDefault();
let dt = new Date();
let time = dt.getHours() + ":" + dt.getMinutes()
$('.messagesContainer').append('<div class="message">'+                                               
'<img src="images/people.jpg" class="profilephoto" alt="profilephoto">'+

'<div class="messageInfo">'+
    '<div class="interaction">'+                       
        '<h3 class="nickname">Pepito Perez</h3>'+
        '<span class="time">'+ time + '</span>'+
   '</div>' +                                    
    '<p class="messageText">'+$('input').val() +'</p>'+                                            
'</div>'+
'</div>');

$('input').val('');

$('html, body').animate({
    scrollTop: $("input").offset().top
    }, 1000);

});

$('li').on('click', function(e) {
    e.preventDefault();
$('li').removeClass('active');
$(this).addClass('active');

})


