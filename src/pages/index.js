import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title={"THime"} titleTemplate="%s" />
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <div style={{ maxWidth: `300px`, flex: `1` }}>
        <Image src="thime-icon.png" />
      </div>
      <div style={{ fontFamily: `Roboto`, fontSize: `80px`, fontWeight: 300 }}>
        THime
      </div>
    </div>
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <div style={{ maxWidth: `250px`, flex: `1` }}>
        <a href="https://play.google.com/store/apps/details?id=com.alexbordin.thime">
          <Image alt="Get it on Google Play" src="google-play-badge.png" />
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
