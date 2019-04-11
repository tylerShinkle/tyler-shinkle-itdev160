//add eventListener to start button.
var start = document.getElementById('startButton');
start.addEventListener('click', init, false);

//add eventListenerto compose button...
var compose = document.getElementById('composeButton');
compose.addEventListener('click', function() {
  addMessageHandler("o", null);
}, false);

//message object constructor...
function Message(to, from, subject, msg, type) {
  this.to = to;
  this.from = from;
  this.subject = subject;
  this.msg = msg;
  this.type = type;
}

//creating initial messages and loading them into message array.
msg1 = new Message("Tyler", "Bill", "Homework", "Hello, I was wondering if you knew what homework was assigned, I missed class. Also, we're going to test overflow. Blah Blah Blah Blah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah BlahBlah Blah Blahv Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah BlahBlah Blah BlahBlah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah", "i");
msg2 = new Message("Tyler", "Jill", "Recipe", "Hi, I was wondering if you could send me that brownie recipe? They were excellent. Thanks!", "i");
msg3 = new Message("Tyler", "Luisa", "Whaddup", "Hey, I was wondering if you wanted to hang after work. Let me know.", "i");

//message Array
var messages = [msg1, msg2, msg3];
//When the start button is clicked this will trigger loading the initial messages.
function init() {
  //get rid of button and send header to top.
  start.style.display = "none";
  var headerContainer = document.getElementById('headerContainer');
  headerContainer.style.position = "relative";
  var boxes = document.getElementById('boxes');
  boxes.style.display = "inline-block";
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
    var replyText = document.createTextNode("Reply");
    replyButton.appendChild(replyText);
    replyContainer.appendChild(replyButton);
    //put button in div
    msgBlock.appendChild(replyContainer);
    // add eventListener here... this will call the addMessageHandler...
    replyButton.addEventListener('click', function() {
      addMessageHandler('r', this.value);
    }, false);
    //add class based on type...
    if (messages[i].type != "i") {
      msgBlock.classList.add("out-message");
    } else {
      msgBlock.classList.add("in-message");
    }
  }
}


function createMessageBlock(type) {
  //construct new message object.
  var to = document.getElementById("toForCreate").value;
  var from = "example@gmail.com";
  var subject = document.getElementById("subjectForCreate").value;
  var msg = document.getElementById('message-input').value;
  var type = type;
  var message = new Message(to, from, subject, msg, type);
  //check if message is empty or not...
  if (message.msg != '') {
    //add message to array.
    messages.push(message);
    //clear overlay elements
    document.getElementById('toForCreate').value = "";
    document.getElementById('subjectForCreate').value = "";
    document.getElementById('message-input').value = "";
    //clear message-container
    var el = document.getElementById('message-container');
    el.innerHTML = "";
    // reload arrays...
    init();
    //close overlay
    msgWindow.style.display = "none";
  } else {
    alert("Messages cannot be empty");
  };
}

//addMessageHandler...
//this will open up a window to compose a composition, reploy, etc...
//the windows will be created differently for replies opposed to compositions.

function addMessageHandler(type, i) {
  //shorthand for buttons
  sendButton = document.getElementById('send-button');
  replyButton = document.getElementById('reply-button');
  exitButton = document.getElementById('exit-button');
  //shorthand for textArea...
  messageInput = document.getElementById('message-input');
  msgWindow = document.getElementById('interActContainer');
  to = document.getElementById('toForCreate');
  subject = document.getElementById('subjectForCreate');
  //assign functions to buttons...
  //Exit
  //close window and reset header overlay elements...
  exitButton.addEventListener('click', function() {
    msgWindow.style.display = "none";
    to.setAttribute("value", "");
    subject.setAttribute("value", "");
    document.getElementById('message-input').value = "";
  }, false);
  //sendButton
  sendButton.addEventListener("click", createMessageBlock, false);
  //replyButton
  replyButton.addEventListener("click", createMessageBlock, false);
  switch (type) {
    case 'r':
      msgWindow.style.display = "block";
      sendButton.style.display = "none";
      replyButton.style.display = "block";
      //load header text...
      to.setAttribute("value", messages[i].from);
      subject.setAttribute("value", messages[i].subject);
      break;
    case 'o':
      msgWindow.style.display = "block";
      replyButton.style.display = "none";
      sendButton.style.display = "block";
      break;
    default:
      alert("something went wrong!");
      break;
  }
}