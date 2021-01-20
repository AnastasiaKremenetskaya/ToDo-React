// @ts-check
const { Sequelize } = require('sequelize')
const taskInit = require('./Task')

const sequelize = new Sequelize('todolist', 'root', '1234567q', {
    host: 'localhost',
    dialect: 'mysql'
});

const Task = taskInit(sequelize)

module.exports = {
    sequelize,
    Task
}