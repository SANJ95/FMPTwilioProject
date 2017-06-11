// required modules first
var twilio = require('twilio');
var five = require("johnny-five");

// Twilio Credentials
var accountSid = 'AC28675a34916dfe41d4d764261b97bf17';
var authToken = 'edae20f25eef29231f74e4c213d127ac';
// create a Twilio REST client
var twilioClient = twilio(accountSid, authToken);

//twilioClient.messages
//  .create({
//    to: '+447946947871',
//    from: '+441449833013',
//    body: `Hello Sanj, I am the Matteo bot`,
//    provideFeedback: 'true',
//  })
//  .then((message) => {
//    console.log(message);
//  });


var onButton, offButton, led;
five.Board().on("ready", function() {
  onButton = new five.Button(2);
  led = new five.Led(13);

  onButton.on("up", function(value)
  {
    led.blink();
      // add the code that sends the SMS
      
      twilioClient.messages
      .create({  
        to: '+447738023804',
        from: '+441449833013',
        body: `Hello, this is Sanj, this is an emergency, I need your help, I feel like I am about to pass out, my current location is 6                Penrose Way, London SE10 0EW!`,
        provideFeedback: 'true',
      })
      .then((message) => {
        console.log(message);
      });
      
      



      
  });

});
