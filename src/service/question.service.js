const db = require('../model')


const create = async ({ title, description }) => {
    return await db.Question.create({
        title: title,
        description: description
    })
};

const getAnswerById = async (id) => {
    try {
        const question = await db.Question.findOne({
            where: { id: id }
        })
        return question 
    } catch (error) {
        throw error
    }
}


const updateAnswerById = async (id, response) => {
    try {
        const question = await db.Question.findByPk(id)
        if (!question) {
            return null
        }

        question.response = response
        await question.save()

        return question
    } catch (error) {
        throw error
    }
}



const getAll = async () => {
    return await db.Question.findAll({ raw: true, order: [
        ['id', 'DESC']
    ] })
}

module.exports = {
    create,
    getAll,
    getAnswerById,
    updateAnswerById
}