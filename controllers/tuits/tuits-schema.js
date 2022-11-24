import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    topic: String,
    username: String,
    handle: String,
    time: String,
    image: String,
    title: String,
    avatarIcon: String,
    replies: Number,
    retuits: Number,
    dislikes: Number,
    disliked: Boolean
}, { collection: 'tuits' });
export default schema;