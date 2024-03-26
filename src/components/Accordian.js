import React from 'react';
import '../styles/Calculator.css';

const Accordian = () => {
    return (
        <div className='my-accordians'>
            <h1 className='accord-titles'><b>Find Signals That Close Deals</b></h1>
            <div className="accordion accord" id="accordionExample1">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed style-item" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                            Number of Team Members:
                        </button>
                    </h2>
                    <div id="collapseOne1" className="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                        <div className="accordion-body">
                            How many people are in your firm’s deal team?
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion accord" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed style-item" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                            Size of Network:
                        </button>
                    </h2>
                    <div id="collapseTwo2" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                        <div className="accordion-body">
                            How many contacts are in your network?
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion accord" id="accordionExample3">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed style-item" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                            Number of Signals Per Contact:
                        </button>
                    </h2>
                    <div id="collapseThree3" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                        <div className="accordion-body">
                            How many signals (job changes, investments, mentions). <br /><b>Average</b>: 1 signal per 2 contacts.
                        </div>
                    </div>
                </div>
            </div>


            <div className="accordion accord" id="accordionExample4">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed style-item" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour4" aria-expanded="false" aria-controls="collapseFour4">
                            Percent of Legitimate Signals:
                        </button>
                    </h2>
                    <div id="collapseFour4" className="accordion-collapse collapse" data-bs-parent="#accordionExample4">
                        <div className="accordion-body">
                            Signals that can lead you to reach out to a certain company. <br /><b>Average</b>: 10%
                        </div>
                    </div>
                </div>
            </div>


            <div className="accordion accord" id="accordionExample5">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed style-item" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive5" aria-expanded="false" aria-controls="collapseFive5">
                            Percent of Hard to Discover Signals:
                        </button>
                    </h2>
                    <div id="collapseFive5" className="accordion-collapse collapse" data-bs-parent="#accordionExample5">
                        <div className="accordion-body">
                            Signals that can only be discovered with relationship intelligence technology. <b>Average</b>: 10 to 20%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordian