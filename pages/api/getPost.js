import { findPost } from "../../db/actions/Post";

function handler(req, res) {
  getPost(req, res);
}

async function getPost(req, res) {
  const post = await findPost(req.body);
  res.status(200).json(post);
}

export default handler;
