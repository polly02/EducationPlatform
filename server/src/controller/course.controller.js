const express = require('express')
const route = express.Router()
const { getCourse, getCourseById, createCourse, updateCourse, deleteCourse } = require("../service/course.service")

route.get('/', async function (req, res) {
    try {
        const courses = await getCourse()
        res.status(200).send(courses)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', async function (req, res) {
    try {
        const { id } = req.params
        const course = await getCourseById(id)
        res.status(200).send(course)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post('/', async function (req, res) {
    try {
        const { title } = req.body
        const course = await createCourse(title)
        res.status(200).send(course)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.put('/:id', async function (req, res) {
    try {
        const { id } = req.params
        const { title } = req.body
        const course = await updateCourse(id, title)
        res.status(200).send(course)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', async function (req, res) {
    try {
        const { id } = req.params
        const course = await deleteCourse(id)
        res.status(200).send(course)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route
