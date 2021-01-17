import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout/base/base"
import Logout from "../components/logout/logout"

const LogOutPage = () => (
  <>
    <Helmet>
      <title>Bye, bye, bye Delilah! - GraphicLab</title>
    </Helmet>
    <Layout>
      <Logout/>
    </Layout>
  </>
)

export default LogOutPage