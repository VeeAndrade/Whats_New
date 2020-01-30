import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({headline, image, url, description}) => {
  return <section className='article-section'>
    <img className='article-image' src={image} alt='news'></img>
    <section className='article-info'>
      <h2 className='article-headline'>{headline}</h2>
      <p className='article-description'>{description}</p>
    </section>
    <section className='url-section'>
      <a className='article-url' href={url}>Link To article</a>
      <p className='article-url-arrow'>→</p>
    </section>
  </section>
}

export default NewsArticle;