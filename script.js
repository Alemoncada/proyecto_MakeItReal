const channels = [
    {
      messages : [],
      name: "# Canal 1"  
    },
    {
        messages : [],
        name: "# Canal 2"    
    },
    {
        messages : [],
        name: "# Canal 3"    
    }

];



let active = $('.active').text();

let channel = channels.find((channel)=> channel.name === active);


$('.textBox').on('submit', function(e) {
     e.preventDefault();

    let value = $('.input').val();

    if(value !== '') {
        let dt = new Date();
        let hours = dt.getHours();
        let minutes =  dt.getMinutes();
        let time = hours + ":" + minutes;
        
        const message = {
            time: time,
            content: value,
            author: {
                nickname:"Alexis",
                photo:"images/people.jpg",
            },
        };
        

        printMessage (message);
        channel.messages.push(message);
                        
        $('.input').val('');
        $('html, body').animate( {
        scrollTop: $(".input").offset().top
        }, 10);
    }
});

channel.messages.forEach (message => {
    printMessage(message)
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

$.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
    response.forEach((result) => {
        let dt = new Date();
        let hours = dt.getHours();
        let minutes =  dt.getMinutes();
        let time = hours + ":" + minutes;
        
        const message = {
            time: time,
            content: result.body,
            author: {
                nickname:result.name,
                photo:"http://lorempixel.com/50/50/sports/",
            },
        };
  
      channel.messages.push(message);
    });
    
    printMessages();
    $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
 
  }); 


//canales



$('.addChannel').on('submit', function(e) {
    e.preventDefault();
    const templateChannel = '<li class="channel"><a href="#">'+  $('.inputChannel').val() +'</a></li>';
    $('.channelList').append(templateChannel);
    
    
$('li').on('click', function(e) {
    $('li').removeClass('active');
    $(this).addClass('active');      
    channels.push( {
        messages : [],
        name: $('.inputChannel').val()    
    });
    $('.inputChannel').val('');
    $('.messagesContainer').empty();
    active = $('.active').text();
    channel = channels.find((channel)=> channel.name === active);
    channel.messages.forEach (message => {
      printMessage(message)
     }); 
     
})


});


$('li').on('click', function(e) {
  $('li').removeClass('active');
  $(this).addClass('active');
  $('.messagesContainer').empty();
  active = $('.active').text();
  channel = channels.find((channel)=> channel.name === active);
  channel.messages.forEach (message => {
    printMessage(message)
   }); 

   $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
});
















