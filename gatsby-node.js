const path=require("path");
const _=require("lodash");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`./src/templates/blogTemplate.js`)
    const tagTemplate = path.resolve(`./src/templates/tagTemplate.js`)
    
    const result = await graphql(`
      {
        postsRemark: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                tags
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000){
          group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `)
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result.data.postsRemark.edges.forEach(({ node }) => {
      createPage({
        path: "/posts/"+_.kebabCase(node.frontmatter.title),
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          title: node.frontmatter.title,
        },
      })
    })
    result.data.tagsGroup.group.forEach((tag)=>{
      createPage({
        path:`/tags/${_.kebabCase(tag.tag)}/`,
        component:tagTemplate,
        context:{
          tag:tag.tag,
        },
      })
    })
  }