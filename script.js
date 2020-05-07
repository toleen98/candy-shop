
function myItems(pic, name, price){
	return {
		pic: pic,
		name: name,
		price:price

	}
}
var array=["https://i.pinimg.com/564x/89/79/9b/89799beb3abb0130c4eb206fbdb1b44e.jpg,candy,2$","https://i.pinimg.com/474x/66/32/a5/6632a53a1e6a33c727ed73cf1825deea.jpg,candy,4$","https://i.pinimg.com/474x/07/c7/d3/07c7d35dd6dd6b93f8b0ec6f084be04c.jpg,candy,6$","https://i.pinimg.com/564x/05/94/63/059463624cac68a50303ad8e3c7672c0.jpg,candy,12$","https://i.pinimg.com/474x/2f/ae/35/2fae357bbabd8dce657cf1dde77e9b59.jpg,candy,7$"]

function ourShopcandy(array){	
return array.map(function(item){
	var x=item.split(",")
    return myItems(x[0],x[1],x[2])    
})

}
//using jequery
$("#loadmore").click(function MakeItem(){
 ourShopcandy(array).forEach(function(item) {
 	var div=$("<div></div>")
 	div.addClass("item")
 	$("#shopItem").append(div)
 	var img=$("<img>")
 	img.addClass("itemImg")
 	img.attr("src",item.pic)
 	img.appendTo(div)
 	var name=$("<h4></h4>");
 	name.text(item.name);
 	name.appendTo(div)
 	var price=$("<h4></h4>");
 	price.text(item.price);
 	price.appendTo(div)
 	var btn=$("<button>Add To Cart</button>")
 	btn.addClass("bton")
 	btn.appendTo(div)

 })
 

})

$(".bton").click(function addTocart() {
   alert("item has been added")
})
