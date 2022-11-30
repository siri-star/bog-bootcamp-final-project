import { updatePost } from "../../db/actions/Post";

function handler(req, res) {
  editPost(req, res);
}

async function editPost(req, res) {
  const post = await updatePost(req.bod.id, req.body.newPost);
  res.status(200).json(post);
}

export default handler;
