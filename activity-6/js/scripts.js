//add eventListener to start button.
var start = document.getElementById('startButton');
start.addEventListener('click',init,false);

//message object constructor...
//add type to differentiate from reply and send...
function Message(to, from, subject, msg,type) {
  this.to = to;
  this.from = from;
  this.subject = subject;
  this.msg = msg;
  //s for send, r for reply and i for in...
  this.type=type;
}


//creating initial messages and loading them into message array.
msg1 = new Message("Tyler", "Bill", "Homework", "Hello, I was wondering if you knew what homework was assigned, I missed class.","i");
msg2 = new Message("Tyler", "Jill", "Recipe", "Hi, I was wondering if you could send me that brownie recipe? They were excellent. Thanks!","i");
msg3 = new Message("Tyler", "Luisa", "Whaddup", "Hey, I was wondering if you wanted to hang after work. Let me know.","i");
var messages = [msg1, msg2, msg3];


//When the start button is clicked this will trigger loading the initial messages.
function init() {
  //get rid of button and send header to top.
  start.style.display = "none";
  var headerContainer = document.getElementById('headerContainer');
  headerContainer.style.position = "relative";
  // add svg here...this is to compose a new message!!!!!!!!!!!!!!!!!
  //
  //
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
    var subjectEl = document.createElement("p");
    subjectEl.classList.add("msgHeader");
    var subjectText = document.createTextNode("Subject: " + messages[i].subject);
    subjectEl.appendChild(subjectText);
    msgBlock.appendChild(subjectEl);
    //line break before message.
    msgBlock.appendChild(document.createElement("br"));
    //add div for message and append msg text.
    var msgArea = document.createElement("div");
    msgArea.classList.add("msgArea");
    var msgText = document.createTextNode(messages[i].msg);
    msgArea.appendChild(msgText);
    msgBlock.appendChild(msgArea);
    //add reply button to each message.
    var replyContainer = document.createElement("div");
    replyContainer.classList.add("replyContainer");
    var replyButton = document.createElement("button");
    replyButton.classList.add("replyButton");
    var replyText = document.createTextNode("Reply");
    replyButton.appendChild(replyText);
    // add eventListener here... this will call the addMessageHandler...
    replyButton.addEventListener('click',addMessageHandler,false);
    replyContainer.appendChild(replyButton);
    //put button in div
    msgBlock.appendChild(replyContainer);


  }
}

//addMessageHandler...

function addMessageHandler(){
  msgWindow=document.getElementById('interActContainer');
  msgWindow.style.display="block";
}
