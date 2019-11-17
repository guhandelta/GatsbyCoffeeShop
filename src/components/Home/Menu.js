import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'

const getCategories = items =>{
    let tempItems = items.map(item => { return item.node.category; });
    let tempCategories = new Set(tempItems);
    let categories = Array.from(tempCategories);
    categories= ["all",...categories]
    return categories;
}


export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: props.items.edges,
            beverageList: props.items.edges,
            categories: getCategories(props.items.edges)
        };
    }

    handleItems = category =>{
        let tempBeverages = [...this.state.items];
        if(category === "all"){
            this.setState(()=>{
                return {beverageList:tempBeverages}
            })
        }else{
            let items = tempBeverages.filter(({node})=>node.category === category);
            this.setState(() => { return {beverageList:items} })
        }
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
                                <div className="row mb-5">
                                    <div className="col-10 mx-auto text-center">
                                        {
                                            this.state.categories.map((category,index) => { // This alse displays any new categories added
                                                return( 
                                                    <button key={index} onClick={() => {this.handleItems(category);}} className="btn btn-yellow text-capitalize m-3">
                                                        {category}
                                                    </button>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                                {/* Items */}
                                <div className="row mb-5">
                                    {this.state.beverageList.map(({node}) =>{
                                        return(
                                            <div key={node.id } className="col-11 col-md-6 my-3 d-flex mx-auto">
                                                {/* Item Image */}
                                                <div className="">
                                                    <Img fixed={node.image.fixed} />
                                                </div>
                                                {/* Item Description */}
                                                <div className="flex-grow-1 px-3">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="mb-0">
                                                            <small>
                                                                <strong>
                                                                    {node.title}
                                                                </strong>
                                                            </small>
                                                        </h6>
                                                        <h6 className="mb-0 text-yellow">
                                                            <small>
                                                                <strong>
                                                                    ${node.price}
                                                                </strong>
                                                            </small>
                                                        </h6>
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
