import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/postLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return(
    <>
      <SEO title="Index"/>
      <Layout>
        <h1 style={{textAlign:`center`}}>Welcome</h1>
      </Layout>
    </>
  )
}

export default IndexPage