const express = require('express')
const mongoose = require('mongoose');
const router = require('./routes/foodRoute');
const cors = require('cors')

const app = express()
const port = 5000;
app.use(express.json())
app.use(cors())

app.use('/api', router)

mongoose.connect('mongodb+srv://shaiksameer12280:nj4kdm2_fmCgYmB@travel.feyio.mongodb.net/?retryWrites=true&w=majority&appName=travel').then(()=>console.log("db connected")).catch((err)=>console.log(err))

app.listen(port,()=>{
console.log(`server running on port ${port}`)
})