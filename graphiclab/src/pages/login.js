import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout/base/base"
import Login from "../components/login/login/login"

const LogInPage = () => (
  <>
    <Helmet>
      <title>Log in - GraphicLab</title>
    </Helmet>
    <Layout>
      <Login/>
    </Layout>
  </>
)

export default LogInPage