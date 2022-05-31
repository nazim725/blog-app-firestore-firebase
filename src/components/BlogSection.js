import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BlogSection = ({ blogs, user, handleDelete }) => {
  const userId = user?.uid
  const excerpt = (str, count) => {
    if (str.length > count) {
      str = str.substring(0, count) + ' ... '
    }
    return str
  }
  return (
    <div>
      <div className="blog-heading text-start py-2 mb-4">Daily Blogs</div>
      {blogs?.map((item) => (
        <div className="row pb-4" key={item.id}>
          <div className="col-md-5">
            <div className="hover-blogs-img">
              <div className="blogs-img">
                <img src={item.imgUrl} alt={item.title} />
                <div></div>
              </div>
            </div>
          </div>
          {/* --------------------------------------------- */}
          <div className="col-md-7">
            <div className="text-start">
              <h6 className="category catg-color">{item.category}</h6>
              <span className="title py-2">{item.title}</span>
              <span className="meta-info">
                <p className="author">{item.author}</p> -&nbsp;
                {item.timestamp.toDate().toDateString()}
              </span>
            </div>

            {/* -------------- */}
            <div className="short-description text-start">
              {excerpt(item.description, 120)}
            </div>

            <Link to={`/detail/${item.id}`}>
              <button className="btn btn-read">Read More</button>
            </Link>

            {/* only j user create create korece same user e update delete korte parbe. edit and delete button show hbe */}
            {userId && item.userId === userId && (
              <div style={{ float: 'right' }}>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>

                {/* <FontAwesome
                  name="trash"
                  style={{ margin: '15px', cursor: 'pointer' }}
                  size="2x"
                  onClick={() => handleDelete(item.id)}
                /> */}

                <Link to={`/update/${item.id}`}>
                  {/* <FontAwesome
                    name="edit"
                    style={{ cursor: 'pointer' }}
                    size="2x"
                  /> */}
                  <button className="btn btn-success ms-3">Edit</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogSection
