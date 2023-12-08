

console.log("I love NodeJS");
// Can be Asked in the interview.. whether browser's console.log and nodeJS console.log is same or different!!Answer is below:
// note console.log in VScode/CMD or nodeJS is different from browser because
// nodeJS runtime variable which means console.log is also separated from the Java to create NodeJS own module
// Written in NodeJs Documentation or checkout the image named nodeJSConsloe.png



// when ever statement is not returning anything then it will print the o/p with saying undefined:
// console.log("U love NodeJS")
// o/p:
// U love NodeJS
// undefined

// ******don't consider this undefined as an error, because it's not the error u can assume this as a notification********


let v=20;
let b="20";

console.log(a=b+v);
console.log(typeof(a));




var x=20; 

if (x===20){
    console.log("matched");
}
//  difference between === and == when we use === then it will check type and value both before executing the program further.
// but in the case of the == it only check value not the type of the value



let result="";

for (let index = 0; index < 10; index++) {
    result=result+index+",";
    
    
    
}
console.log(result);
console.log(result.length);
var result2= result.slice(0,19)

console.log(result2);


let arrays=[0,1,2,3,45,6,78,];

console.log(arrays);
console.log(arrays[5]);



// import from another file

const app=require('./app')
console.log(app.x);
console.log(app.y);
console.log(app.z());
console.log(app);


// interview question what is filter and why we use filter
// filter is used to extract the specific desired value from the array

result_filtered_arrray=arrays.filter((element)=>{
    return element>=3 ;
});

console.log(result_filtered_arrray);