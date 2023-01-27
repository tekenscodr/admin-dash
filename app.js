const express = require('express')
const morgan = require('morgan')
const app = express()


app.disable('etag');

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((err, req, res, next) => {
    res.status(err.status || 404)
    res.send({
        error: {
            status: err.status || 404,
            message: err.message,
        },
    })
})
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

