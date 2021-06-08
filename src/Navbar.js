import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import useFetch from './useFetch'



const Navbar = () =>{
    
    const [title, setTitle] = useState('Enter Title');
    const {data: blogs, error, isPending} = useFetch('http://localhost:8000/blogs');
    const history = useHistory();

    const handleSearch = (e) =>{

        e.preventDefault();
        const newBlog = blogs.filter((blog) => blog.title == title)[0];
        if(newBlog){
            history.push(`/blogs/${newBlog.id}`)
        }else{
            setTitle("Title not found");
        }
    }
    
    
    return(
        <nav className="navbar">
            <h1>Blog</h1>
            <div className="nav-form">
                <form onSubmit = {handleSearch}>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    <button>Search</button>
                </form>
                <div className="links">
                <Link to = "/">Home </Link>
                <Link to = "/create">New Blog</Link>
            </div>
            </div>
            
          
            
        </nav>
    );

}

export default Navbar;