//header info...
var title = "The 3 Best Atom Packages for Front End Developers";
var author = "by: Tyler Shinkle";
var date = "3/21/2019";
//new info for me...
var heroImage = document.createElement('img');
heroImage.src = "images/header.png";

var heroImageEl = document.getElementById("heroImage");
var titleEl = document.getElementById('title');
var authorEl = document.getElementById('author');
var dateEl = document.getElementById('date');

//load onto doc
titleEl.textContent = title;
authorEl.textContent = author;
dateEl.textContent = date;
//useful...
heroImageEl.appendChild(heroImage);

//Package info...
function Package(name, url, description, author, downloads, stars, image) {
  this.name = name;
  this.url = url;
  this.description = description;
  this.author = author;
  this.stars = stars;
  this.image = image;
  // setting this property to a function requres you to access the function by typing this.downloads();
  this.downloads = function() {
    return downloads.toLocaleString();
  };
}

var gitPlus = new Package("Git-Plus", "https://atom.io/packages/git-plus", "Git-Plus allows you to seamlessly add, commit and push without the use of a terminal.", "akonwi", 2411693, 2568, "images/git.png");
var beautify = new Package("atom-beautify", "https://atom.io/packages/atom-beautify", "The atom-beautify package allows you to clean up your code simply by saving it.", "Glavin001", 6004609, 5046, "images/beautify.png");
var pigments = new Package("Pigments", "https://atom.io/packages/pigments", "Pigments allows you to easily see how your hex codes will look.", "abe33", 2537742, 3601, "images/pigments.png");
var packages = [gitPlus, beautify, pigments];


for (var i = 0; i < packages.length; i++) {
  var j = (i + 1);
  var nameEl = document.getElementById('packageName' + j);
  var newA = document.createElement('a');
  newA.textContent = j + ". " + packages[i].name;
  newA.href = packages[i].url;
  newA.target = "_blank";
  nameEl.appendChild(newA);

  var descriptionEl = document.getElementById('packageDescription' + j);
  descriptionEl.textContent = packages[i].description;

  var authorEl2 = document.getElementById('packageAuthor' + j);
  authorEl2.textContent = "Author: " + packages[i].author + " ";

  var downloadsEl = document.getElementById('packageDownloads' + j);
  downloadsEl.textContent = "Downloads: " + packages[i].downloads() + " ";

  var starsEl = document.getElementById('packageStars' + j);
  starsEl.textContent = "Stars: " + packages[i].stars + " ";

  //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

  var imageEl = document.getElementById('packageImage' + j);
  var imageItself = document.createElement('img');
  imageItself.src = packages[i].image;
  imageEl.appendChild(imageItself);


  var captionEl = document.createElement('p');
  var textNode = document.createTextNode('This is a screenshot of ' + packages[i].name + " in action.");
  captionEl.appendChild(textNode);
  var position = document.getElementById('caption' + j);
  position.appendChild(captionEl);
};