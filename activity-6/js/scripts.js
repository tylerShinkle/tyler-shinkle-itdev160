//add eventListener to start button.
var start = document.getElementById('startButton');
start.onclick = init;

//message object constructor...
function Message(to, from, subject, msg) {
  this.to = to;
  this.from = from;
  this.subject = subject;
  this.msg = msg;
}


//creating initial messages and loading them into message array.
msg1 = new Message("tyler", "bill", "hi", "asdlkfjl;adfj; a;sdlfjk;a df al;kdfj;aldjf al;dfk ja;ldfj l;adfj l;asdjfl;adj fl;ad fj;lajsdfl;asdj fl;ad f");
msg2 = new Message("tyler", "jill", "hello", "asd;lfkja ;fjk a;dfklj;ald fjl;a fjl;ajsdf ;lajsdf l;jad fl;jasd fl;jkasdflkja dfljkasl;dfjka ;sdfkja l;sdf");
msg3 = new Message("tyler", "luisa", "Whaddup", "al;dfjk ;adklfj ;afkj ;adfj ;alkjdf ;ald f;asdlkfj ");
var messages = [msg1, msg2, msg3];


//When the start button is clicked this will trigger loading the initial messages.
function init() {
  //get rid of button and send header to top.
  start.style.display = "none";
  var headerTop = document.getElementById('headerTop');
  headerTop.style.margin = "1em";
  // get message container
  var el = document.getElementById('message-container');
  // for every message do ...
  for (var i = 0; i < messages.length; i++) {
    //create div to hold message and set class.
    var msgBlock = document.createElement('div');
    msgBlock.classList.add("msgBlock");
    //add div to container with line break.
    el.appendChild(msgBlock);
    el.appendChild(document.createElement("br"));
    //create a paragraph , set its class then add relevant text.
    // for to
    var toEl = document.createElement("p");
    toEl.classList.add("msgHeader");
    var toText = document.createTextNode("To: " + messages[i].to);
    toEl.appendChild(toText);
    msgBlock.appendChild(toEl);
    // for from
    var fromEl = document.createElement("p");
    fromEl.classList.add("msgHeader");
    var fromText = document.createTextNode("From: " + messages[i].from);
    fromEl.appendChild(fromText);
    msgBlock.appendChild(fromEl);
    //for subject
  }

}