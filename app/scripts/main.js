var allItems = whisky.results;
var wTitle;
var wPrice;
var wShopName;
var wImage;


allItems.forEach (function(item){

  wTitle = "<li>" + item.title + "</li>";

  wPrice = "<li>" + item.currency_code + " " + item.price + "</li>";

  wShopName = "<li>" + item.Shop.shop_name + "</li>";

  wImage = "<ul class = "image"><img src='" + item.Images[0].url_170x135 + "' /></ul>";


$("#eitems").append(wImage + wTitle + wPrice + wShopName);

});
