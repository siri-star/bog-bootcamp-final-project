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

  const saveBody = (text) => {
    post.body = text;
    setPost(post);
    setEdit(false);
    console.log(post)
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
    <h1 style={{fontFamily:"AvenirLTStd", fontWeight:"600", color:"#E3E3E3"}} contentEditable = {edit} id="title" >{post.title}</h1>
    <button onClick={onEdit}>Edit Title</button>
    <button onClick={() => saveTitle(document.getElementById("title").innerText)}>Save Changes</button>
    <h2 style={{fontFamily:"AvenirLTStd", fontWeight:"300", backgroundColor:"#303030", border:"cyan"}} id="body" contentEditable={edit}>{post.body}</h2>
    <p style={{color:"#E3E3E3"}}>{new Date(post.date).toUTCString()}</p>
    <button onClick={onEdit}>Edit Post</button>
    <button onClick={() => saveBody(document.getElementById("body").innerText)}>Save Changes</button>
    <button onClick = {e => {
      fetch("http://localhost:3000/api/deletePost", {
        method: "DELETE",
        body: post._id
      });
    }}>Delete Post</button>
    {comments.map(comment => {
      return (
      <div>
        <p style={{color:"#E3E3E3"}}>&#x2022; {comment.body}</p>
        <hr></hr>
      </div>
      )
    })}
  </div>);
}