import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Footer=()=>(
    <>
        <footer class={'footer-container'}>
            <div
                style={{
                    margin:`0 auto`,
                    maxwidth: 960,
                    maxHeight:`30%`,
                    padding: `1.45rem 1.0875rem`,
                    display:`flex`,
                    color:`white`,
                }}>
                © {new Date().getFullYear()} JuWon Seo. All rights reserved. Built with&nbsp;
                {' '}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
        </footer>
    </>
)

export default Footer