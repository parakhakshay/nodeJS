// path model provides utilities for working with file and directory path
// joining the path

const path= require("path");

const path1 = "myDir";
const path2 ="file.txt";

const fullPath= path.join(__dirname,path1,path2);

console.log("Joined Path" + fullPath);


// getting the file extension

const filename="codemind.html";

const extension=path.extname(filename);
console.log("file extension" + extension);