import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <>
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign:`center` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav>
    <ul class="nav-container" style={{
        height:55
    }}>
      <div style={{
        margin:`0 auto`,
        maxWidth:960,
        maxHeight:`30%`,
        display:`flex`
      }}>
        <li class="nav-item"><Link to="/about">About</Link></li>
        <li class="nav-item"><Link to="/posts">Posts</Link></li>
        <li class="nav-item"><Link to="/tags">Tags</Link></li>
      </div>
    </ul>
  </nav>
  </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
