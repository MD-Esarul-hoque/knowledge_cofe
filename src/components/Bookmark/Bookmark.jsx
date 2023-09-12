import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    const {title,posted_date
    }=bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h2 className='text-xl'>{title}</h2>
            <h2><small>🧧 {posted_date} <span><a href="" className='underline'> Bookmarks</a></span></small></h2>
        </div>
    );
};
Bookmark.propTypes={
    
    bookmark:PropTypes.object
}
export default Bookmark;