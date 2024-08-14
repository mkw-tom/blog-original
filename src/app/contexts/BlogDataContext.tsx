"use client";
import { getBlogData } from "@/libs/micro-cms/client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


interface blogDataContextType {
  blogData: BlogDataType[];
  setBlogData: Dispatch<SetStateAction<BlogDataType[]>>;
  recentSort: () => void;
  oldestSort: () => void;
}

const blogDataContext = createContext<blogDataContextType | undefined>(
  undefined,
);

export const useBlogData = () => {
  const context = useContext(blogDataContext);
  if (context === undefined) {
    throw new Error("");
  }
  return context;
};

export const BlogDataProvider = ({ children }: { children: ReactNode }) => {
  const [blogData, setBlogData] = useState<BlogDataType[]>([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      const data = await getBlogData();
      setBlogData(data);
    };
    fetchBlogData();
  }, []);

  const recentSort = (): void => {
    const newData = blogData?.sort(
      (a: any, b: any) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
    );
    setBlogData(newData);
  };

  const oldestSort = (): void => {
    const newData = blogData?.sort(
      (a: any, b: any) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt),
    );
    setBlogData(newData);
  };

  const contextValue = {
    blogData,
    setBlogData,
    recentSort,
    oldestSort,
  };

  return (
    <blogDataContext.Provider value={contextValue}>
      {children}
    </blogDataContext.Provider>
  );
};
