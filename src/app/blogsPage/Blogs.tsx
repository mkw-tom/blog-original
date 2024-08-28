'use client';
import { FilterAlt, Search } from '@mui/icons-material';
import Link from 'next/link';
import { useState } from 'react';
import useBlogsSearch from '@/Hooks/useBlogsSearch';
import useBlogsFilter from '@/Hooks/useBlogsFilter';
import Pagination from './Pagenation';
import usePageNation from '@/Hooks/usePageNation';

const Blogs = ({ blogData }: { blogData: BlogDataType[] }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const blogsPerPage = 3;  // 1ページあたりのブログ数

  const { handleChange, searchBlog } = useBlogsSearch(blogData);
  const { filterToggle, isSelect, recentSort, oldestSort } = useBlogsFilter(blogData);
  const { currentArray, pageNumbers, pagenate,  currentPage} = usePageNation(3, blogData)

  // ページングのためのデータ計算
  // const indexOfLastBlog = currentPage * blogsPerPage;
  // const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  // const currentBlogs = searchBlog.slice(indexOfFirstBlog, indexOfLastBlog);

  // // ページ変更時の処理
  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="text-4xl text-orange-600 font-bold">Blogs</h1>
      <div className="md:w-10/12 flex items-center justify-center mx-auto relative">
        <Search className="h-10 w-10 bg-orange-600 p-2 rounded-l-md text-white" />
        <input
          type="text"
          className="w-8/12 h-10 border-none outline-orange-600"
          placeholder='記事を検索'
          onChange={handleChange}
        />
        <button onClick={filterToggle}>
          <FilterAlt className="h-10 w-10 bg-gray-600 p-2 rounded-r-md text-white" />
        </button>
        <ul
          style={{ display: isSelect ? 'block' : 'none' }}
          className="flex-col text-center bg-white rounded-md shadow-xl w-32 absolute right-0 z-20 border-2 duration-300"
        >
          <li
            className="cursor-pointer py-1 border-2 hover:bg-gray-300 rounded-md text-orange-600 hover:border-orange-600"
            onClick={recentSort}
          >
            新しい順
          </li>
          <li
            className="cursor-pointer py-1 border-2 hover:bg-gray-300 rounded-md text-orange-600 hover:border-orange-600"
            onClick={oldestSort}
          >
            古い順
          </li>
        </ul>
      </div>

      <ul className="grid gap-10 lg:gap-20 grid-cols-2 lg:grid-cols-3 mx-auto w-11/12 md:w-10/12 min-h-96 mt-24 animate-fadeUp">
        {currentArray.length === 0 ? (
          <p className="block text-2xl w-96 h-9 mx-auto mt-16 text-center opacity-70">
            記事が見つかりません。
          </p>
        ) : (
          <>
            {currentArray.map((data: any) => (
              <Link
                key={data.id}
                href={`selectBlogPage/${data.id}`}
                className="h-auto mb-10"
              >
                <li className="inline-block w-full h-auto bg-white rounded-md shadow-lg relative hover:opacity-70 hover:duration-1500">
                  <img
                    src={data.eyecatch?.url}
                    alt="eyecatch"
                    className="rounded-t-md"
                  />
                  <div className="h-20">
                    <h2 className="text-center mt-5 ">{data.title}</h2>
                    <p className="absolute bottom-1 right-2 text-sm">
                      更新：{new Date().toLocaleDateString(data.updataDateAt)}
                    </p>
                  </div>
                </li>
              </Link>
            ))}
          </>
        )}
      </ul>

      {/* ページネーション */}
      <Pagination
        pageNumbers={pageNumbers}
        pagenate={pagenate}
        currentPage={currentPage}
        // blogsPerPage={blogsPerPage}
        // totalBlogs={searchBlog.length}
        // paginate={paginate}
        // currentPage={currentPage}
      />
    </div>
  );
};


export default Blogs;
