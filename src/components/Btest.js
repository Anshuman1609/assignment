import React, { useEffect } from 'react';
import '../styles/Btest.css';
import img2022 from '../imges/2022.jpg';
import coding from '../imges/coding.jpg';
import frag from '../imges/frag.jpg';

const Btest = () => {
    useEffect(() => {
        let loadMoreBtn = document.querySelector('#load-more');
        let currentItem = 3;

        if (loadMoreBtn) {
            loadMoreBtn.onclick = () => {
                let boxes = [...document.querySelectorAll('.containee .box-containee .box')];
                for (let i = currentItem; i < currentItem + 3; i++) {
                    if (boxes[i]) {
                        boxes[i].style.display = 'inline-block';
                    }
                }
                currentItem += 3;

                if (currentItem >= boxes.length) {
                    loadMoreBtn.style.display = 'none';
                }
            }
        }
    }, []);
    return (
        <>
            <div className="containee">

                <div className="box-containee">

                    <div className="box">
                        <div className="image">
                            <img src={img2022} alt="" />
                        </div>
                        <div className="content" style={{ display: 'flex', flexDirection: 'column', rowGap: '5px', textAlign: 'start' }}>
                            <h3 style={{ marginBottom: '0px' }}>blog title goes here</h3>
                            <p style={{ padding: 0 , fontWeight : '700' }}>Introducing Campaigns</p>
                            <p style={{ fontSize: '14px', padding: 0 }}>With competition getting tougher in the private markets, becoming...</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={coding} alt="" />
                        </div>
                        <div className="content" style={{ display: 'flex', flexDirection: 'column', rowGap: '5px', textAlign: 'start' }}>
                            <h3 style={{ marginBottom: '0px' }}>blog title goes here</h3>
                            <p style={{ padding: 0 , fontWeight : '700' }}>Introducing Campaigns</p>
                            <p style={{ fontSize: '14px', padding: 0 }}>With competition getting tougher in the private markets, becoming...</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={frag} alt="" />
                        </div>
                        <div className="content" style={{ display: 'flex', flexDirection: 'column', rowGap: '5px', textAlign: 'start' }}>
                            <h3 style={{ marginBottom: '0px' }}>blog title goes here</h3>
                            <p style={{ padding: 0 , fontWeight : '700' }}>Introducing Campaigns</p>
                            <p style={{ fontSize: '14px', padding: 0 }}>With competition getting tougher in the private markets, becoming...</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={img2022} alt="" />
                        </div>
                        <div className="content" style={{ display: 'flex', flexDirection: 'column', rowGap: '5px', textAlign: 'start' }}>
                            <h3 style={{ marginBottom: '0px' }}>blog title goes here</h3>
                            <p style={{ padding: 0 , fontWeight : '700' }}>Introducing Campaigns</p>
                            <p style={{ fontSize: '14px', padding: 0 }}>With competition getting tougher in the private markets, becoming...</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={coding} alt="" />
                        </div>
                        <div className="content" style={{ display: 'flex', flexDirection: 'column', rowGap: '5px', textAlign: 'start' }}>
                            <h3 style={{ marginBottom: '0px' }}>blog title goes here</h3>
                            <p style={{ padding: 0 , fontWeight : '700' }}>Introducing Campaigns</p>
                            <p style={{ fontSize: '14px', padding: 0 }}>With competition getting tougher in the private markets, becoming...</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={frag} alt="" />
                        </div>
                        <div className="content" style={{ display: 'flex', flexDirection: 'column', rowGap: '5px', textAlign: 'start' }}>
                            <h3 style={{ marginBottom: '0px' }}>blog title goes here</h3>
                            <p style={{ padding: 0 , fontWeight : '700' }}>Introducing Campaigns</p>
                            <p style={{ fontSize: '14px', padding: 0 }}>With competition getting tougher in the private markets, becoming...</p>
                        </div>
                    </div>

                </div>

                <div id="load-more"> load more </div>

            </div>
        </>
    )
}

export default Btest