const {readFile}=require('fs');

    console.log("the starting page first comment");
    readFile("./content/first.txt","utf-8",(err,result) =>{
        if(err){
        return err;
    }
    console.log(result);
    console.log("The result command");
    });
    console.log("The next line");

console.log("First")
setInterval(()=>{
    console.log("second");
},1000);
console.log("third");
