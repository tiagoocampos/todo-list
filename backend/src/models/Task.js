class Task{
    constructor(title, description){

        if(!title || !description){
            throw new Error('O título e a descrição são obrigatórios');
        }

        this.title = title;
        this.description = description;

        
    }

}

export default Task;