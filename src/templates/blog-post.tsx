import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import { rhythm, scale } from "../utils/typography"


export default function BlogPostTemplate(props: {
  data: {
    markdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  },
  pageContext: any,
  location: Location
}): JSX.Element {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  return (
    <div>
      <Layout location={props.location} title={siteTitle}>
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {props.context.previous && (
                <Link to={props.context.previous.fields.slug} rel="prev">
                  ← {props.context.previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {props.context.next && (
                <Link to={props.context.next.fields.slug} rel="next">
                  {props.context.next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    </div>
  )
}


export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
