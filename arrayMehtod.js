console.log("Array methods");

let arr=[1,2,3,4,5,6];

let print=function(el){
    console.log(el);
}

let print2=(el)=>{
    console.log(el);
}
arr.forEach(print);
arr.forEach(print2);

//////////////////////////////////Array of objects for each
let arrayOfObjects=[{
    name:"Aman",
    marks:100
},
{
    name:"rushi",
    marks:100
},
{
    name:"Jaggu",
    marks:100
}];

arrayOfObjects.forEach((er)=>{
    console.log(er.name+" "+er.marks);
}
)
///////////////////////////////////////////arr.map
console.log("Arr.Map");

let double=arr.map((el)=>{
    return el*2;
})

for(el of double){
    console.log(el);
}

///////////////////////////////////////////arr.filter
console.log("Arr.Filter");
let number=arr.filter((el)=>{
    return(el%2==0);
})

for(el of number){
    console.log(el);
}


//////////////////////////////////////arrr.Enery
console.log("Arr.Every");
let boo=double.every((el)=>{
    return (el%2==0);
})
console.log(boo);
let bool=arr.every((el)=>{
    return (el%2==0);
})
console.log(bool);


////////////////////////////////////arr.reduce
console.log("Arr.Reduce");
let arra=[1,2,3,4];

let red=arra.reduce((res,el)=>(res+el));
console.log(red);