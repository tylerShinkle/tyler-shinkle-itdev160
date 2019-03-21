//header info...
var title = "The 3 Best Atom Packages for Front end Developers";
var author = "by: Tyler Shinkle";
var date = "3/21/2019";
var heroImage = document.createElement('img');
heroImage.src = "images/header.png";
var src = document.getElementById("heroImage");
src.appendChild(heroImage);

var titleEl = document.getElementById('title');
var authorEl = document.getElementById('author');
var dateEl = document.getElementById('date');

titleEl.textContent = title;
authorEl.textContent = author;
dateEl.textContent = date;
heroImage.appendChild(heroImage);

//Package info...
var packages = [gitPlus, beautify, pigments]
var gitPlus = new Package();
var beautify = new Package();
var pigments = new Package();

function Package(name, description, author, downloads, stars, image) {
  this.name = name;
  this.description = description;
  this.author = author;
  this.downloads = downloads;
  this.stars = stars;
  this.image = image;
}