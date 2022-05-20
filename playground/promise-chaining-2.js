require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('62874ce560ef06268034d975').then((task) => {
//     console.log(task)
//     return Task.countDocuments({})
// }).then((tasksCount) => {
//     console.log(tasksCount)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const delTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('6286835a1ec43543f86a0106').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})