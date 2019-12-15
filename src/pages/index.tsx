import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

export default function BlogIndex(props: { data: any, location: Location, meta: [] }): JSX.Element {

  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.allMarkdownRemark.edges

  return (
    <div>
      <Layout location={props.location} title={siteTitle}>
        <Bio />
        {posts.map(({ node }: { node: any }) => {
          const title = node.frontmatter.title || 'to be confirmed'
          return (
            <article>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={`google.com`}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    </div>
  )
}



export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
