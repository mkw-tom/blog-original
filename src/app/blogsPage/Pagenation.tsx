import { pagenateProps } from '@/Hooks/usePageNation';
import React from 'react'


const Pagination = ({pageNumbers, pagenate, currentPage} : pagenateProps) => {
  // const pageNumbers = [];
  // { blogsPerPage, totalBlogs, paginate, currentPage }: any

  // for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  return (
    <nav className="mt-8">
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map(number => (
          <li key={number} className={`cursor-pointer px-3 py-1 rounded-md ${number === currentPage ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => pagenate(number)}>
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;