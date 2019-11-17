import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: props.items.edges,
            beveragePack: props.items.edges
        };
    }
    render() {
        if(this.state.items.length>0){
            return(
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Best of out products" />
                        <div className="row mb-5">
                            <div className="col">
                                <h1>Beverages Currently Available</h1>
                                {/* Categories */}
                                {/* Items */}
                                <div className="row mb-5">
                                    {this.state.beveragePack.map(({node}) =>{
                                        return(
                                            <div key={node.id } className="col-11 col-md-6 my-3 d-flex mx-auto">
                                                {/* Item Image */}
                                                <div className="">
                                                    <Img fixed={node.image.fixed} />
                                                </div>
                                                {/* Item Description */}
                                                <div className="flex-grow-1 px-3">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="mb-0">{node.title}</h6>
                                                        <h6 className="mb-0">${node.price}</h6>
                                                    </div>
                                                    <p className="text-muted">
                                                        <small>
                                                            {node.description.description}
                                                        </small>
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }else{
            return(
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Best of of products" /> 
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center test-capitalize">
                                <h1>No items to display</h1>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }

    }
}
