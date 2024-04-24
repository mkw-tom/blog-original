import Image from 'next/image'
import React from 'react'

const Article = ({blogData}: any) => {
  console.log(blogData)

  return (
    <ul className='sm flex  w-11/12 mx-auto items-center gap-8 bg-blue-300'>
      {blogData.map((data:any) => (
        <li key={data.id} className='inline-block w-64 h-64 bg-white rounded-md shadow-lg px-3 py-3'>
          <img src={data.eyecatch?.url} alt="" />
          <h2>{data.title}</h2>
          <h3>{data.text}</h3>
        </li>
      ))}
    </ul>
  )
}

export default Article