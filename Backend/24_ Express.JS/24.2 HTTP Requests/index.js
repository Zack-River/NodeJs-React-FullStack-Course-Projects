import express from "express";

const app = express();
const port = 3000;

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/' , (request,response) => {
   //console.log(request.rawHeaders);
    response.send(`
        <h1>Home Page</h1>
    `);
});

app.get(`/about` , (req,res) => {
    res.send(`
        <h1>About Me</h1>    
    `);
});

app.get(`/contact` , (req,res) => {
    res.send(`
        <h1>Contact Me</h1>    
    `);
});

app.get('/product/', (req, res) => {
    res.send(`
       <h1>Product List</h1> 
    `);
});

app.get('/product/:id?', (req, res) => {
    const { id } = req.params;
    
    if (id) {
        res.send(`
            <h1>Product with ID: ${id}</h1>
            <p>I am Cheese</p>
        `);
    } else {
        res.send(`<h1>Not Product</h1>`);
    }
});
