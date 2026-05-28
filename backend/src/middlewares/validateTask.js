const validateTask = (req, res, next) => {
    const { description } = req.body;

    if(!description){
        return res.status(404).json({ message: "Descrição é obrigatória!"});
    }

    next();
}

export default validateTask;