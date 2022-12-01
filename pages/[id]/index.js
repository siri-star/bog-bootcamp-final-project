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

  const saveBody = (text) => {
    post.body = text;
    setPost(post);
    setEdit(false);
    fetch('http://localhost:3000/api/editPost', {
      method: "POST",
      body: JSON.stringify({
        id: post._id,
        newPost: post
      })
    });
}
  const saveTitle = (text) => {
    post.title = text;
    setPost(post);
    setEdit(false);
    fetch('http://localhost:3000/api/editPost', {
      method: "POST",
      title: JSON.stringify({
        id: post._id,
        newPost: post
      })
    });
  }
  const onEdit = () => {
    setEdit(!edit);
}

  // TODO: return to main view once deleted 
  // TODO: edit button!
  // TODO: comments
  return(<div>
    <h1 contentEditable = {edit} id="title" >{post.title}</h1>
    <button onClick={onEdit}>Edit Title</button>
    <button onClick={() => saveTitle(document.getElementById("title").innerText)}>Save Changes</button>
    <h2 id="body" contentEditable={edit}>{post.body}</h2>
    <p>{new Date(post.date).toUTCString()}</p>
    <button onClick={onEdit}>Edit Post</button>
    <button onClick={() => saveBody(document.getElementById("body").innerText)}>Save Changes</button>
    {comments.map(comment => {
      return <p>{comment.body}</p>;
    })}
    <button onClick = {e => {
      fetch("http://localhost:3000/api/deletePost", {
        method: "DELETE",
        body: post._id
      });
    }}>delete</button>
  </div>);
}