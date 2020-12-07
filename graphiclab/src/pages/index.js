import React from "react"

import Layout from "../components/layout/base/base"
import Banner from "../components/banners/particles/banner"

import Newsletter from "../components/newsletter/newsletter"


const IndexPage = () => (
  <Layout isContainer={false}>
    <Banner/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Newsletter/>
  </Layout>
)

export default IndexPage