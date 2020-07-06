import React from "react"
import { Link } from "gatsby"
import _ from "lodash"

const PostLink = ({ post }) => (
  <div>
    <Link to={"/posts/"+_.kebabCase(post.frontmatter.title)}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
    <br/>
    <span>{post.excerpt}</span>
  </div>
)

export default PostLink