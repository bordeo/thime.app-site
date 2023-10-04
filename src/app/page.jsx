import React from "react";

import Layout from "../components/layout";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL('https://thime.bordin.cloud'),
  title: "THime",
  description: "THime app"
}

export default function IndexPage() {
  return <>
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:creator" content="@bordeo" />
    <meta property="twitter:title" content={metadata.title} />
    <meta property="twitter:description" content={metadata.description} />
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <div style={{ maxWidth: `300px`, flex: `1` }}>
        <Image src="/thime-icon.png" alt="Thime" width={300} height={300} />
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
          <Image
            alt="Get it on Google Play"
            src="/google-play-badge.png"
            width={260}
            height={100}
          />
        </a>
      </div>
    </div>
  </>
}

