import React, { useState } from 'react'
import useBlog from '../Hook/useBlog'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { addNewBlog } = useBlog()

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim()) {
      toast("Blog Title is required...")
      return
    }

    if (!description.trim()) {
      toast("Description is required...")
      return
    }

    const payload = {
      id: Date.now(),
      title,
      description
    }

    addNewBlog(payload)
    toast("Blog Added Successfully...")
    setTitle('')
    setDescription('')
  }

  return (
    <>
      <div>
        <form className='container border-1 shadow mt-5 p-4' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Blog Title</label>
            <input 
              type="text" 
              className="form-control" 
              id="title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Blog Description</label>
            <textarea 
              className="form-control" 
              id="description" 
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddBlog
