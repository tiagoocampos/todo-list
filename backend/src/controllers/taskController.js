import db from '../database/db.js';
import Task from '../models/Task.js';
import { nanoid } from 'nanoid';

class TaskController{
    static createTask(req, res){

       

        try {

            
            const { description } = req.body;

            const id = nanoid(4)
            
            const task = new Task(id, description);

            
            db.push(task);
            res.status(201).json({ message: "Tarefa criada com sucesso" });
        } catch (error) {
            console.log('Não foi possível criar a tarefa');
            res.status(500).json({ error: "Não foi possível criar a tarefa" });
        }


    }

    static getTasks(req, res){
        return res.json(db)
    }
}

export default TaskController;