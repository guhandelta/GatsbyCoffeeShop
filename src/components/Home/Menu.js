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
