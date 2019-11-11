import React from "react"
import { Link, graphql } from "gatsby"

import NavBar from '../components/Globals/navbar'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundTemplate from '../components/Globals/BackgroundTemplate';
import Info from '../components/Home/Info';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    <BackgroundTemplate img={data.img.childImageSharp.fluid} />
    <Info />
  </Layout>
)


export const query = graphql`
{
  img:file(relativePath:{eq:"default-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default IndexPage