import express from "express";

const app1 = express();
const app2 = express();

const port1 = 3000;
const port2 = 3001;

app1.get('/', (req, res) => {
  res.send('Hello World From Port1!');
});

app2.get('/', (req, res) => {
  res.send('Hello World From Port2!');
});

app1.listen(port1, () => {
  console.log(`Server is running on port ${port1}`);
});

app2.listen(port2, () => {
  console.log(`Server is running on port ${port2}`);
});

// netstat -ano | findstr "LISTENING"
// to check used ports at the moment