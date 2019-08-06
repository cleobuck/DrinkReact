import React, { Component } from 'react'

class Likebutton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            like  : 0,
            dislike: 0
        }
    }
    
    increment = () => {
    
        this.setState({
            like: (this.state.like === 0? 1: 0),
            dislike: 0
        })
    }

    decrement = () => {
    
        this.setState({
            like: 0,
            dislike: (this.state.dislike === 0? 1: 0)
        })
    }


    



    render() {

        let likeIcon =  <i class="far fa-thumbs-up"></i>;
        let dislikeIcon = <i class="far fa-thumbs-down"></i>

        if (this.state.like === 1) {
            likeIcon = <i class="fas fa-thumbs-up"></i>;
        }

        if (this.state.dislike === 1) {
            dislikeIcon = <i class="fas fa-thumbs-down"></i>
        }




        return (
           <div className = "likebutton">
              <a onClick={this.increment}>{likeIcon}</a>
              <span>{this.state.like}</span>
               <a onClick={this.decrement}>{dislikeIcon}</a>
             <span>{this.state.dislike}</span>
           </div>

        )

    }

}


export default Likebutton;