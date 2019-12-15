import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { SEO } from "../components/seo"

export default (props: { data: any, location: Location, meta: [] }): JSX.Element => {

  const siteTitle = props.data.site.siteMetadata.title
  return (
    <div>
      <Layout location={props.location} title={siteTitle}>
        <SEO title={`404: Not Found`} meta={props.meta} />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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
  }
`


