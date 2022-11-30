import React from "react";
import { useState, useEffect } from "react";


function SinglePost() {
    const [edit, setEdit] = useState(false);
    const onEdit = () => {
        setEdit(!edit);
    }

    const [comments, setComments] = useState([]);
    

    /*const refreshData = () => {
        router.replace(router.asPath);
      };
    const deletePost = async () => {
        try {
          await fetch(`/pages/SinglePost/${postId}`, {
            method: "DELETE",
          });
          if (redirect) {
            router.push(redirect)
          } else {
            refreshData();
          }
        } catch (error) {
          console.error(error);
        }
       };
       */
    return (
        <div style={{backgroundColor:"#101010"}}>
            <button onClick={deletePost}>&lt;</button>
            <h style={{display:"flex", flexDirection:"column", alignItems:"center", fontSize:30}}>Title</h>
            <p style={{fontSize:15}}>Date</p>
            <p contentEditable={edit} style={{fontSize:22}}>Body</p>
            <button onClick={onEdit}>Edit Post</button>
            <button onClick={deletePost}>Delete Post</button>
            <p style={{backgroundColor:"#151515"}}>Comments</p>
            <button onClick={deletePost}>Add Comment</button>
        </div>
    )
}
export default SinglePost;