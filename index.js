/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/


/* let FirstFiveNumbers = [1,2,3,4,5] */

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/ 

/* let person = {
  name: "Tomas",
  surname: "Berhane",
  emailAddress:"Tomasberhane14@gmail.com",
  age: 25
}
 */

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

/* person.hasDrivingLicense = True */

/* EXERCISE 4
Remove from the previously created object the age property.
*/


/* delete person.age */

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* let person2 ={
  name: 'Toni',
  surname:'Coman',
  emailAddress:'tonicoman@gmail.com'
}

let check = person.emailAddress===person2.emailAddress?true:false
console.log(check) */

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/


/* let shipping = 10
function charge(totalShoppingCart){
if (totalShoppingCart > 50){
  return totalShoppingCart
}else{
  return shipping + totalShoppingCart
}
} */

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/


/* let shipping = 10
function charge(totalShoppingCart){
  if (totalShoppingCart > 50){
    return totalShoppingCart - totalShoppingCart*20/100
  }else{
    return shipping + totalShoppingCart - totalShoppingCart*20/100
  }
  }
  
  console.log(charge(60)) */

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/


/* let car = {
  brand:"Toyota",
  color: "red",
  licensePlate: 12345
}
let car1 = {}
Object.assign(car1,car)
car1.licensePlate = 132466

let car2 = {}
Object.assign(car2,car)
car1.licensePlate = 193939

let car3 = {}
Object.assign(car3,car)
car1.licensePlate = 444822

let car4 = {}
Object.assign(car4,car)
car1.licensePlate = 144839

let car5 = {}
Object.assign(car5,car)
car1.licensePlate = 654321 */

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* let carsForRent = ["car","car1","car2","car3","car4","car5"] */

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/


/* console.log(carsForRent.pop())
console.log(carsForRent.shift())
*/

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/


/* console.log(typeof(car.brand)) //string
console.log(typeof(car.color))//string
console.log(typeof(car.licensePlate))//number */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/


/* let carsForSale = []
console.log(carsForSale.push("car1","car2","car3"))
let totalCars = carsForSale + carsForRent*/

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/


console.log(carsForSale) // I really don't understand what should i do here

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/