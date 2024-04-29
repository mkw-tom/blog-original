import Image from "next/image";
import BlogList from "./components/BlogList";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer ";


export default function Home() {

  return (
    <div >
      <Header />
      <div className="bg-blue-300 w-full h-96 mt-28 text-4xl">
      </div>
      <BlogList />
      <Footer />
    </div>
  );
}
