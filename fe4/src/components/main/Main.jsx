import React from 'react'
import "./main.scss"
function Main() {
  return (
    <div className='mainBox'>
<div className='hero'><h2>Welcome</h2></div>
<div className='boxes'>
    <div className='box'>
        <h3 className='year'>2002</h3>
        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
    </div >
    <div className='box'>
        <h3 className='year'>2010</h3>
        <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
    </div>
    <div className='box'>
        <h3 className='year'>2018</h3>
        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
    </div>
</div>
    </div>
  )
}

export default Main