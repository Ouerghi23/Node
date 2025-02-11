const express= require('express');
const app = express();
app.use(express.json()); //middleware parsing body to json object 
let todos=[{id:1 , name:"ouerghi"},{id:2, name:"Chaima"}]

app.post('/api/todos/create',(req,res)=>{
    todos.push(req.body)
    res.send(todos)
})

app.put('/api/todos/update/:id',(req,res)=>{
    const id =Number(req.params.id)
    todos=todos.map((todo)=>{
        return todo.id === id ?{...todo,...req.body}:todo
    })
    res.send(todos)
})

app.delete('/api/todos/delete/:id',(req,res)=>{
    const id =Number(req.params.id)
   todos = todos.filtre((todo)=>{
        return todo.id !== id
    })
    res.send(todos)
})



app.get('/',(req,res)=>{
    res.send({message:"hello from my server"});// can return all type of data in response
    res.json({message: "hello"})//accept only json
    res.end({message:"do this and skip others requests"})
    res.statusCod(404).send({message:"product node found"})
})
app.get('/file',(req,res)=> {
    res.sendFile(__dirname+ '/public/index.html')
})
const PORT=5000;
app.listen(5000,()=>{
    console.log('listening on port',+ PORT);
})