var array = [2,5,7,2,6,8];
var pares = array.filter(function(n){
	return n%2 == 0;
})
var impares = array.filter(function(n){
	return n%2 != 0;
})
console.log("numeros pares: "+pares);
console.log("numeros impares: "+impares);