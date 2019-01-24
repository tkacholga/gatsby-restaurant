import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import menuImg from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menuImg}>
      <Banner title="menu" subtitle={`let's dig in `} />
    </PageHeader>
  </Layout>
)

export default MenuPage
