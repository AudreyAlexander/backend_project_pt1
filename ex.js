const express = require('express');
const app = express();
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
