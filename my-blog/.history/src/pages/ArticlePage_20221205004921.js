import React from 'react'
import { useParams } from 'react-router-dom'
import articles from './article-content'


function ArticlePage() {

      const {articleId} = useParams();
      const article = articles.find(article => article.name === articleId)
      console.log(article)

  return (
    <div><h1>{article.title}</h1></div>
  )
}

export default ArticlePage