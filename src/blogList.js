import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const BlogList = ({blogs}) =>{

    const history = useHistory();
    const handleDelete = (id) => {

            fetch(`http://localhost:8000/blogs/${id}`,{
                method: 'DELETE'
            }).then(() =>{
                history.push('/create');
            })
            
    }

    return(
        <div className="blog-list">
                {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to ={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                    <button onClick ={() => {handleDelete(blog.id)}} >
                        delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;