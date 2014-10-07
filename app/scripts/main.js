var everyThing = $('.box');

var allItems = whisky.results;
var wTitle;
var wPrice;
var wShopName;
var wImage;


allItems.forEach (function(item){

  wTitle = "<p class = 'title'>" + item.title + "</p>";

  wPrice = "<p>" + item.currency_code + " " + item.price + "</p>";

  wShopName = "<p>" + item.Shop.shop_name + "</p>";

  wImage = "<img src='" + item.Images[0].url_170x135 + "'/>";


var whiskyAll = "<li>" + wImage + wTitle + wPrice + wShopName + "</li>";


everyThing.append(whiskyAll);

});
