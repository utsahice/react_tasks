import React from 'react'
import './index.css'
import MyButton from './components/button'
import BlogPostList from './components/bloglist'
function App() {

  return (
    <>
     <h1 className="text-3xl font-bold text-center italic tracking-wider text-blue-400 uppercase font-serif ">
      Blog Post
    </h1>
    <BlogPostList />
    </>
  
  )
}

export default App
