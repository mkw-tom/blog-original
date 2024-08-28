import React, { useState } from 'react'

const useBlogsFilter = (blogData: BlogDataType[]) => {
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('新しい順');
  const recentSort = (): void => {
    blogData.sort(
      (a: any, b: any) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
    );
    // setBlogs(newData);
    setButtonText('新しい順');
    setIsSelect(false);
  };

  const oldestSort = (): void => {
    blogData.sort(
      (a: any, b: any) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt)
    );
    // setBlogs(newData);
    setButtonText('古い順');
    setIsSelect(false);
  };
  
  const filterToggle = () => {
    setIsSelect(!isSelect);
  }


  return { isSelect, filterToggle, buttonText, recentSort, oldestSort}
}

export default useBlogsFilter