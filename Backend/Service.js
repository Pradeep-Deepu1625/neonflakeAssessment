const schema = require('./Model')
const service = {
    get:async()=>{
        return await schema.find()
    },
    create:async(data)=>{
        const newData = await new schema(data)
        return newData.save()
    },
    getById:async(id)=>{
        return await schema.findById(id)
    }
}
module.exports = service