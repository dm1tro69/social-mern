import {Schema, model} from "mongoose";

const postSchema = new Schema({
     userId: {
         type: String,
         required: true
     },
    firstName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    userPicturePath: {
        type: String
    },
    PicturePath: {
        type: String
    },
    likes: {
        type: Map,
        of: Boolean
    },
    comments: {
        type: Array,
        default: []
    },
}, {timestamps: true})
export default model('Post', postSchema)
