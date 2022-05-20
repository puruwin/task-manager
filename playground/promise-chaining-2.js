require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('62874ce560ef06268034d975').then((task) => {
    console.log(task)
    return Task.countDocuments({})
}).then((tasksCount) => {
    console.log(tasksCount)
}).catch((e) => {
    console.log(e)
})