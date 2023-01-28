
let responses = [
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

let stage = document.querySelector(".stage");
let eight = document.querySelector(".eight");
let span = document.querySelectorAll("span");
let h1 = document.querySelector("h1");
let ball = document.querySelector(".ball");

let countArray = []

function promptMe() {
  let question = prompt(`Please ask a yes or no question`);
  }

document.querySelector("button").addEventListener("click", promptMe);
// ball shake event

console.log(`after the promptme`);
// checks to see if there are more than 2 spans elements inside 
// <figure class = 'ball'> the HTML and removes them
if(countArray.includes("remove")){
   document.querySelector(".triangle").remove();
   document.querySelector(".message").remove();
   countArray = [];
}
console.log (`after the triangle is reset`);
// triggers shake css animation
stage.style.animation = "shake 1s ease-out";
eight.innerHTML = "";
eight.classList.add("message-circle");
document.querySelector(".message-circle").style.animation = "opacity .4s";
console.log('after the shake');
// loop which pushes span classes in countArray. Once two classes are added it 
// triggers creation of two span tags with one with triangle class and the other with a message class
for (let i = 0; i < span.length; i++) {
    countArray.push(span[i].getAttribute("class"));

    if(countArray.length == 2){

      let createTriangle = document.createElement("span");
      createTriangle.classList.add("triangle");
      ball.appendChild(createTriangle);

      let createMessage = document.createElement("span");
      createMessage.classList.add("message");
      createMessage.innerHTML = responses[randomMessage];
      ball.appendChild(createMessage);

      countArray.push("remove");
    }
}

// removes classes created from css shake animation after 1 second
setTimeout(function(){
  stage.style.animation = "";
  },1000);
});

