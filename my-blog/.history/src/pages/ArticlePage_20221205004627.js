import React from 'react'
import { useParams } from 'react-router-dom'
import articles from './article-content'


function ArticlePage() {

      const {articleId} = useParams();
      const article = articles.find(articles => articles.id === articleId)
      console.log(article)

  return (
    <div><h1>This is the Article Page with article id: {articleId}</h1></div>
  )
}

export default ArticlePage