import db from '../database/db.js';
import Task from '../models/Task.js';

class TaskController{
    static createTask(req, res){
        try {
            const { title, description } = req.body;
            
            const task = new Task(title, description);

            if(!task){
                throw new Error('Tarefa não pode ser criada');
            }
            db.push(task);
            res.status(201).json(task);
        } catch (error) {
            console.log('Não foi possível criar a tarefa');
        }


    }

    static getTasks(req, res){
        return res.json(db)
    }
}

export default TaskController;