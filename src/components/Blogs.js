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
          <div className="card my-card" style={{width: '20rem', marginBottom: '20px' }}>
            <img src={img2022} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title">Card title</p>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p className="description-more"> Quick </p>
            </div>
          </div>
          <div className="card" style={{width: '20rem', marginBottom: '20px' }}>
            <img src={frag} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title">Card title</p>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p className="description-more"> Quick </p>
            </div>
          </div>
          <div className="card" style={{width: '20rem', marginBottom: '20px' }}>
            <img src={coding} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title">Card title</p>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p className="description-more"> Quick </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs;