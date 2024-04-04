const express = require('express')
const app = express();
const data = require('./data.json')
app.use(express.json())

//Setting View Engine for EJS
app.set('view engine', 'ejs')

//HomePage
app.get('/', (req, res) => {
    res.render('index.ejs')
})

//Result Page
app.get('/marks/:id', (req, res) => {
    let id = req.params.id;
    let studentData = data.find(student => student.id === id); //Finding Student Data with ID
    if(studentData){
        res.render('result.ejs', {studentData} ) //Rendering Result Page with Data
    } else {
        res.render('notFound.ejs') //Rendering Not Found Page
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000') //Listening on Port 3000
})

