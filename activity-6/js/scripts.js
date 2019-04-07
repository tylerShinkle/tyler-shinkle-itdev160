//add eventListener to start button.
var start = document.getElementById('startButton');
start.addEventListener('click', init, false);

//message object constructor...
//add type to differentiate from reply and send...
function Message(to, from, subject, msg, type) {
  this.to = to;
  this.from = from;
  this.subject = subject;
  this.msg = msg;
  //s for send, r for reply and i for in...
  this.type = type;
}


//creating initial messages and loading them into message array.
msg1 = new Message("Tyler", "Bill", "Homework", "Hello, I was wondering if you knew what homework was assigned, I missed class. Also, we're going to test overflow. Blah Blah Blah Blah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah Blahv Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah", "i");
msg2 = new Message("Tyler", "Jill", "Recipe", "Hi, I was wondering if you could send me that brownie recipe? They were excellent. Thanks!", "i");
msg3 = new Message("Tyler", "Luisa", "Whaddup", "Hey, I was wondering if you wanted to hang after work. Let me know.", "i");
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
    var msgArea = document.createElement("p");
    msgArea.classList.add("msgArea");
    var msgText = document.createTextNode(messages[i].msg);
    msgArea.appendChild(msgText);
    msgBlock.appendChild(msgArea);
    //add reply button to each message.
    var replyContainer = document.createElement("div");
    replyContainer.classList.add("replyContainer");
    var replyButton = document.createElement("button");
    replyButton.classList.add("replyButton");
    //YES!!
    replyButton.value = i;
    //Yes!!
    var replyText = document.createTextNode(i + "Reply");
    replyButton.appendChild(replyText);
    replyContainer.appendChild(replyButton);
    //put button in div
    msgBlock.appendChild(replyContainer);
    // add eventListener here... this will call the addMessageHandler...
    replyButton.addEventListener('click', function() {
      addMessageHandler('r', this.value);
    }, false);
  }
}

//addMessageHandler...

function addMessageHandler(type, i) {
  //shorthand for buttons
  sendButton = document.getElementById('send-button');
  replyButton = document.getElementById('reply-button');
  messageInput = document.getElementById('message-input');
  msgWindow = document.getElementById('interActContainer');
  //load header text...
  to = document.getElementById('toForCreate');
  toText = document.createTextNode("To: " + messages[i].to);
  to.appendChild(toText);
  from = document.getElementById('fromForCreate');
  fromText = document.createTextNode("From: " + messages[i].from);
  from.appendChild(fromText);
  subject = document.getElementById('subjectForCreate');
  subjectText = document.createTextNode("Subject: " + messages[i].subject);
  subject.appendChild(subjectText);
  //assign functions to buttons...
  exitButton = document.getElementById('exit-button');
  exitButton.addEventListener('click', function() {
    msgWindow.style.display = "none";
    toText.nodeValue = "";
    fromText.nodeValue = "";
    subjectText.nodeValue = "";
  }, false);
  if (type = "r") {
    msgWindow.style.display = "block";
    sendButton.style.display = "none";

  }
}