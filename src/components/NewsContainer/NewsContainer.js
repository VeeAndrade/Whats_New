import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'


const NewsContainer = (props) => {
  const localNews = props.currentPage.map(article => {
    return <NewsArticle 
    headline={article.headline} 
    image={article.img}
    description={article.description}
    url={article.url}
    key={article.id}
    />
  })
  return (
    <section className='news-container'>
    {localNews}
    </section>
  )
}

export default NewsContainer;