import React from 'react'
import { toast } from 'react-toastify'
import useBlog from '../Hook/useBlog'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  const { handleDelete } = useBlog()
  const navigate = useNavigate()

  function deleteHandler(ID) {
    const success = handleDelete(ID)
    if (success) {
      toast("Blog Deleted Successfully")
      window.location.reload() // refresh after delete
    } else {
      toast("Cannot delete")
    }
  }

  return (
    <div className="card shadow" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blog.description}</p>

        <button 
          className='btn btn-secondary me-2'
          onClick={() => navigate(`/update/${blog.id}`)}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button 
          className='btn btn-danger'
          onClick={() => deleteHandler(blog.id)}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default BlogCard
