import Post from "../models/Post";
import dbConnect from "../dbConnect";

/* 
  The following Post model action is given to you.
  You will have to await dbConnect() at the start of every action
   to access the database.
*/

/**
 * 
 * @returns all posts in DB
 */
async function findAllPosts() {
  await dbConnect();
  return await Post.find({}).sort({ date: -1 });
}

/**
 * 
 * @param {id of the post to be returned} id 
 * @returns returns a post with a matching id; null if no such post
 */
async function findPost(id) {
  await dbConnect();
  return await Post.findById(id);
}

async function deletePost(id) {
  await dbConnect();
  return await Post.findByIdAndDelete(id);
}

/**
 * the date should NOT be updated as this represents the upload date
 * assumes Post object is correctly formed
 * @param {id of the post to be updated} id 
 * @param {post with updated information} updatedPost 
 * @returns newly updated post
 */
async function updatePost(id, updatedPost) {
  await dbConnect();
  return await Post.findByIdAndUpdate(id, updatedPost);
}

/**
 * yuh
 * @param {new post!} newPost 
 * @returns new post!
 */
async function addPost(newPost) {
  await dbConnect();
  return await Post.create(newPost);
}

export {findAllPosts, findPost, deletePost, updatePost, addPost};
