import React from 'react'
import "./service.scss"
function Service() {
  return (
    <div className='mainBox'>
<div className='hero'><h2>Our Services</h2></div>
<div className='boxes'>
    <div className='box'>
        <h3 className='year'>Breakfast</h3>
        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
    </div >
    <div className='box'>
        <h3 className='year'>Brunch</h3>
        <p>Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis.</p>
    </div>
    <div className='box'>
        <h3 className='year'>Lunch</h3>
        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
    </div>
    <div className='box'>
        <h3 className='year'>Dinner</h3>
        <p>Aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendreri.</p>
    </div>
</div>
    </div>
  )
}

export default Service