import React from 'react'
import IMG from 'gatsby-image'

export default function Product({product}) {
    return (
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{minHeight:"60%"}}>
                <IMG fluid={product.image.fluid} className="card-img-top" />
                <div className="card-body text-center">
                    <h6><b>{product.title}</b></h6>
                    <h6>${product.price}</h6>
                    <button className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
                        data-item-id={product.id}
                        data-item-price={product.price}
                        data-item-url="https://ngp-gatsby-coffeeshop.netlify.com/"
                        data-item-image={product.image.fluid.src}
                        data-item-name={product.title}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
