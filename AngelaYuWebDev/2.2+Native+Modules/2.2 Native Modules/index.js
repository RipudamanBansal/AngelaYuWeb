const fs = require("fs")

fs.writeFile('messge.txt', "hello from ripu", (err) => {
    if(err) throw err;
    console.log("success")
})