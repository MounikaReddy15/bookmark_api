
const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    tagTitle: {
        type: String,
        required: true,
        unique: true
    },
},
{
   timestamps: true
})

// before exporting we need to tell, its a model in the db
const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;

