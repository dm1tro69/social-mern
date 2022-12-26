import {Router} from "express";
import {verifyToken} from "../middleware/auth.js";
import {getFeedPosts, getUsersPosts, likePost} from "../controllers/posts.js";

const router = Router()

router.get('/', verifyToken, getFeedPosts)
router.get('/:userId/posts', verifyToken, getUsersPosts)

router.patch('/:id/like', verifyToken, likePost)
export default router
