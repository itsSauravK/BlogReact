import {useState} from 'react';
import BlogList from './blogList';


const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "First website", body: "Lorem ipsum lore ipsum........", author: "Saurav", id: 1},
        {title: "Second website", body: "Lorem ipsum lore ipsum........", author: "Saurav", id: 2},
        {title: "LAst website", body: "Lorem ipsum lore ipsum........", author: "Shane", id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id );
        setBlogs(newBlogs);
    }

    return(
        <div className="home">
            <BlogList blogs={blogs} handleDelete={handleDelete}/> 
            {/* <BlogList blogs={blogs.filter((blog) => blog.author==="Saurav")}/>  */}
        </div>
    );
}

export default Home;