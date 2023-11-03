// 


const url= require("url");
const urlString="https://www.codemindtechnology:8080/path/to/resource?params=value&param2=value&param3=value"

const pastedUrl=url.parse(urlString,true);
console.log(pastedUrl);

// getting url components

console.log("protocol: "+pastedUrl.protocol);
console.log("Host: "+pastedUrl.host);
console.log("Path: "+pastedUrl.path);
// console.log("Query: "+pastedUrl.query);

console.log(`Query:${JSON.stringify(pastedUrl.query)}`);

