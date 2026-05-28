




class Task{
    constructor(id, description){
      
        if(!id || !description){
            throw new Error('O id e a descrição são obrigatórios');
        }

        this.id = id;
        this.description = description;

        
    }

}

export default Task;