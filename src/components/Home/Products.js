import React from 'react'
import Product from './Product'
import Title from '../Globals/Title'
import { StaticQuery, graphql } from 'gatsby'
// StaticQuery is used here, unlike the page query in index.js, as the data fetched for this page does'nt require any validation/filterin

const productQuery = graphql`
    {
        products: allContentfulBeveragePack{
            edges{
                node{
                    id
                    title
                    price
                    image{
                        fluid(maxHeight:426){
                            src
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            } 
        }
    }  
`

export default function Products() {
    return (
        <StaticQuery query={productQuery}
            render={ data => {
                    return(
                        <section className="py-5">
                            <div className="container">
                                <Title title="Packs" />
                                <div className="row">
                                    {
                                        data.products.edges.map(({node:product}) => { // name the node received as `product` and destructurize it
                                            return <Product key={product.id} product={product} /> 
                                            // Entire node(named as product) is passed as product prop to the Product component
                                        })
                                    }
                                </div>
                            </div>
                        </section>  
                    );
                }   
            }  
        />
        
    );
}
