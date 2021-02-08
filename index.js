const { json } = require('express');
const express = require('express');
const port = process.env.PORT || 3000
const app = express();

app.use(express.json())

app.get(['/index','/',''], (req,res)=>{
    res.json({"message" : " Bonjour GLSI_D"});
});

app.get('/name/:n', (req,res)=>{
    res.json({"message" : " Bonjour "+req.params.n});
});

app.post('/say/hello',(req,res)=>{
    res.send(req.body.name)
});

app.listen(port, () => console.log(`Server on ${port}...`));