import express from "express";

const app = express();
const port = 3000;

app.get("/" , (req , res) => {
    const date = new Date();
    let today = date.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard";

    if(today === 5 || today === 6)
    {
        type = "the weekend";
        adv = "it's time to have some fun";
    }
    
    res.render("index.ejs" , {
        dayType: type,
        advice: adv
    });
});

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});