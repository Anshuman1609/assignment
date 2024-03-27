import React from 'react';
import '../styles/Blogs.css'
import Blognavbar from './Blognavbar';
import Btest from './Btest';
// import Allblog from './Allblog';

const Blogs = () => {
  return (
    <>
      <h1 className='container' style={{ marginTop: '40px', marginBottom: '40px' }}>Latest Posts</h1>\
      <Blognavbar />
      {/* <Allblog /> */}
      <Btest />
    </>
  )
}

export default Blogs;