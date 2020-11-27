

const Bookmark = require('../models/bookmark');
const Tag = require('../models/tag');


// welcome page
module.exports.welcome = async function(req,res) {
    res.send('This is Bookmark Api');
}

// to get all bookmarks
module.exports.getBookmarks = async function(req,res) {
    try {
        const bookmarks =  await Bookmark.find();
        res.json(bookmarks);
    }catch(err) {
        res.json({message:err});
    }
};

// to create a new bookmark
module.exports.createBookmark = async function(req,res) {
    const bookmark = new Bookmark({
        link: req.body.link,
        title: req.body.title,
        publisher: req.body.publisher,
    });
    
    try {
    const savedBookmark = await bookmark.save();
    res.json(savedBookmark);
    }catch(err) {
        res.json({message: err});
    }
}

// to add a tag to a particular bookmark
module.exports.addTagToBookmark = async function(req,res) {
    const bookmarkId = req.params.bookmarkId;
    try{
        // checks for the tag in the db
        const addTag = await Tag.find(req.body);
        const tagId = addTag[0]._id;
        const bookmark = await Bookmark.findById(bookmarkId);
        bookmark.tags.push(tagId);
        const updateBookmark = await bookmark.save();
        return res.json(200, {
            message: "Added Tag to Bookmark",
            updateBookmark
        })
       }
    catch(err){
        res.json({message: err});
       }
}

// to remove a tag from bookmark
module.exports.removeTagFromBookmark = async function(req,res) {
    const bookmarkId = req.params.bookmarkId;
    try{
        const removeTag = await Tag.find(req.body);
        const tagId = removeTag[0]._id;
        const bookmark = await Bookmark.findById(bookmarkId);
        bookmark.tags.pull(tagId);
        const updatedBookmark = await bookmark.save();
        return res.json(200, {
            message: "Removed Tag From Bookmark",
            updatedBookmark
        })
    }catch(err){
        res.json({message: err});

    }
}


// to delete a bookmark
module.exports.deleteBookmark = async function(req,res) {
    try{
    await Bookmark.deleteOne({_id: req.params.bookmarkId});
    return res.json(200, {
        message: "Bookmark deleted!"
      });
    }catch{
     res.json({message: err});
    }
};