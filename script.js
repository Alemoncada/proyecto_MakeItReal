$('form').on('submit', function(e) {
    e.preventDefault();
let dt = new Date();
let time = dt.getHours() + ":" + dt.getMinutes()
$('.chatSpace').append('<div class="message">'+                                               
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

})

