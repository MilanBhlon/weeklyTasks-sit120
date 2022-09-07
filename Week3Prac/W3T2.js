let continent = ["Asia", "Africa", "Australia"];
console.log(continent);

continent.pop(); // removes the last element from an array
console.log(continent);

continent.push("Antartica")// adds new element to an array at the end
console.log(continent);

let number =[10, 6, 3, 5, 4, 8, 2];
console.log(number);
console.log(number.slice(2,5)); //cut out part of an array

const firstElement = number.shift(); // removes the first element from an array and returns that removed elemen
console.log(firstElement);

const found = number.find(element => element > 2); //returns first element that satisfies the provided testing function.
console.log(found);









