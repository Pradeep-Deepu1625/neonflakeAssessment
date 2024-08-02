const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const router = require('./Router');
const main = express();
const cors = require('cors');
main.use(cors());
main.use(bodyParser.urlencoded({ extended: true }));
main.use(bodyParser.json())
const url = 'mongodb+srv://pradeep9100234360:Deepu1625@cluster0.zyiyzx2.mongodb.net/NeonflakeData'
mongoose.connect(url)
    .then(res=>console.log('DB connected....!'))
    .catch(err=>console.log(err))

main.listen(3000,()=>{
    console.log('server connected..!')
})

main.use('/Neonflake',router)