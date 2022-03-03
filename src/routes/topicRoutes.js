module.exports = (app) => {
    const Topic = require('../models/topic')

    //creer user
    app.post('/api/topic/save', async (req, res) => {
       
        const data = {
            title: req.body.title,
            description: req.body.description,
            user_id: req.body.user_id,
            creationDate: new Date()
        }

        const topic = await Topic(data)
        const result = await topic.save()
        res.json({status: 200, result, result})
    })

    //Recuperer topic

    app.get('/api/topic/all', async (req, res) => {
      
        const topics = await Topic.find({})

        res.json({status: 200, topics: topics})
    })

    app.get('/api/topic/:id', async (req,res) => {
        const id = req.params.id

        const topic = await Topic.find({_id: id})

        res.json({status: 200, topic: topic[0]})
    })


    //modifier topic

    app.put('/api/topic/:id', async (req,res) => {
        const id = req.params.id

        const data = {
            title: req.body.title,
            description: req.body.description
        }

        const result = await Topic.updateOne({_id: id}, data)

        res.json({status: 200, result: result})
    })

    //supprimer topic
    app.delete('/api/topic/delete/:id', async (req, res)=> {
        const id = req.params.id;

        const result = await Topic.deleteOne({_id: id});

        res.json({status: 200, result: result})
    })
    
}