class Task{
    constructor(title, description){

        if(!title || !description){
            throw new Error('Título e descrição são obrigatórios');
        }

        this.title = title;
        this.description = description;
    }

}

export default Task;