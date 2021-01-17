import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout/base/base"
import PageNotFound from "../components/layout/404/404"

const NotFoundPage = () => (
  <>
    <Helmet>
        <title>404 - GraphicLab</title>
    </Helmet>
    <Layout isContainer={true}>
      <PageNotFound/>
    </Layout>
  </>
)

export default NotFoundPage