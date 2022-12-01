import Comment from "../models/Comment";
import Post from "../models/Comment";
import dbConnect from "../dbConnect";

async function findCommentsByPost(postId) {
    await dbConnect();
    const post = await Post.findById(postId);
    return await Comment.find({});
}

export { findCommentsByPost };
