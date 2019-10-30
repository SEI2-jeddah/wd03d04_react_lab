import React, { Component } from 'react'

export default class Fave extends Component {
    state = {
            isFave :false
          }
    
      handleClick = (e) => {
        console.log("handling Fave click!")
        e.stopPropagation()
        this.props.onFaveToggle()
      }
    render() {
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
            <div className={`film-row-fave ${this.props.isFave? 'remove_from_queue' : ''}`} onClick={this.handleClick}>
                <p className="material-icons">{isFave}</p>
            </div>
        )
    }
}
