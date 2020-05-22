const { Subreddit } = require("../models");

class ControllerSubreddit {

    static getSubbreddits(req, res, next){
        Subreddit.findAll()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err =>{
            next({ status: 500, msg: "Internal Server Error!" });
        })
    }

    static createSubreddit(req, res, next) {
        const { name } = req.body;
        Subreddit.create({ name })
        .then(data => {
            res.status(201).json(data);
        })
        .catch(error => {
            next({ status: 500, msg: "Internal Server Error!" });
        });
    }
}

module.exports = ControllerSubreddit;
