import React, { Component } from "react";
import axios from "axios";

import PortfolioItem  from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

       this.state = {
        pageTitle: "Welcome to my portfolio",
        isLoading: false,
        data: [
            {title: "Republic", category: "NH3", slug: "republic" }, 
            {title: "Cimco", category: "NH3", slug: "cimco" }, 
            {title: "Navy", category: "Military", slug: "navy" }, 
            {title: "Carrier", category: "HVAC", slug: "carrier" },
        ]
       };
       
       this.handleFilter = this.handleFilter.bind(this);
       this.getPortfolioItems = this.getPortfolioItems.bind(this);

    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            }) 
        })
    }

    getPortfolioItems() {
        axios
        .get('https://davidbriggs.devcamp.space/portfolio/portfolio_items')
        .then(response => {
          console.log("response data", response);
        })
        .catch(error => {
          console.log(error);
        });
      }
    
    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />;
        })
    }

    

    render() { 
        if (this.state.isLoading) {
           return <div>Loading...</div>;
        }

        this.getPortfolioItems();

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