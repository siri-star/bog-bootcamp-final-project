import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";



function SinglePost() {
    const [edit, setEdit] = useState(false);
    const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState([]);
    const router = useRouter();

    const onEdit = () => {
        setEdit(!edit);
    }
    const addComment = () => {
        comments.unshift({})
    }


    useEffect(() => {
        fetch("http://localhost:3000/api/getAllPosts")
        .then((response) => response.json())
        .then((data) => {
            setPosts(data);
        });
    }, []);

    return (
        <div style={{backgroundColor:"#101010"}}>
            <button onClick={onEdit}>&lt;</button>
            <h style={{display:"flex", flexDirection:"column", alignItems:"center", fontSize:30}}>{posts.title}</h>
            <p style={{fontSize:15}}>{posts.date}</p>
            <p contentEditable={edit} style={{fontSize:22}}>{posts.body}</p>
            <button onClick={onEdit}>Edit Post</button>
            <button onClick={onEdit}>Delete Post</button>
            <p style={{backgroundColor:"#151515"}}>Comments</p>
            <button onClick={onEdit}>Add Comment</button>
            {
                comments.map(prev => {
                    return <p>{posts.comments}</p>
                })
            }
        </div>
    )
}
export default SinglePost;