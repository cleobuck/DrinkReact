import React, { Component } from 'react'
import Likebutton from './Likebutton'
import Favorite from './Favorite'


class Establishment extends Component {

        

    render() {

        return (

            <div className="establishment">
                <Likebutton/>
                <Favorite/>
                <h3> {this.props.establishment.name}</h3>
                
                { this.props.establishment.description }

            </div>

        );
    }
}

export default Establishment;