import express from 'express'
import { startDatabase } from './database';
import { createTodo, deleteTodo, listTodo, updateTodo } from './logic';



const app = express();
app.use(express.json());


app.get('/todos', listTodo)
app.post('/todo', createTodo)
app.patch('/todo/:id', updateTodo)
app.delete('/todo/:id', deleteTodo)



app.listen(3000, async () => {
    await startDatabase();
    console.log('Server is running!')
})