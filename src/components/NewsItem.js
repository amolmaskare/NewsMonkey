import React, { Component } from 'react';
import "../index"

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{display:'flex', justifyContent: 'flex-end', position: 'absolute' , right:'0'}}>
        <span className=' badge rounded-pill bg-danger' >{source}</span>
        </div>
          <img src={!imageUrl ? "https://images.indianexpress.com/2023/04/nitish-kumar-caste-census.jpg?w=640" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='caed-text'><small className='text-muted'>By {author} on {new Date(publishedAt).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark">Read More &raquo;</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
