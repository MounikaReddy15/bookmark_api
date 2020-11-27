const Tag = require('../models/tag');


// to get all the tags
module.exports.getTags = async function(req,res) {
    try {
        const tags =  await Tag.find();
        res.json(tags);
    }catch(err) {
        res.json({message:err});
    }
};


// to create a new tag
module.exports.createTag = async function(req,res) {
    const tag = new Tag({
      tagTitle: req.body.tagTitle,
    });
    
    try {
    const savedTag = await tag.save();
    res.json(savedTag);
    }catch(err) {
        res.json({message: err});
    }

}


// to delete a tag
module.exports.deleteTag = async function(req,res) {
    try{
    await Tag.deleteOne({_id: req.params.tagId});
    return res.json(200, {
        message: "Tag deleted!"
      });
    }catch{
     res.json({message: err});
    }
};