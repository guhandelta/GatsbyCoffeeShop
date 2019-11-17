import React from "react"
import { Link, graphql } from "gatsby"
// PageQuery is used here as the data on this page requires validaion for categorizing the data, which is fetched and then accessed-
//- from teh
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundTemplate from '../components/Globals/BackgroundTemplate';
import Info from '../components/Home/Info';
import Menu from '../components/Home/Menu';
import Products from '../components/Home/Products';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundTemplate img={data.img.childImageSharp.fluid} />
    <Info />
    <Menu items={data.menu} />
    <Products />
  </Layout>
)


export const query = graphql`
{
  img:file(relativePath:{eq:"default-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
  menu:allContentfulBeverages{
    edges{
      node{
        id
        ttle
        description{
          description
        }
        price
        category
        image{
          fixed(width:50,height:50){
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
}
`
export default IndexPage 