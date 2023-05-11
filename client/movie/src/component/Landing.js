import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div class="flex h-screen bg-slate-900">
        <div class="m-auto">
          <Link to={'/movie'}>
            <p className='bg-white text-slate-900 font-bold px-5 py-2 rounded-[10px]'>
              View All Movie List
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Landing