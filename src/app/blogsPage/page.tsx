import React from 'react';
import { getBlogData } from '@/libs/micro-cms/client';
import { GetStaticProps } from 'next';
import Header from '@/components/Header';

import Blogs from './Blogs';
import Footer from '@/components/Footer ';


// interface BlogPoppsType {
//   blogData: BlogDataType[];
//   recentData: BlogDataType;
// }

const page = async () => {
  const blogData = await getBlogData();
  const recentData = blogData.sort(
    (a: any, b: any) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
  )[0];
  return (
    <div className="w-full h-auto bg-mainColor">
      <Header />
      <Blogs blogData={blogData} />
      <Footer />
    </div>
  );
};

export default page;
