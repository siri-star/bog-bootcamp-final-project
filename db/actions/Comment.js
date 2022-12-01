import Comment from "../models/Comment";
import Post from "../models/Comment";
import dbConnect from "../dbConnect";

async function findCommentsByPost(postId) {
    await dbConnect();
    const post = await Post.findById(postId);
    const output = await Comment.find({ _id: { $in: post.comments } }).sort({
      date: -1,
    });
    return output;
}

export { findCommentsByPost };
