//header info...
var title = "The 3 Best Atom Packages for Front end Developers";
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
  this.downloads = downloads;
  this.stars = stars;
  this.image = image;
};

var gitPlus = new Package("Git-Plus", "https://atom.io/packages/git-plus", "Git-Plus allows you to seamlessly add, commit and push without the use of a terminal.", "akonwi", "2,411,693", 2568, "images/git.png");
var beautify = new Package("atom-beautify", "https://atom.io/packages/atom-beautify", "The atom-beautify package allows you to clean up your code simply by saving it.", "Glavin001", "6,004,609", 5046, "images/beautify.png");
var pigments = new Package("Pigments", "https://atom.io/packages/pigments", "Pigments allows you to easily see how your hex codes will look.", "abe33", "2,537,742", 3601, "images/pigments.png");
var packages = [gitPlus, beautify, pigments];

var i;

for (i = 0; i < packages.length; i++) {
  var nameEl = document.getElementById('packageName' + (i + 1));
  var newA = document.createElement('a');
  newA.textContent = (i + 1) + ". " + packages[i].name;
  newA.href = packages[i].url;
  newA.target = "_blank";
  nameEl.appendChild(newA);

  var descriptionEl = document.getElementById('packageDescription' + (i + 1));
  descriptionEl.textContent = packages[i].description;

  var authorEl2 = document.getElementById('packageAuthor' + (i + 1));
  authorEl2.textContent = "Author: " + packages[i].author + " ";

  var downloadsEl = document.getElementById('packageDownloads' + (i + 1));
  downloadsEl.textContent = "Downloads: " + packages[i].downloads + " ";

  var starsEl = document.getElementById('packageStars' + (i + 1));
  starsEl.textContent = "Stars: " + packages[i].stars + " ";

  //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

  var imageEl = document.getElementById('packageImage' + (i + 1));
  var imageItself = document.createElement('img');
  imageItself.src = packages[i].image;
  imageEl.appendChild(imageItself);

};