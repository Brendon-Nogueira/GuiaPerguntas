const { STRING } = require('sequelize')
const questionService = require('../service/question.service')

const create = (req, res) => {
    const { title, description } = req.body

    questionService.create({ title, description })
        .then(() => {
            res.redirect('/')
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send('Error saving the question.')
        })
}

const getAnswerById = async (req, res) => {
    const { id } =  parseInt(req.params.id, 10)

    try {
        const searchAnswer = await questionService.getAnswerById(id) 
        if (searchAnswer) {
            res.status(200).json(searchAnswer) 
        } else {
            res.status(404).send('Não encontrado')
        }

    } catch (error) {
        res.status(500).send('Erro interno no servidor')
    }
}


const updateAnswerById = async (req, res) => {
    const id = parseInt(req.params.id, 10)
    const { answer } = req.body

    try {
        const updatedQuestion = await questionService.updateAnswerById(id, answer)
        if (updatedQuestion) {
            res.json({ success: true, message: 'Resposta atualizada com sucesso!' })
        } else {
            res.status(404).json({ success: false, message: 'Pergunta não encontrada.' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Erro ao atualizar a resposta.' })
    }
}



const getAll = async (req, res) => {
    try {
        const questions = await questionService.getAll();
        res.render('index', { questions: questions || [] })
    } catch (error) {
        console.log(error);
        res.status(500).send('Error listing questions.')
    }
};


module.exports = {
    create,
    getAll,
    getAnswerById,
    updateAnswerById
}