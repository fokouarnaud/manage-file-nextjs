import Head from 'next/head'
import BlogSection from '../../components/BlogSection'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'
import SidePanel from '../../components/SidePanel'
import TrendingList from '../../components/TrendingList'

export default function Home() {
  return (
   <div>
     <Head>
       <title>Acti-blog</title>
     </Head>
     <NavBar/>
     <Hero/>
     <TrendingList/>
     
     <BlogSection/>
    </div>
  )
}
