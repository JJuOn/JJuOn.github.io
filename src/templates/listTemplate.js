import React from "react"
import { graphql, Link } from "gatsby"
import PostLink from "../components/postLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Template = ({pageContext,data}) => {
  const Posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)
  const currentPage=pageContext.currentPage
  const numPages=pageContext.numPages
  const prevPage=(currentPage===2 ? " " : `${currentPage-1}`)

  return (
  <>
    <SEO title="Posts"/>
    <Layout>
      <h1>Posts</h1>
      <div>{Posts}</div>
      <div style={{textAlign:`center`}}>
          {currentPage!==1 ? <Link to={`/posts/${prevPage}`}>{"<"}</Link> : " "}
          {" "}
          {currentPage}
          {" "}
          {currentPage===numPages ? "" : <Link to={`/posts/${currentPage+1}`}>{">"}</Link>}
      </div>
    </Layout>
  </>
  )
}

export default Template

export const pageQuery = graphql`
  query mainListQuery($limit: Int!,$skip: Int!){
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            tags
          }
        }
      }
    }
  }
`