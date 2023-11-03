// file system model

const fs= require('fs');

// Writing to file

const contentToWrite="Hello Codemind Technology";
// fs.writeFileSync("./fileSystemModel/content.txt",contentToWrite);
fs.writeFile('example.txt',contentToWrite,(err)=>{
    if (err){
        console.error("Error writing to file" + err);

    }else{
        console.log("File written successfully");
    }
})

fs.readFile('module.txt','utf-8',(err2,data)=>{

    if(err2){
        console.error("Error Reading  file " +err2);
    }else{
        console.log("File read successfully: ", data);
    }
})


// file information

fs.stat("module.txt",(err3,stat)=>{
    if(err3){
        console.error("Error Reading  file " +err3);
    }else{
        console.log("File size: ", stat.size);
        console.log("Is This File ?: ", stat.isFile());
        console.log("Is the Directory: ", stat.isDirectory());
    }
})



// Delete the file

fs.unlink("example.txt", (err4)=>{
    if(err4){
        console.error("Error in deleting file " +err4);
    }else{
        console.log("File deleted successfully ");
    }

})



//appending file information

const contendToAppend ="Welcome to codemind technolgy"

fs.appendFile("module.txt",contendToAppend,(err5)=>{

    if (err5){
        console.error("Error in appending File", err5);

    }else{
        console.log("content appended successfully");
    }

})






//creating directory



fs.mkdir("ne_directory",(err6)=>{

    if (err6){
        console.error("Error in creating new directory", err6);

    }else{
        console.log("directory created successfully");
    }

})





// reading directory

// to see all the files in the directory replace "ne_directory" with . (dot) in below code


fs.readdir("ne_directory",(err7,files)=>{

    if (err7){
        console.error("Error in reading directory", err7);

    }else{
        console.log("reading directory successfully",files);
    }

})


// removing directory



fs.rmdir("ne_directory",(err8,files)=>{

    if (err8){
        console.error("Error in removing directory", err8);

    }else{
        console.log("removed directory successfully",files);
    }

})























