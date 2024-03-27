import React from 'react';
import '../styles/Blogs.css';
import img2022 from '../imges/2022.jpg';
import coding from '../imges/coding.jpg';
import frag from '../imges/frag.jpg';

const Allblog = () => {
    return (
        <>
            <div className='container my-5'>
                <div className="cards">
                    <div className="card my-card" style={{ width: '20rem', marginBottom: '20px' }}>
                        <img src={img2022} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Private Equity</p>
                            <p className="card-text">Introducing Campaigns</p>
                            <p className="description-more"> With competition getting tougher in the private markets, becoming... </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem', marginBottom: '20px' }}>
                        <img src={frag} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Investment Banking</p>
                            <p className="card-text">Introducing Podcasts</p>
                            <p className="description-more"> With competition getting tougher in the private markets, becoming... </p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem', marginBottom: '20px' }}>
                        <img src={coding} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-title">Consulting</p>
                            <p className="card-text">Introducing Templates</p>
                            <p className="description-more"> With competition getting tougher in the private markets, becoming... </p>
                        </div>
                    </div>
                </div>
            </div>

            <button className='btn btn-primary load-more'>Load More</button>
        </>
    )
}

export default Allblog