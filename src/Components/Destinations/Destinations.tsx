import React from 'react'
import './Destinations.css'


function Destinations() {
    return (
        <div id='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>On the Caribbean's Best Beaches</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src="australia.jpg" alt="/"/>
                    <img src="australia.jpg" alt="/"/>
                    <img src="dolphin.jpg" alt="/"/>
                    <img src="road.jpg" alt="/"/>
                    <img src="wave.jpg" alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations