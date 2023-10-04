import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

function SEO({ description, lang, meta, title, titleTemplate }) {
  const metaDescription = "THime app";

  return (
    <Head>
      <meta lang={lang} />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content="@bordeo" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  titleTemplate: PropTypes.string,
};

export default SEO;
