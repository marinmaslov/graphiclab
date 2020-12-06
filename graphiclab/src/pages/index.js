import React from "react"

import Layout from "../components/layout/base/base"
import Banner from "../components/banners/particles/banner"


const IndexPage = () => (
  <Layout isContainer={false}>
    <Banner/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)

export default IndexPage