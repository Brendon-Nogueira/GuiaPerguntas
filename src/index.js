const express = require('express')
const app = express()
const path = require('path')
const db = require('./model')
const router = require('./router/index.router')
const methodOverride = require('method-override') 

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname, 'public')))

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use(methodOverride('_method')) 


app.use('/', router)


db.sequelize.sync({ alter: true }).then(() => {
    console.log('Database & tables created!')
    app.listen(8088, () => console.log('Server is running on port 8088'))
})
