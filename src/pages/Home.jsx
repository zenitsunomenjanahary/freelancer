import React from 'react'
import { Layout,Typography} from "antd"
import BannerItems from '../components/BannerItems';
import Banner from '../components/Banner';
import CategoryFreelancer from '../components/CategoryFreelancer';


const Home = () => {
  return (
    <Layout style={{padding:"1rem 2rem 2rem 2rem", background:"white"}}>
      <Banner/>
      <BannerItems/>
      <CategoryFreelancer/>
    </Layout>
  )
}

export default Home