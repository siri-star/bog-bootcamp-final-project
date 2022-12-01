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

  return (
    <div className={styles.container}>
      {posts.map(post => {
      return(<div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
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
