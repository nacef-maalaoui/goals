const Hero = require('../model/goal.model');

const create = (req , res)=>{
    let data = req.body;
    let hero = new Hero(data);
    hero.save()
        .then(
            (resulte)=>{
                res.send(resulte);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
}

const all = (req , res)=>{
    Hero.find()
        .then(
            (resulte)=>{
                res.send(resulte);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )

}


const byid = (req , res)=>{
    Hero.findById({_id : req.params.id})
        .then(
            (resulte)=>{
                res.send(resulte);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
}


const supp = (req , res)=>{
    Hero.findByIdAndDelete({_id : req.params.id})
        .then(
            (resulte)=>{
                res.send(resulte);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
}


const update = (req , res)=>{
    Hero.findByIdAndUpdate({_id : req.params.id} , req.body)
        .then(
            (resulte)=>{
                res.send(resulte);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
}


module.exports = {create,all,byid,supp,update}