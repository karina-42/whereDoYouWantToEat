const ToEat = require('../models/ToEat')

module.exports = {
    createToEat: async (req, res)=>{
        try{
            await ToEat.create({toEat: req.body.toEatItem, user: req.user.id})
            console.log('ToEat has been added!')
            res.redirect('/choose')
        }catch(err){
            console.log(err)
        }
    },
    deleteToEat: async (req, res)=>{
        console.log(req.body.toEatIdFromJSFile)
        try{
            await ToEat.findOneAndDelete({_id:req.body.toEatIdFromJSFile})
            console.log('Deleted ToEat')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    