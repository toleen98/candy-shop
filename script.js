
function myItems(pic, name, price){
	return {
		pic: pic,
		name: name,
		price:price

	}
}
var array=["https://i.pinimg.com/564x/05/94/63/059463624cac68a50303ad8e3c7672c0.jpg,candy,4$","https://i.pinimg.com/564x/05/94/63/059463624cac68a50303ad8e3c7672c0.jpg,candy,4$","https://i.pinimg.com/564x/05/94/63/059463624cac68a50303ad8e3c7672c0.jpg,candy,4$","https://i.pinimg.com/564x/05/94/63/059463624cac68a50303ad8e3c7672c0.jpg,candy,4$","https://i.pinimg.com/564x/05/94/63/059463624cac68a50303ad8e3c7672c0.jpg,candy,4$"]

function addItem(array){
	var arr=[]
array.forEach(function(item){
	var x=item.split(",")
    var obj=myItems(x[0],x[1],x[2])
    arr.push(obj)
})
console.log(arr)
return arr
}
