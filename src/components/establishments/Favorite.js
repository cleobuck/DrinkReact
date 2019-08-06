import React, { Component } from 'react'

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loved: 0
        }
    }

    pressFav = () => {
        this.setState({
            loved: (this.state.loved === 0? 1: 0)
        })
    }

    render ()  {

        let favButton = <i class="far fa-heart"></i>

        if (this.state.loved === 1) {
            favButton = <i class="fas fa-heart"></i>
        }

        return (
            <div className="favorite">

                <a onClick={this.pressFav}>{favButton}</a>
            </div>
        )
    }
}


export default Favorite