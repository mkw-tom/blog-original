import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainArticle = ({ recentData }: { recentData: BlogDataType }) => {
  return (
    <div className="w-11/12 md:w-6/12 mx-auto mt-16 mb-32 relative group">
      <h2 className="text-4xl font-bold mb-2 text-orange-600">Recent Topic</h2>
      <Link href={`selectBlogPage/${recentData?.id}`}>
        <img src={recentData?.eyecatch?.url} alt={''} className="rounded-md" />
      </Link>
      <div className="absolute bottom-0 right-0 text-lg bg-gray-50 bg-opacity-30 px-5 hidden group-hover:block rounded-l-md ">
        <p>{recentData?.title}</p>
        <p>
          投稿：
          {new Date(recentData?.publishedAt as string).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default MainArticle;
