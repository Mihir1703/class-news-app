import React, { Component } from 'react'
import NewsComponent from './NewsComponent'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page:1
        }
    }
    async componentDidMount(){
        let url = `https://node.mihirwaykole.repl.co/${this.state.page}`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles : parsedData.articles})
    }
    HandlePrevClick = async() => {
        let url = `https://node.mihirwaykole.repl.co/${this.state.page}`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            page:this.state.page + 1,
            articles : parsedData.articles
        })
    }
    HandleNextClick = async() => {
        console.log("clickd")
        let url = `https://node.mihirwaykole.repl.co/${this.state.page+1}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page:this.state.page - 1,
            articles : parsedData.articles
        })
    }
    render() {
        return (
            <div className="container my-3 ">
                <h2>News-Today - Top Headlines only for You!</h2>
                <div className="row d-flex justify-content-center">
                    {this.state.articles.map((element)=>{
                        if (element.urlToImage) {
                            return <div className="col-md-3" key={element.url}>
                        <NewsComponent title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://img.icons8.com/nolan/64/no-image.png"} newsUrl={element.url}></NewsComponent>
                        </div>
                        }
                    })}
                    
                </div>
                <div className="container">
                <div class="d-flex justify-content-around">

                <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.HandlePrevClick}>&larr; Previous</button>
                <button type="button"  class="btn btn-dark" onClick={this.HandleNextClick}>Next &rarr;</button>
                </div>
                </div>
            </div>
        )
    }
}

export default News
