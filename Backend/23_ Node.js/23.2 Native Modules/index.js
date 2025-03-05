const fileName = "messageCreated.txt";

const fs = require("fs");

if(!fs.existsSync(fileName)){
    fs.writeFile(fileName,"Hello Form Node.JS!\nHello From Zack River!", (err) => {
        if(err) throw err;
        console.log("File Saved Successfully");
    });
}

else {
    /* this will return raw buffer code bcz it has no encoding type specified.
    fs.readFile(fileName , (err,data) => {
    if(err) throw err;
    console.log(data);
    })
    */

    fs.readFile(fileName , "utf8" , (err,data) => {
        if(err) throw err;
        console.log(data);
    })
}
