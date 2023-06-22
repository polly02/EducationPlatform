const express = require('express')
const route = express.Router()
const { getUser, getUserById, createUser, updateUser, deleteUser } = require('../service/user.service')

route.get('/', async function (req, res) {
    try {
        const users = await getUser()
        res.status(200).send(users)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', async function (req, res) {
    try {
        const { id } = req.params
        const user = await getUserById(id)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post('/', async function (req, res) {
    try {
        const { name, surname, email, pwd, role } = req.body
        const user = await createUser(name, surname, email, pwd, role)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.put('/:id', async function (req, res) {
    try {
        const { id } = req.params
        const { name, surname, email, pwd, role } = req.body
        const user = await updateUser(id, name, surname, email, pwd, role)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', async function (req, res) {
    try {
        const { id } = req.params
        const user = await deleteUser(id)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route