// Write your solution here!
let drivers  = ['Milo', 'Otis', 'Garfield']
// drivers.push('Ralph')
// console.log(drivers)



// defining function                 //arg passed in, can be vanilla generic variable
function destructivelyAppendDriver(array){
   return drivers.push('Ralph')
}

 function destructivelyPrependDriver(name){
     return drivers.unshift('Bob')
 }

 function destructivelyRemoveLastDriver(){
     return drivers.pop()

 }

 function destructivelyRemoveFirstDriver(){
     return drivers.shift()
 }

 function appendDriver(name){
    return [...drivers, name ]
 }

 function prependDriver(name){
    return [name, ...drivers]
 }

 function removeLastDriver(){
    return drivers.slice(0, drivers.length - 1)
 }

 function  removeFirstDriver(){
     return drivers.slice(1)
 }