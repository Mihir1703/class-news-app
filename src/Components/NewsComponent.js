import React, { Component } from 'react'

export class NewsComponent extends Component {
    render() {
        let {title,description,imageUrl,newsUrl} = this.props
        return (
            <div className="card my-3" style={{width: "18rem"}}>
                <img className="card-img-top" src={imageUrl} alt="img"/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsComponent
