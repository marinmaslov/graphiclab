import React from "react"

import Layout from "../components/layout/base/base"
import Banner from "../components/banners/particles/banner"
import Contest from "../components/contest/contest"
import Newsletter from "../components/newsletter/newsletter"


const IndexPage = () => (
  <Layout isContainer={false}>
    <Banner/>
    <Contest contest="sticker"/>
    <Contest contest="shirt"/>
    <Newsletter/>
  </Layout>
)

export default IndexPage