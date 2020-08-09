const messages = [];


$('form').on('submit', function(e) {
     e.preventDefault();

    let value = $('input').val();

    if(value !== $('input').val('')) {
        let dt = new Date();
        let time = dt.getHours() + ":" + dt.getMinutes();
        const message = {
            time: time,
            content: value,
            author: {
                nickname:"Alexis",
                photo:"images/people.jpg",
            },
        };
        printMessage (message);
        messages.push(message);
        console.log(messages)
                
        $('input').val('');
        $('html, body').animate( {
        scrollTop: $("input").offset().top
        }, 10);
    }
});
 

function printMessage ({author, time, content}) {

const template = `<div class="message">
<img src="${author.photo}" class="profilephoto" alt="profilephoto">
<div class="messageInfo">
    <div class="interaction">
        <span class="nickname">${author.nickname}</span>
        <span class="time">${time}</span>
    </div>
    <p class="messageText">${content}</p>
</div>
</div>`;

$('.messagesContainer').append(template);

};

messages.forEach (message => {
    printmessage(message)
});

//canales

$('li').on('click', function(e) {
 $('li').removeClass('active');
 $(this).addClass('active');

})



















