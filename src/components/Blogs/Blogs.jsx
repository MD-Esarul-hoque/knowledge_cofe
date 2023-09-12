import { useEffect } from "react"
import { useState } from "react"
import Blog from "../Blog/Blog"
import PropTypes from 'prop-types'

const Blogs = ({handleAddBookMarks,handleTime}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className=" md:w-2/3">
            <h2 className="text-center text-3xl mt-4 bg-slate-200 p-4 mx-4 rounded-xl">Blogs : {blogs.length}</h2>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handleAddBookMarks={handleAddBookMarks} handleTime={handleTime}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    
    handleAddBookMarks:PropTypes.func,
    handleTime:PropTypes.func
}
export default Blogs;