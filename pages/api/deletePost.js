import { removePost } from "../../db/actions/Post";

function handler(req, res) {
  deletePost(req, res);
}

async function deletePost(req, res) {
  const removedPost = await removePost(req.body);
  res.status(200).json(removedPost);
}

export default handler;
