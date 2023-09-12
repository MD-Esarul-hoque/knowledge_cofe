import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/bookmark'

const Bookmarks = ({bookmarks,timeSet}) => {

    return (
        <div className=" md:w-1/3 bg-slate-300 mx-4 mt-4 pt-4 rounded-xl">
            <div className='text-center my-5 bg-slate-200 mx-4 rounded-xl font-medium text-xl p-4'>
                <h2>Total Reading time : {timeSet}</h2>
            </div>
            <h2 className='text-3xl text-center  bg-red-200 mx-4 rounded-xl font-medium  p-4'>Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    
    bookmarks:PropTypes.array,
    timeSet:PropTypes.number
}
export default Bookmarks
