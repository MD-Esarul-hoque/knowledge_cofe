
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
  const [bookmarks,setBookMarks]=useState([]);
  const [timeSet,setTime]=useState(0);
  
  const handleAddBookMarks=blog=>{
    const newBookmarks=[...bookmarks,blog];
    setBookMarks(newBookmarks);
  }
  const handleTime=(id,time)=>{
    //console.log('time add');
    setTime(timeSet+time);
    // remove
    const removeId=bookmarks.filter(bookmark=>bookmark.id !=id);
    setBookMarks(removeId);
  }
//http://localhost:5173/
  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddBookMarks={handleAddBookMarks} handleTime={handleTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} timeSet={timeSet}></Bookmarks>
      </div>
      
      
     
    </>
  )
}

export default App
