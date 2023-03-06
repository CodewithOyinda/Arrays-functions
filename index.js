//Question 1
//Mutation in context of javaScript arrays is basically changing the array itself instead of returning a new array with the new changes while Non-mutation is returning a whole new array which has all the changes.
//Mutator Methods: array.copyWithin(), array.fill(), array.pop(), array.push(), array.reverse()
//Non-Mutating Methods: array.concat(), array.includes(), array.indexOf, array.join(), array.slice()


//Question 2
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

//Add 'Kotlin' to the end of the array
languages.splice(5, 0, 'Kotlin')
console.log(languages)

//Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java')
console.log(languages)

//Remove the first item in the array
languages.splice(0, 1)
console.log(languages)

//Add 'Scala' and 'Swift' to the beginning of the array
languages.splice(0, 0, 'Scala', 'Swift')
console.log(languages)

//Replace 'PHP' with 'Go' and 'Rust'
languages.splice(5, 1, 'Go', 'Rust')
console.log(languages)


//Question 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit){
    fruit[2] = "orange";
    return fruit;
}
console.log(changeFruit(fruit))


//Question 4
function max(arr) {
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}
const arr = [4, 5, 10, -2];
const maxValue = max (arr);
console.log(maxValue);


//Question 5
function valTimesIndex(num) {
    return num.map ((val, index) => val * index);
}
let array = [2, 4, 8];
let multipliedResult = valTimesIndex(array);

console.log(multipliedResult);

