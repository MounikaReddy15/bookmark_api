
const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },

    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        ref: 'Tag'
    }],
},
{
   timestamps: true
})

// before exporting we need to tell, its a model in the db
const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;

