import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


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

  // TODO:
  // (1) move delete (and edit) button to individual post view 
  // (2) comments should only be viewable from individual post view (maybe body too?)
  // (3) pagination
  return (
    <div style={{backgroundColor:"black"}}className={styles.container}>
      {posts.map(post => {
      return(<div>
        <h1 style={{fontFamily:"AvenirLTStd", fontWeight:"600", color:"#E3E3E3"}}><Link href={`/${post._id}`}>{post.title}</Link></h1>
        <h2 class="border" style={{color:"#E3E3E3", fontFamily:"AvenirLTStd", fontWeight:"300"}}>{post.body}</h2>
        <div id = "row">
          <p style={{color:"#E3E3E3", backgroundColor:"#303030"}}>{post.comments.length} comments</p>
          <p style={{color:"#E3E3E3"}}>{new Date(post.date).toUTCString()}</p>
          <button onClick = {e => {
            fetch("http://localhost:3000/api/deletePost", {
              method: "DELETE",
              body: post._id
            });
            setPosts(posts.filter(p => p.title != post.title));
          }}>Delete</button>
        </div>
        <hr></hr>
      </div>);
      })}
    </div>
  )
}
