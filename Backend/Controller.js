const service = require('./Service')

const Ctrl = {
    getData : async (req,res)=>{
        try{
            const filterFile = await service.get()
            if(filterFile){
                res.status(200).json(filterFile)
            }
        }
        catch(err){
            res.status(500)
            res.send(err)
        }
    },
    createData :async (req,res)=>{
        try{
            const filterFile = await service.getById(req.params.id)
            if(filterFile){
                res.status(404).json({error:"Conflict",description:"File already exists"})
            }else{
                const fileCreated = await service.create(req.body)
                res.status(200).json(fileCreated)
            }
        }
        catch(err){
            res.status(500)
            res.send(err)
        }
    },
    getById :async(req,res)=>{
        try{
            const filterFile = await service.getById(req.params.id)
            if(filterFile){
                res.status(200).json(filterFile)
            }else{
                res.status(400).json({error:"file not found...!"})
            }
        }
        catch(err){
            res.status(500)
            res.send(err)
        }
    }
}
module.exports = Ctrl