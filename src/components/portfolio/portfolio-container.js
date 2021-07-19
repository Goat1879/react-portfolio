import React, { Component } from "react";

import PortfolioItem  from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

       this.state = {
        pageTitle: "Welcome to my portfolio",
        isLoading: false,
        data: [
            {title: "Republic", category: "NH3" }, 
            {title: "Cimco", category: "NH3" }, 
            {title: "Navy", category: "Military" }, 
            {title: "Carrier", category: "HVAC" },
        ]
       };
       
       this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            }) 
        })
    }
    
    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} />;
        })
    }

    

    render() { 
        if (this.state.isLoading) {
           return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('NH3')}>NH3</button>
                <button onClick={() => this.handleFilter('Military')}>Military</button>
                <button onClick={() => this.handleFilter('HVAC')}>HVAC</button>

                {this.portfolioItems()}

                
            </div>
        );
    }
}