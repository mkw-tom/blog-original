import React from 'react';
import MainArticle from './MainArticle';
import Header from '../components/Header';
import { getBlogData } from '@/libs/micro-cms/client';
import BlogList from './BlogList';
import Footer from '@/components/Footer ';
import { GetStaticProps } from 'next';

// interface BlogPoppsType {
//   blogData: BlogDataType[];
//   recentData: BlogDataType;
// }

const page = async () => {
  const blogData = await getBlogData();
  const recentData = blogData
    .sort(
      (a: any, b: any) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
    )[0];
  return (
    <div className="w-full h-auto bg-mainColor">
      <Header />
      <MainArticle recentData={recentData} />
      <BlogList blogData={blogData}/>
      <Footer />
    </div>
  );
};

export default page;
