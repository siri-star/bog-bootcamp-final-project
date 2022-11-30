import { removePost } from "../../db/actions/Post";

function handler(req, res) {
  deletePost(req, res);
}

async function deletePost(req, res) {
  await removePost(JSON.parse(req.body));
}

export default handler;
