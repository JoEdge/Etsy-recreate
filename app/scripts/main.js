var allItems = whisky.results;
var wTitle;
var wPrice;
var wShopName;
var wImage;



allItems.forEach (function(item){

   wTitle = "<li>" + item.title + "</li>";

  wPrice = "<li>" + item.price + "</li>";

  wShopName = "<li>" + item.Shop.shop_name + "</li>";

  wImage = "<li><img src='" + item.Images[0].url_75x75 + "' /></li>";


$("#eitems").append(wTitle + wPrice + wShopName + wImage);

});
