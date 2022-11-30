import { findCommentsByPost } from "../../db/actions/Comment";

function handler(req, res) {
  getComments(req, res);
}

async function getComments(req, res) {
  const post = await findCommentsByPost(req.body);
  res.status(200).json(post);
}

export default handler;
