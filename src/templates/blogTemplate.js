import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import _ from "lodash"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          {frontmatter.tags ? 
          <div className="tags-container">
            <ul className="tags-list">
              {frontmatter.tags.map(tag=>(
                <li key={tag+`tag`}>
                <Link to={`/tags/${_.kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div> 
          : null}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
      }
    }
  }
`