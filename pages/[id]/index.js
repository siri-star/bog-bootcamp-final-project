import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const [edit, setEdit] = useState(false);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/getPost`, {
      method: "POST",
      body: id,
    })
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/api/getComments`, {
      method: "POST",
      body: id,
    })
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  const saveChanges = () => {
    setPost(post);
    setEdit(false);
    console.log(post);
}
  const onEdit = () => {
    setEdit(!edit);
}

  // TODO: return to main view once deleted 
  // TODO: edit button!
  // TODO: comments
  return(<div>
    <h1>{post.title}</h1>
    <h2 contentEditable={edit}>{post.body}</h2>
    <p>{new Date(post.date).toUTCString()}</p>
    <button onClick={onEdit}>Edit Post</button>
    <button onClick={saveChanges}>Save Changes</button>
    <button onClick = {e => {
      fetch("http://localhost:3000/api/deletePost", {
        method: "DELETE",
        body: post._id
      });
    }}>Delete Post</button>
    {comments.map(comment => {
      return <p>{comment.body}</p>;
    })}
  </div>);
}