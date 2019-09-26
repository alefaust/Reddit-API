import React, { Component } from 'react';

import api from '../../services/api';

import "./styles.css";

export default class Main extends Component {

    state = {
        item : "new",
        list : [],
        infoList : {}
    }

    componentDidMount (){
        this.loadlist();
    }

    loadlist = async (item = "new") => {
       
        const response = await api.get(`${item}.json`);
        console.log(response.data.data);
        const {dist,...infoList} = response.data.data;

        this.setState({ list: dist, infoList });

    }

    selectButton = (listPage) => {
              
        this.loadlist(listPage);
       
    }

    
    render(){
        return (
            <div className="info-list">
                <div className="action">
                    <button onClick={this.selectButton.bind(this, "new")}>NEW</button>
                    <button onClick={this.selectButton.bind(this, "hot")}>HOT</button>
                    <button onClick={this.selectButton.bind(this, "rising")}>RISING</button>
                </div>
                <article className="info-list">
                    <h1>Lista</h1>
                </article>
                <div className="action">
                    <button>+ Ver mais</button>
                </div>
            </div>
        )
    }


}