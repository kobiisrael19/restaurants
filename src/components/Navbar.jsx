import React, { useRef } from 'react'
import './style.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const refName = useRef();
  return (
    <div>
      <div className='navBarColor container'>
        <div className='text-white text-center mt-5 pt-4' style={{ height: '180px' }}><span className='fs-1'>Find your table for any accosion</span><br />
          <div className='d-flex justify-content-center align-items-center mt-4'>
            <input ref={refName} className='p-2 rounded-2 me-2' type="text" placeholder='search. . . ' />
            <button className='btn btn-dark me-2'>lets go</button>
           <Link to={'/creat'}> <button className='btn btn-dark'>Create</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
