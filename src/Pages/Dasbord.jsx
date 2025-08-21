import React, { useEffect, useState } from 'react'
import useBlog from '../Hook/useBlog'
import BlogCard from '../Componet/BlogCard'
import { Link } from 'react-router-dom'

const Dasbord = () => {
  const [blogs, setBlogs] = useState([])
  const { getBlog } = useBlog()

  useEffect(() => {
    setBlogs(getBlog())
  }, [])

  return (
    <div className="container mt-4">
      {blogs.length > 0 ? (
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
              <Link to={`/${blog.id}`}>
                <BlogCard blog={blog} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No Blog yet</p>
      )}
    </div>
  )
}

export default Dasbord
