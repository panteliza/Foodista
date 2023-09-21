import React from 'react'

import chef1 from '../../assets/img/chef1.png'
export default function Middle6() {
  return (
    <div className='mt-[20px] py-[30px] px-[30px]  flex gap-[15px]'>
      <div className="w-[250px] h[250px] transition-transform duration-200 transform hover:scale-125 "><img src={chef1} /></div>
      <div className="font-semibold text-[30px]  flex items-center transition-transform duration-200 transform hover:scale-125">Foodista</div>
    </div>
  )
}