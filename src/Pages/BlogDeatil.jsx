import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useBlog from '../Hook/useBlog'

const BlogDetail = () => {
  const [blogDetail, setBlogDetail] = useState()
  const { ID } = useParams()
  const { getBlogByID } = useBlog()

  useEffect(() => {
    const data = getBlogByID(ID)
    setBlogDetail(data)
  }, [ID])

  return (
    <div className="container mt-4">
      <h3>Blog Detail</h3>
      {blogDetail ? (
        <>
          <h3>{blogDetail.title}</h3>
          <img 
              src="https://picsum.photos/800/400" 
              alt={blogDetail.title} 
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          <p className='lead'>{blogDetail.description}</p>
          
        </>
      ) : (
        <h4>No Data Found</h4>
      )}
    </div>
  )
}

export default BlogDetail
