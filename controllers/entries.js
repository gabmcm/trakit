const Entry = require('../models/Entry')

module.exports = {
    getEntries: async(req,res) =>{
        console.log('getEntries')
        // console.log(req.user.id)
        try{
            const entryItems = await Entry.find({ userId: req.user.id })
            entryItems.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
            console.log(entryItems)
            console.log(req.user.id)
            res.render('entries.ejs', { entries: entryItems, user: req.user.id })
        }catch(err){
            console.log(err)
        }
    },
    getSingle: async(req,res) => {
        try{
            const foundEntry = await Entry.find({ _id: req.params.id })
            console.log('found')
            res.json(foundEntry)
        }catch(err){
            console.log(err)
        }
    },
    createEntry: async (req, res) =>{
        try{
            await Entry.create({ date: req.body.date, painScale: req.body.painScale, medsTaken: req.body.medsTaken, length: req.body.length, triggers: req.body.triggers, notes: req.body.notes, userId: req.user.id })
            console.log('New entry has been created')
            res.redirect('/entries')
        }catch(err){
            console.log(err)
        }
    },
    deleteEntry: async(req, res)=>{
        try{
            await Entry.findOneAndDelete({ _id: req.body.entryIdFromJSFile })
            console.log('Deleted Entry')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    editEntry: async(req, res)=>{
        try{
            await Entry.findOneAndUpdate({ _id: req.body.entryIdFromJSFile },{
                date: req.body.date, painScale: req.body.painScale, medsTaken: req.body.medsTaken, length: req.body.length, triggers: req.body.triggers, notes: req.body.notes, userId: req.user.id
            })
            console.log('Updated entry')
            res.json('Updated entry')
        } catch(err){
            console.log(err)
        }
    }
}