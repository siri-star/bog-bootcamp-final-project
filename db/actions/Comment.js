import Comment from "../models/Comment";
import dbConnect from "../dbConnect";

async function findCommentsByPost(id) {
    await dbConnect();
    const postCommentIds = await Post.findById(id).comments; // sorted by date
    const allComments = await Comment.find({}).sort({ date: -1 }); // sorted by date
    const comments = [];
    // TODO: replace with innerjoin?
    var postCommentIdCounter = 0;
    for (var allCommentsCounter = 0; postCommentIdCounter < postCommentIds.length; allCommentsCounter++) {
        if (postCommentIds[postCommentIdCounter].toString() == allComments[allCommentsCounter]._id.toString()) {
            comments.push(allComments[allCommentsCounter]);
            postCommentIdCounter++;
        }
    }
    return comments;
}

export { findCommentsByPost };
