import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default () =>(
    <>
        <SEO title="About"/>
        <Layout>
            <div style={{color:`black`}}>
                <h1>About Me</h1>
                <dl>
                    <dt>Name</dt>
                    <dd>Seo JuWon</dd>
                    <dt>Major</dt>
                    <dd>Coumputer Engineering, KyungHee Univ.(2017~)</dd>    
                    <dt>Interested in</dt>
                    <dd>
                        <ul>
                            <li>Machine Learning</li>
                            <li>Deep Learning</li>
                            <li>Node.js</li>
                            <li>Python</li>
                        </ul>
                    </dd>
                </dl>
                <p>(<a href="https://github.com/jjuon">GitHub</a>/<a href="mailto:jwseo001@naver.com">Mail</a>)</p>
            </div>
        </Layout>
    </>
)