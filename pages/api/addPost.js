import { addPost } from "../../db/actions/Post";

function handler(req, res) {
  addNewPost(req, res);
}

async function addNewPost(req, res) {
  const post = await addPost(JSON.parse(req.body));
  res.status(200).json(post);
}

export default handler;
