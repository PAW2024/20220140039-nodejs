const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.js');
const port = 3000;

//post method (menambah data)
app.use(express.json());

app.use('/todos', todoRoutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/', (req, res) => {
    res.render('contact');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});