import db from '../database/db.js';
import Task from '../models/Task.js';

class TaskController{
    static createTask(req, res){

        

        try {

            
            const { title, description } = req.body;

             if(!title || !description){
                console.log('O título e a descrição são obrigatórios');
                return res.status(400).json({ error: "O título e a descrição são obrigatórios" });

        }
            
            const task = new Task(title, description);

            
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