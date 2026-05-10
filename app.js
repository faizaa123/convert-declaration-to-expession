
let add = function(a,b){
    return a +b 
}
 console.log(add(8,8));

let greet = function(name){
    return`hello ${name}` 
}
 console.log(greet("faiza"));
let square = function(x){
    return x * x;
}
 console.log(square(4));

  let addd = (a,b) => a + b;

  console.log(add(1,5));

  let subtract = (a , b) => a - b;

  console.log(subtract(93,9))

  let division = (a , b) => a / b;

  console.log(division(4,7))

  const joinWords = (a , b) => a + "" + b
  console.log(joinWords(4 , 5))

  const checkAge = (age) => age >= 18;
    console.log(checkAge(17))

    
const getRemainder = (a, b) => a % b;
 console.log(getRemainder(18,95))

 
const startsWithA = (text) => text.startsWith("A");
console.log(startsWithA('banana'))

const endsWithZ = (text) => text.endsWith("z");
 console.log(endsWithZ("buz"))


 let trimmer =  (text) => text.trim()
 console.log(trimmer("                  faiza                               "))

let double = num => num*2
console.log(double(2))


let upperCase = (text) => text.toUpperCase()
console.log(upperCase("faiza ali"))




let firstCharacter = (text) => text.charAt(0)
console.log( firstCharacter("faiza ali"))


let fruits = ["apple" , "banna", "cherry", "kiwi"]

let lastElement = (arr) => arr[arr.length -1]
    console.log(lastElement(fruits))