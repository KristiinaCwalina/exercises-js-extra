/*
Given an array of cities create a function that returns the number of cities that start with 'A'

It may be useful know that:
- in strings you can use the function startsWith()
- we can iterate arrays
- we know the lenght of an array by using length


var name = "Jose";
console.log(name + " starts with E = " + name.startsWith('E'));
console.log(name + " starts with J = " + name.startsWith('J'));

const namesArray = ["Jose","Juan"];
console.log(namesArray[0]); //"Jose"
console.log(namesArray.length); //2
*/

function find(cities, letter){
	var counter = [];
	
	for (let i=0; i<cities.length; i++){
		if( cities[i].startsWith(letter)) counter.push(cities[i])
	}
	
	return counter.length;
}

const citiesArray = ["Amsterdam", "Athens", "Barcelona", "Madrid"];


console.log("Number of cities with A = " + find(citiesArray, 'A'));
console.log("Number of cities with B = " + find(citiesArray, 'B'));

/*function find(cities, letter){
	var counter = 0;
	
	for (let i=0; i<cities.length; i++){
		counter=counter + charCounter(cities[i], letter)
	}
	
	return counter;
}
function charCounter(str, letter){
	let counter = 0;
	for (let i=0;i<str.length;i++){
		if (str[i].toUpperCase() == letter.toUpperCase()){
			counter++;
		}
	}
	return counter;
}

const citiesArray = ["Amsterdam", "Athens", "Barcelona", "Madrid"];


console.log("Occurances of letter A = " + find(citiesArray, 'A'));
console.log("Occurances of letter B = " + find(citiesArray, 'B'));*/