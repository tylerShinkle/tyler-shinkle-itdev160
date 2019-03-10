var user="You!";
var salutation="Hello, "
var greeting=salutation+" "+user;

var greetingElement=document.getElementById('greeting');
greetingElement.textContent=greeting;

//welcome completed.

//studentDiscount never changes.
const studentDiscount=.10;

var iPhonePrice=200;
var iPhoneStudentPrice=iPhonePrice-(iPhonePrice*studentDiscount);

var iPhonePriceElement=document.getElementById('iPhonePrice');
var iPhoneStudentPriceElement=document.getElementById('iPhoneStudentPrice');

iPhonePriceElement.textContent=" $"+iPhonePrice;
iPhoneStudentPriceElement.textContent=" $"+iPhoneStudentPrice;

//iphone done.

var carPrice=4000;
var carStudentPrice=carPrice-(carPrice*studentDiscount);

var carPriceElement=document.getElementById('carPrice');
var carStudentPriceElement=document.getElementById('carStudentPrice');

carPriceElement.textContent=" $"+carPrice;
carStudentPriceElement.textContent=" $"+carStudentPrice;

//car done
var bookPrice=30;
var bookStudentPrice=bookPrice-(bookPrice*studentDiscount);

var bookPriceElement=document.getElementById('bookPrice');
var bookStudentPriceElement=document.getElementById('bookStudentPrice');

bookPriceElement.textContent=" $"+bookPrice;
bookStudentPriceElement.textContent=" $"+bookStudentPrice;

//book done
