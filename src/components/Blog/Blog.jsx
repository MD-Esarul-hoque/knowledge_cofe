
import PropTypes from 'prop-types'
//import { FaBookmark } from 'react-icons/fa' <FaBookmark></FaBookmark> 


const Blog = ({blog,handleAddBookMarks,handleTime}) => {
//console.log(blog);
 const {id,title,cover_image,author_img,author,posted_date,reading_time,hashtag
 }=blog;
    return (
        <div className='px-5 pb-5 mb-5'>
            <img src={cover_image} className='h-[400px] w-full mt-10'  alt="" />
            <div className='flex my-5 justify-between'>
                <div className='flex gap-3 '>
                    <div><img src={author_img} alt="" className="h-12 w-12 rounded-full" /></div>
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div>
                    <div className='mb-2 text-center'><p><small>{reading_time} minutes read </small></p></div>
                    <div><button onClick={()=>handleAddBookMarks(blog)} className='p-5 bg-red-200 rounded-xl'>Add bookmark </button></div>
                    
                    
                </div>
            </div>
            <h2 className="text-4xl my-5"> {title}</h2>
            <div className='flex items-center justify-between ' >
                <p><small># {hashtag[0]}  <br />
            # {hashtag[1]}</small></p>
            <p className='font-bold text-xl '>Read more . . . </p>
            </div>
            <div>
                <button className='mt-5 underline text-gray-800 font-medium text-base' onClick={()=>handleTime(id,reading_time)}>Mark as read</button>
            </div>
            
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddBookMarks:PropTypes.func,
    handleTime:PropTypes.func,
}
export default Blog;