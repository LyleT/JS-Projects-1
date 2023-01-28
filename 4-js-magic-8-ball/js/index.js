
var responses = [
  "It is certain", 
  "It is decidedly so", 
  "Without a doubt", 
  "Yes - definitely",
  "You may rely on it", 
  "As I see it, yes", 
  "Most likely", 
  "Outlook good", 
  "Yes", 
  "Signs point to yes",
  "Don't count on it", 
  "My reply is no",
  "My sources say no", 
  "Outlook not so good",
  "Very doubtful", 
  "Reply hazy, try again", 
  "Ask again later", 
  "Better not tell you now",
  "Cannot predict now", 
  "Concentrate and ask again"
  ];
var stage = document.querySelector(".stage");
var eight = document.querySelector(".eight");
var span = document.querySelectorAll("span");
var h1 = document.querySelector("h1");
var ball = document.querySelector(".ball");
var button = document.querySelector("button");
var countArray = [];


button.addEventListener("click",function(){
  var question = prompt(`Please ask a yes or no question`);
  var randomMessage = Math.round(Math.random()*20);

  if(countArray.includes("remove")){
    document.querySelector(".triangle").remove();
    document.querySelector(".message").remove();
    countArray = [];
  }

  stage.style.animation = "shake 0.75s ease-out";
  eight.innerHTML = "";
  eight.classList.add("message-circle");
  document.querySelector(".message-circle").style.animation = "opacity .4s";

  for (var i = 0; i < span.length; i++) {
    countArray.push(span[i].getAttribute("class"));

    if(countArray.length == 2){

      var createTriangle = document.createElement("span");
      createTriangle.classList.add("triangle");
      ball.appendChild(createTriangle);

      var createMessage = document.createElement("span");
      createMessage.classList.add("message");
      createMessage.innerHTML = responses[randomMessage];
      ball.appendChild(createMessage);

      countArray.push("remove");
    } 
    }

//reset classes
setTimeout(function(){
  stage.style.animation = "";
  },1000);
});

