import { ChangeEvent, useState } from 'react'

const useBlogsSearch = (blogData: BlogDataType[]) => {
  const [searchText, setSearchText] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e?.target?.value)
  }
  const searchBlog: any = blogData.filter((data: any) =>
    data.title.includes(`${searchText}`)
  );
  return { handleChange, searchBlog }
}

export default useBlogsSearch