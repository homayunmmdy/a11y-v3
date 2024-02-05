import React from 'react'
import MainNews from './components/mainNews/MainNews'
import UnderMain from './components/underMain/UnderMain'
import News from './components/news/News'
import Gallery from './components/Gallery/page'

const NewsPage = () => {
  return (
    <div>
      <MainNews />
      <UnderMain />
      <News />
      <Gallery />
    </div>
  )
}

export default NewsPage
