import React from 'react';
import '../styles/Blogs.css'
import Blognavbar from './Blognavbar';
import img2022 from '../imges/2022.jpg';
import coding from '../imges/coding.jpg';
import frag from '../imges/frag.jpg';

const Blogs = () => {
  return (
    <>
      <h1 className='container' style={{ marginTop: '40px', marginBottom: '40px' }}>Latest Posts</h1>\
      <Blognavbar />
      <div className='container my-5'>
        <div className="cards">
          <div className="card" style={{width: '18rem'}}>
            <img src={img2022} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card" style={{width: '18rem'}}>
            <img src={frag} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card" style={{width: '18rem'}}>
            <img src={coding} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs;