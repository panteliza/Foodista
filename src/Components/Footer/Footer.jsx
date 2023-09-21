import React from 'react'
import { AiOutlineCopyright } from 'react-icons/ai';
import {  BsLinkedin} from 'react-icons/bs';
import {  BsFacebook} from 'react-icons/bs';
import { BsInstagram} from 'react-icons/bs';
import { BsTwitter} from 'react-icons/bs';


export default function Footer() {
  return (
    <div className='pt-[30px]  mb-[10px]'>
      <div className='flex justify-between pr-[20px] '>
      <div className="flex justify-start  items-center pl-[20px]">
       
        <div className="copu"><AiOutlineCopyright/></div>
        <div className="h">2022 Foodista <sup>TM</sup>. All Rights Reserved</div>
      

      </div>
      <div className=' w-[500px] flex  items-center justify-end  '>
        <ul className='flex gap-[100px]'>
          <li><BsLinkedin/></li>
          <li><BsFacebook/></li>
          <li><BsInstagram/></li>
          <li><BsTwitter/></li>
        
</ul>
       
      </div>
      </div>
    </div>
  )
}