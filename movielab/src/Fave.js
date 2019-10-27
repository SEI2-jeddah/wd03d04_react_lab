import React, { Component } from 'react'

export default class Fave extends Component {
    constructor (){
        super();
        this.state = {
            EventSelect: null,
            isFave :false
          }
    }
      handleClick = (e) => {
        console.log("handling Fave click!")
        e.stopPropagation()
        this.setState({
          isFave: !this.state.isFave,
          EventSelect : e
        })
      }
    render() {
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div className={`film-row-fave ${this.state.isFave? 'remove_from_queue' : ''}`} onClick={this.handleClick}>
                <p className="material-icons">{isFave}</p>
            </div>
        )
    }
}
