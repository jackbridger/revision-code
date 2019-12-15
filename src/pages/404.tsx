import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default (props: { data: any, location: Location, meta: [] }): JSX.Element => {

  const siteTitle = props.data.site.siteMetadata.title
  return (
    <div>
      <Layout location={props.location} title={siteTitle}>
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


