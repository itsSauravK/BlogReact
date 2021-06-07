import {useState, useEffect} from 'react';
import BlogList from './blogList';
import useFetch from './useFetch';


const Home = () => {

   const {error, isPending, data: blogs, } = useFetch('http://localhost:8000/blogs');
    

    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author==="Saurav")}/>  */}
        </div>
    );
}

export default Home;