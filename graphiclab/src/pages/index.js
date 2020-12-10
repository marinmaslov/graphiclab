import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout/base/base"
import Banner from "../components/banners/particles/banner"
import Quote from "../components/banners/custom/banner"
import Contest from "../components/contest/contest"
import Newsletter from "../components/newsletter/newsletter"


const IndexPage = () => (
  <>
    <Helmet>
        <title>GraphicLab</title>
    </Helmet>
    <Layout isContainer={false}>
      <Banner/>
      <Contest contest="sticker"/>
      <Quote name="quote"/>
      <Contest contest="shirt"/>
      <Newsletter/>
    </Layout>
  </>
)

export default IndexPage