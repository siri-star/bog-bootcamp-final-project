import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:3000/api/getAllPosts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  // notes:
  // (1) move delete (and edit) button to individual post view 
  // (2) comments should only be viewable from individual post view (maybe body too?)
  return (
    <div className={styles.container}>
      {posts.map(post => {
      return(<div>
        <h1>{post.title}</h1>
        <h2>{post.body}</h2>
        <p>{post.comments.length} comments</p>
        <p>{new Date(post.date).toUTCString()}</p>
        <button onClick = {e => {
          fetch("http://localhost:3000/api/deletePost", {
            method: "DELETE",
            body: post._id
          });
          setPosts(posts.filter(p => p.title != post.title));
        }}>delete</button>
      </div>);
      })}
    </div>
  )
}
