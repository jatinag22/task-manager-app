require('./db/mongoose')
const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(process.env.PORT, () => {
    console.log('Server running on port ' + process.env.PORT)
})