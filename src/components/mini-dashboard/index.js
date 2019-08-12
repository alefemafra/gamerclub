import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './miniDashboard.scss';
import API from '../Services'

class MiniDashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: ''
        }
    }

    componentDidMount(){
        const _this = this;
        axios.get(API.url)
        .then(function (res) {
            _this.setState({data: res.data})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    render() {
        const { data } = this.state;
        console.log(data)
        return (
            <div className="mini-dashboard">
                {(data !== '') ? 
                <>
                    <Header userInfo={data.user} />
                    <Content games={data.games} server={data['4fun']}/>
                    <Footer online={data.online} banned={data.latest_banned} />
                </>
                : ''}
            </div>
        );
    }
}

export default MiniDashboard;