import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getBlogData } from '../libs/client';

const Blog = async () => {
  const blogData = await getBlogData();
  console.log(blogData)
  
  return (
    <>
      {blogData.map((data:any, index:number) => (
        <Link key={data.id} href={`blogPages/${index}`} className='w-52 h-52 bg-orange-300'>
          <li  className='inline-block w-52 h-52 bg-white rounded-md shadow-lg px-3 py-3 relative hover:opacity-70 hover:duration-1500'>
            <img src={data.eyecatch?.url} alt="eyecatch"/>
            <h2 className='text-center mt-5 '>{data.title}</h2>
            <p className='absolute bottom-1 right-2 text-sm'>更新：{new Date().toLocaleDateString(data.updataDateAt)}</p>
          </li>
        </Link>
      ))}
    </>
  )
}

export default Blog