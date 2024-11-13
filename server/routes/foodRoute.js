const express = require('express')
const Food = require('../model/Food')

const router = express.Router()

router.get('/foods',async (req,res)=>{
    const data = await Food.find()
    res.json(data)
})

router.get('/foods/:id',async (req,res)=>{
    const data = await Food.findById(req.params.id)
    res.json(data)
})

router.post('/foods',async (req,res)=>{
    const data = await new Food(req.body)
    data.save()
    res.send(data)
})

router.put('/foods/:id', async(req,res)=>{
    const data = req.body
    const newData = await Food.findByIdAndUpdate(req.params.id, data, {new:true})
    res.json(newData)
})

router.delete('/foods/:id', async(req,res)=>{
    await Food.findByIdAndDelete(req.params.id)
    res.send("data deleted")
})

module.exports = router