import React ,{useEffect}from "react"
import axios from "axios"
import { useState } from "react";
function App() {
  const Posts=()=>{
    useEffect(()=>{
      getPosts();
    },[]);
  }
  const [post,setPosts]=useState();
  const getPosts=()=>{
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res)=>{
        setPosts(res.data);
        console.log(post);
      }).catch((err)=>console.error(err))
  }
  return (
    <>
      <h3>Hello</h3>
      <ul>
        {post.map(
            (posts)=>(
              <li key={posts.id}></li>,
              <li key={posts.name}></li>,
              <li key={posts.username}></li>,
              <li key={posts.email}></li>,
              <li key={posts.address}></li>
            )
          )
        }
      </ul>

    </>
  )
}

export default App
