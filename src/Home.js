import {useState} from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "First website", body: "Lorem ipsum lore ipsum........", author: "Saurav", id: 1},
        {title: "Second website", body: "Lorem ipsum lore ipsum........", author: "Saurav", id: 2},
        {title: "LAst website", body: "Lorem ipsum lore ipsum........", author: "Shane", id: 3}
    ]);

    return(
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>

                </div>
            ))}
        </div>
    );
}

export default Home;