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

//////////////////////////reduce function to find maximum in an array
console.log("finnding the maximum element in an Array");
let max=arra.reduce((res,el)=>{
    if(res<el){
       return el;
    }
    else{
        return res;
    }
})
console.log(max);


////////////////////////////Practice question 1 checking all numbers in an array are multiple of 10
console.log("Checking whether all the elements in an array are multiple of 10");
let multiple=[10,20,30,40,50,60];
let check=multiple.every((el)=>{
    return(el%10==0);
})
if(check){
    console.log("all the elements in an array are multiple of 10")
}
else{
    console.log("No! the elemnts in  the given array are not multiple of 10");
}


/////////////////PQ Finding the smalllest number in array
console.log("Smalllest number in an array");
let small=[2,3,4,5,9,1,7,0];
let smallest=small.reduce((res,el)=>
{
    if(res<el){
        return res;
    }
    else{
        return el;
    }
})
console.log(smallest);


let maxi=[1,2,3,4,5,6,7,8,9];
let str="apnacollege";
