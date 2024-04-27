import Image from "next/image";
import BlogList from "./components/BlogList";
import Link from "next/link";
import Header from "./components/Header";


export default function Home() {

  return (
    <div>
      <Header />
      <BlogList />
    </div>
  );
}
