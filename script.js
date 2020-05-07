
function myItems(pic, name, price){
	return {
		pic: pic,
		name: name,
		price:price

	}
}
var array=["https://i.pinimg.com/564x/05/94/63/059463624cac68a50303ad8e3c7672c0.jpg,candy,4$","https://i.pinimg.com/564x/05/94/63/059463624cac68a50303ad8e3c7672c0.jpg,candy,4$","https://i.pinimg.com/564x/05/94/63/059463624cac68a50303ad8e3c7672c0.jpg,candy,4$","https://i.pinimg.com/564x/05/94/63/059463624cac68a50303ad8e3c7672c0.jpg,candy,4$","https://i.pinimg.com/564x/05/94/63/059463624cac68a50303ad8e3c7672c0.jpg,candy,4$"]

function ourShopcandy(array){
	var arr=[]
array.forEach(function(item){
	var x=item.split(",")
    var obj=myItems(x[0],x[1],x[2])
    arr.push(obj)
})
console.log(arr)
return arr
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
 	btn.appendTo(div)

 })
 

})
