import { useState } from 'react'

const useBlog = () => {
  const [blogs, setBlogs] = useState([])

  function saveBlog(b) {
    localStorage.setItem('blogs', JSON.stringify(b))
    setBlogs(b)
  }

  function getBlog() {
    return JSON.parse(localStorage.getItem('blogs')) || []
  }

  function getBlogByID(ID) {
    const blogs = getBlog()
    return blogs.find((b) => String(b.id) === String(ID))
  }

  function addNewBlog(data) {
    const blogs = getBlog()
    blogs.push(data)
    saveBlog(blogs)
  }

  function handleDelete(ID) {
    const blogs = getBlog()
    const updated = blogs.filter((b) => String(b.id) !== String(ID))
    saveBlog(updated)
    return true
  }

  return { saveBlog, getBlog, blogs, addNewBlog, handleDelete, getBlogByID }
}

export default useBlog
