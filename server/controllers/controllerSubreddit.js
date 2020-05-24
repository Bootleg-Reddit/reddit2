const { Subreddit } = require("../models");

class ControllerSubreddit {

    static getSubbreddits(req, res, next){
        Subreddit.findAll()
        .then(data=>{
            res.status(200).json({subreddits: data})
        })
        .catch(err =>{
            next({ status: 500, msg: "Internal Server Error!" });
        })
    }

    static createSubreddit(req, res, next) {
        const { name } = req.body;
        let lowercaseName = name.toLowerCase()
        Subreddit.create({ name: lowercaseName })
        .then(data => {
            res.status(201).json({subreddit: data});
        })
        .catch(error => {
            next({ status: 500, msg: "Internal Server Error!" });
        });
    }
}

module.exports = ControllerSubreddit;
