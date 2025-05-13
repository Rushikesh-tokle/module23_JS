let todo=[];
let req=prompt("Please enter your request");

while(true){
    if(req=="quit"){
        console.log("Quitting app");
        break;
    }

    if(req=="list"){
        console.log("__________________");
        for(let i=0;i<todo.length;i++){
            console.log(i," ", todo[i]);
        }
     console.log("__________________");

    }
    else if(req=="add"){
        console.log("__________________");
        var newTask=prompt("enter the task to be added");
        todo.push(newTask);
        console.log("task added");
    }
    else if(req=="delete"){
        for(let i=0;i<todo.length;i++){
            console.log(i," ", todo[i]);
        }
        var del=prompt("enter your choice that you wnat to delete ");
        del=parseInt(del);
        todo.splice(del,1);
        console.log("task deleted");
    }
    else{
        console.log("Wrong Request ");
    }
    req=prompt("Please enter your request");
}


