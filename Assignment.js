//For Date types//
//    question 1
 const myGame = "subway" //String
let numberOfPlays= 5 //Number
let gameOver= true //boolean
let myPlayer; //undefine
let coins= null //null

// question 2
function checkType(num) {
return typeof(num)
}
console.log(checkType(num))
 

//question 3
const convertTypes____ = (val) => {
    if (typeof val === "string") {
        return Number(val)
    } else if ((typeof val === "number") || (typeof val === "boolean")) {
        return val.toString()
    } else {
        return "invalid input"
    }
}
   console.log(convertType(val))

//QUESTION 4
    function isFasly(num){
        if(num==="" ||num===null ||num===0 ||num===undefined ||num===NaN)
        console.log(num,"is fasly")
        else
        console.log(num,"is not fasly")
    }
    console.log(isFasly(num))




//QUESTION 5
function sumMixedArrary(array){
    for (let i = 0; i < arr.length; i++) {
        //check if its a number
        if (typeof arr[i] === "number") {
            //add to sum
            sum += arr[i]
        } else {
            //convert it to a number
            const convertToNumber = Number(arr[i])
            if (convertToNumber) {
                sum += convertToNumber
            }
        }
 }
}



//Question 6
    function deepcomparision(x,y){
     
            if (x === y) {
                return true
            }
            return false
        }
    console.log(deepcomparision(x,y))




    //FOR EQUALITY COMPARISONS

    //QUESTION 1
function isEqual(a,b){
 if(a==b)
console.log("Equal")
 else
 console.log("Not Equal")
}
//QUESTION 2
function isStrictlyEqual(a,b){
    if(a===b)
   console.log("Equal")
    else
    console.log("Not Equal")
   }

//QUESTION 3
   function compareValues(){
    console.log(null==undefined)
    console.log(null==false)
    console.log("true"==true)
    console.log(null==0)
    console.log("11"==11)
    console.log(0==false) 
}
console.log(compareValues())


//QUESTION 5
function areObjectEqual(){
 
} 
    console.log(areObjectEqual())

//QUESTION 6
function areArraryEqual(){
   
}
//FOR LOOPS AND CONDITIONS//
//QUESTION 1
function  checkEvenOdd(){
    return "Even"
     if (num % 2===0); else "Odd"
    }
console.log(checkEvenOdd())

//QUESTION 2
function printNumbers(){
    for(let i=1; i<=10; i++){
      console.log(i)
    }
}
console.log(printNumbers())


//QUESTION 3
function sumUtill100(){
    let i=1
    let sum=0
    while(sum<=100)
        i++
    sum+=i
    console.log(sum)
}
console.log(sumUtill100())

//QUESTION 4
function printMultiplicationTable(){
    for(let i=1; i<=5; i++){
        for(let k=1; k<=12; k++){
    let multi=i*k
     multiple=i+"x"+k+"="+multi 
     console.log(multiple)
    }
}
}
console.log(printMultiplicationTable())

//QUESTION 5
function dayOfWeek(num){
    switch(num){
        case 1:
            return("Monday")
            break;
        case 2:
          return("Tuesday")
        case 3:
            return("Wednesday")
        case 4:
            return "Thursday"
        case 5:
            return("Friday")
        case 6:
            return("Saturday")
        case 7:    
            return("Sunday")
            default:     
    }
}
 for(let i=1; i<=7; i++){
    console.log(`${i}=${dayOfWeek(i)}`)
 }


//QUESTION 6
function filterAndSumEven(Array){
   let  sum=0
 let  oddArray=[]
   for(let i=0; i<Array.length; i++){
   if (Array[i]%2===0){
       sum+=Array[i]
  console.log(sum)
   }
   else
     oddArray.push(Array[i])
   }
   return oddArray
}
console.log(filterAndSumEven())
//QUESTION 7
function fizzBuzzz(){
    for(let j=1; j<=50; j++){
      if(j%3===0 && j%5===0)
        console.log("FizzBuzz")
        else if(j%3===0)
        console.log("Fizz")
        else if(j%5===0)
        console.log("Buzz")
        else
        console.log(j)
    }
}
console.log(fizzBuzzz())
//FUNCTIONS
//QUESTION 1