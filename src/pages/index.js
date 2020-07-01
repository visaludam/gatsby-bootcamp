import React from 'react'
import {Link} from 'gatsby' 

import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hii</h1>
      <h2>I'm Visal !!</h2>
      <p>
        <Link to="/about">About Me </Link>
        <br/>
        <Link to="/contact">Contact Me </Link>
        <br/>
        <Link to="/blog">Blog </Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage