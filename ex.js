const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req,res)=>{
    res.send('Hello There');
});
const courses = [
    {id: 1, name:'Web Development'},
    {id: 2, name:'Cybersecurity'},
    {id: 3, name: 'IT'},
]
app.get('/api/courses', (req,res)=>{
    res.send(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send('The course with the given ID was not found');
        return
    }
        res.send(course);
})
app.listen(3000, () => {
    console.log('Listenning on port 3000...');
})
app.post('/api/courses', (req,res) => {
    //keep working
    if (course.length > 3){
        const course ={
            id: courses.length +1,
            name:req.body.name
        }
    } 
})

app.put('/api/courses/:id', (req,res) =>{
    //keep working
})
app.delete('/api/courses/:id', (req,res)=>{
    //keep working
})
