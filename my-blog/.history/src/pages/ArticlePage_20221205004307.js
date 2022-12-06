import React from 'react'
import { useParams } from 'react-router-dom'


function ArticlePage() {

      const {articleId} = useParams();

  return (
    <div><h1>This is the Article Page with article id {articleId}</h1></div>
  )
}

export default ArticlePage