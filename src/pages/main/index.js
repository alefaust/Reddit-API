import React, { Component } from 'react';
import api from '../../services/api';
import Content from '../content';
import "./styles.css";
import thumbdf from './img/thumb.png';

export default class Main extends Component {

    state = {
        item : "new",
        limit : 0,
        infoList : [],
        endPost: 10,
        imgThumb: thumbdf
    }

    componentDidMount (){
        this.loadlist();
    }

    loadlist = async (item = "new") => {
       
        const response = await api.get(`${item}.json`);
        
        const length = response.data.data.dist;
        
        const conteArray = response.data.data.children;
        
        this.setState({
            limit: length,
            infoList : conteArray.map((retorna) => {
                return {
                    id:  retorna.data.id,
                    imgThumb: retorna.data.thumbnail,
                    userid: retorna.data.subreddit,
                    title: retorna.data.title,
                    date: retorna.data.created_utc,
                    url: retorna.data.permalink,
                    domain: retorna.data.domain
                }})
        });

    }

    selectButton = (listPage) => {
        this.setState({
            endPost : 10,
        })
        this.loadlist(listPage);
       
    }

    moreInfo = async () => {
        
        const {endPost, limit} = this.state;
        
        let controlList = 0;
        
        if ( endPost < limit ){
            controlList = endPost + 10;
           if (controlList > limit) controlList = limit;           
        }
        else if ( endPost === limit ){
            controlList = 10;
        }
        await this.setState({
            endPost : controlList,
        })

    }
    
    render(){

        const {infoList, endPost, limit, imgThumb} = this.state;
       
        return (
            <div className="info-list">
                <div className="actions">
                    <button onClick={this.selectButton.bind(this, "new")}>NEW</button>
                    <button onClick={this.selectButton.bind(this, "hot")}>HOT</button>
                    <button onClick={this.selectButton.bind(this, "rising")}>RISING</button>
                </div>
                <Content infoList={infoList} endPost={endPost} imgThumb={imgThumb}/>
                <div className="actions">
                    <button className="plus" onClick={this.moreInfo} >{limit===endPost ? "- ver menos" : "+ Ver mais"}</button>
                </div>
            </div>
        )
    }


}