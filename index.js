const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongo = process.env.MONGODB || 'mongodb://localhost/my-series'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({extended: true}))


//STATIC FILES ASSESTS
app.use(express.static('public'))
app.use(express.static(__dirname +"public/css"));
app.use(express.static(__dirname +"public/js"));
app.use(express.static(__dirname +"public/img"));

//configuração responsável por direcionar consulta a pasta view ao tipo de arquivo ejs TEMPLATE ENGINE 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

//Navigator
app.get('/', (req,res) => {
    res.send('ok')
})


//SERVER CONNECT
mongoose
.connect(mongo,{ useNewUrlParser: true, useUnifiedTopology: true } )
.then(()=>{
    app.listen(port, () => {
        console.log('Listening on: '+port)
    })
}).catch( e => {
    console.log(e)
})
