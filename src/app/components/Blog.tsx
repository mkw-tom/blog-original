import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = ({blogData}: any) => {
  console.log(blogData)

  

  return (
    <>
      {blogData.map((data:any, index:number) => (
        <Link href={`blogPages/${index}`}>
          <li key={data.id} className='inline-block w-64 h-64 bg-white rounded-md shadow-lg px-3 py-3 relative hover:opacity-70 hover:duration-1500'>
            <img src={data.eyecatch?.url} alt="eyecatch" width={data.eyecatch?.width} height={data.eyecatch?.height}/>
            <h2 className='text-center mt-5'>{data.title}</h2>
            <p className='absolute bottom-1 right-2'>更新：{new Date().toLocaleDateString(data.updataDateAt)}</p>
          </li>
        </Link>
      ))}
    </>
  )
}

export default Blog