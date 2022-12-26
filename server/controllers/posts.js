import Post from "../models/Post.js";
import User from "../models/User.js";


export const createPost = async (req, res) => {
    const {userId, description, picturePath} = req.body
    try {
       const user = await User.findById(userId)
       const newPost = new Post({
           userId,
           firstName: user.firstName,
           lastName: user.lastName,
           location: user.location,
           description,
           userPicturePath: user.userPicturePath,
           picturePath,
           likes: {},
           comments: []
       })
        await newPost.save()
        const post = await Post.find()
        res.status(201).json(post)
    }catch (e) {
        res.status(409).json({ error: e.message });
    }
}
export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find()
        res.status(200).json(post)
    }catch (e) {
        res.status(500).json({ error: e.message });
    }
}
export const getUsersPosts = async (req, res) => {
    const {userId} = req.params
    try {
        const post = await Post.findById({userId})
        res.status(200).json(post)
    }catch (e) {
        res.status(500).json({ error: e.message });
    }
}
export const likePost = async (req, res) => {
    const {id} = req.params
    const {userId} = req.body
    try {
        const post = await Post.findById({id})
        const isLiked = post.likes.get(userId)
        if (isLiked){
            post.likes.delete(userId)
        }else {
            post.likes.set(userId, true)
        }
        const updatedPost = await Post.findByIdAndUpdate(
            id,
        {likes: post.likes},
         {new: true}
        )
        res.status(200).json(updatedPost)
    }catch (e) {
        res.status(500).json({ error: e.message });
    }
}



