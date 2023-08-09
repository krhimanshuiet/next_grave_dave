
import Link from "next/link"
import MyProfilePic from "./components/MyProfilePic"
export default function Home() {
  return (
   <main className="px-6 mx-auto">
    <h1>Main Page</h1>
    <Link className="bg-pink-300 shadow-inner p-1 " href="/about">Link to about Page</Link>
    <br/>
    <Link className="bg-blue-300 shadow-inner p-1 " href="/users">Link to users Page</Link>
    <p className="mt-12 mb-12 text-3xl text-center text-white">Hello and welcome &nbsp;
    <span className="whitespace-nowrap">
      I am <span className="font-bold">Himanshu Singh</span>
    </span>
    </p>
   </main>
  )
}
