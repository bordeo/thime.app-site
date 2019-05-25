import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

function renderImage(file) {
  return file && <Img fluid={file.node.childImageSharp.fluid} />
}
const Image = ({ src }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
        ) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={({ images }) =>
      renderImage(images.edges.find(image => image.node.relativePath === src))
    }
  />
)
Image.propTypes = {
  image: PropTypes.string,
}
export default Image
