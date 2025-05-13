console.log("Hello Everyone");
console.log("For loop");
for(let a=1;a<=10;a++){
    console.log(a);
}

//odd numbers
console.log("odd numbers");
for(let i=0;i<=15;i++){
    if(i%2==1){
        console.log(i);
    }
}

for(let i=10;i>=0;i--){
    if(i%2===0){
        console.log(i);
    }
}

for(let i=5;i<=50;i=i+5){
    console.log(i);
}

// //let val=prompt("Enter the number");
// val=parseInt(val);
// for(let i=val;i<=val*10;i=i+val){
//     console.log(i);
// }

//nested loop
for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}


//while loop
console.log("While loop");

let i=4;
while(i>=0){
    console.log(i);
    i--;
}

//favMovie

// const favMovie="avatar";
// let guess=prompt("guess my favourite movie");

// while((guess!=favMovie)&&(guess!="quit")){
//     guess=prompt("You guessed it wrong try again");
// }
// if(guess==favMovie){
//     console.log("you guessed it correct");
// }
// else{
//     console.log("better luck next time");
// }

//For of loop for of loop
console.log("printing the elements using for of")

let fruits=["alex",12,23,"rushi","will"];

for(fruit of fruits){
    console.log(fruit);
}


console.log("printing the char using for of")
for(char of "apnacollege"){
    console.log(char);
}

//for of on nested array
let mumbai=[["will","ryan","corbin","boulty"],["rohit","surya","jassybhai","tilak"]];

for(type of mumbai){
    for(player of type){
        console.log(player);
    }
}

console.log("prnting the characters of each element");
let ogs=["malinga","johnson","simmons","polly","mitch"];
for(og of ogs){
    console.log("next player");
    for(char of og){
        console.log(char);
    }
   
}

// assign 1 delete all occurences of a particular element form an array
let num=2;
let arr=[1,2,3,4,5,6,2,3];
console.log( "Question no 1 removing all occurences of a element");

for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
for(ele of arr){
    console.log(ele);
}

// 2 number of digits
let number=287152;
 let count=0;
console.log( "Question no 2 no of digits in number");
let copy=number;
while(copy>0){
    count++;
    copy=Math.floor(copy/10);
}
console.log(count);



//3 sum of digits in number
let sum=0;
let copy2=number;
console.log( "Question no 3 sum of digits in number");

while(copy2>0){
    sum=sum+(copy2%10);
    copy2=Math.floor(copy2/10);
}
console.log(sum);


//4 factorial of a number
let fact_num=5;
let fact=1;
console.log( "Question no 4 factorial of a number");

while(fact_num>0){
  fact*=fact_num;
  fact_num--;
}
console.log(fact);

//5 largest number in an array
console.log( "Question no 5 largest in an array");
let max_ele=arr[0];
for(let i=1;i<arr.length;i++){
   max_ele= Math.max(max_ele,arr[i]);
}
console.log(max_ele);